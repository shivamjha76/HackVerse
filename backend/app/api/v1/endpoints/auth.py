from datetime import datetime, timedelta, UTC
from uuid import uuid4
import secrets
from fastapi import APIRouter, Depends, HTTPException, Request
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from app.services.email import (
    send_verification_email,
    send_password_reset_email,
)
from app.core.config import settings
from app.core.security import create_access_token, get_current_user
from app.crud.session import create_session
from app.crud.user import (
    authenticate_user,
    create_user,
    get_user_by_email,
    verify_user_email,
    get_user_by_id,
)

from app.crud.password_reset import (
    create_password_reset_token,
    get_password_reset_by_token,
    mark_password_reset_as_used,
)
from app.database.database import get_db
from app.models.session import UserSession
from app.schemas.token import Token
from app.schemas.user import UserRegister, UserResponse
from app.crud.login_activity import create_login_activity
from app.crud.email_verification import (
    create_verification_token,
    get_verification_by_token,
    mark_verification_as_used,
)

from app.core.security import (
    create_access_token,
    get_current_user,
    hash_password,
)

router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post("/register", response_model=UserResponse, status_code=201)
def register(
    user: UserRegister,
    db: Session = Depends(get_db)
):
    existing_user = get_user_by_email(
        db,
        user.email
    )

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    db_user = create_user(
        db,
        user
    )

    verification_token = secrets.token_urlsafe(32)

    expires_at = (
        datetime.now(UTC)
        + timedelta(hours=24)
    )

    create_verification_token(
         db=db,
         user_id=db_user.id,
         token=verification_token,
         expires_at=expires_at,
    )

    send_verification_email(
    recipient_email=db_user.email,
    verification_token=verification_token,
   )

    return db_user


@router.post("/login", response_model=Token)
def login(
    request: Request,
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
):
    db_user = authenticate_user(
        db,
        form_data.username,
        form_data.password,
    )

    if not db_user:
        failed_user = get_user_by_email(db, form_data.username)

        if failed_user:
            device = request.headers.get("user-agent")
            ip_address = request.client.host if request.client else None

            create_login_activity(
                db=db,
                user_id=failed_user.id,
                device=device,
                ip_address=ip_address,
                success=False,
            )

        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    if not db_user.is_email_verified:
     raise HTTPException(
        status_code=403,
        detail="Please verify your email before logging in"
    )

    session_id = str(uuid4())
    expires_at = datetime.now(UTC) + timedelta(
        minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES
    )
    device = request.headers.get("user-agent")
    ip_address = request.client.host if request.client else None

    create_session(
        db=db,
        user_id=db_user.id,
        session_id=session_id,
        device=device,
        ip_address=ip_address,
        expires_at=expires_at,
    )

    create_login_activity(
        db=db,
        user_id=db_user.id,
        device=device,
        ip_address=ip_address,
        success=True,
    )

    token = create_access_token({"sub": db_user.email, "session_id": session_id})

    return {"access_token": token, "token_type": "bearer"}


@router.get("/me")
def get_me(current_user=Depends(get_current_user)):
    return current_user

@router.get("/verify-email")
def verify_email(
    token: str,
    db: Session = Depends(get_db),
):
    verification = get_verification_by_token(
        db,
        token
    )

    if verification is None:
        raise HTTPException(
            status_code=400,
            detail="Invalid verification token"
        )

    if verification.used:
        raise HTTPException(
            status_code=400,
            detail="Verification token has already been used"
        )

    if verification.expires_at <= datetime.utcnow():
        raise HTTPException(
            status_code=400,
            detail="Verification token has expired"
        )

    user = get_user_by_id(
        db,
        verification.user_id
    )

    if user is None:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    verify_user_email(
        db,
        user
    )

    mark_verification_as_used(
        db,
        verification
    )

    return {
        "message": "Email verified successfully"
    }
    
@router.post("/resend-verification")
def resend_verification(
    email: str,
    db: Session = Depends(get_db),
):
    user = get_user_by_email(db, email)

    if user is None:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    if user.is_email_verified:
        raise HTTPException(
            status_code=400,
            detail="Email is already verified"
        )

    verification_token = secrets.token_urlsafe(32)

    expires_at = (
        datetime.now(UTC)
        + timedelta(hours=24)
    )

    create_verification_token(
        db=db,
        user_id=user.id,
        token=verification_token,
        expires_at=expires_at,
    )

    send_verification_email(
        recipient_email=user.email,
        verification_token=verification_token,
    )

    return {
        "message": "Verification email sent successfully."
    }
    
@router.post("/forgot-password")
def forgot_password(
    email: str,
    db: Session = Depends(get_db),
):
    user = get_user_by_email(db, email)

    # Always return the same response
    # so we don't reveal whether an email exists.
    if user is None:
        return {
            "message": "If an account exists with this email, a password reset link has been sent."
        }

    reset_token = secrets.token_urlsafe(32)

    expires_at = (
        datetime.now(UTC)
        + timedelta(hours=1)
    )

    create_password_reset_token(
        db=db,
        user_id=user.id,
        token=reset_token,
        expires_at=expires_at,
    )

    send_password_reset_email(
        recipient_email=user.email,
        reset_token=reset_token,
    )

    return {
        "message": "If an account exists with this email, a password reset link has been sent."
    }
    
@router.post("/reset-password")
def reset_password(
    token: str,
    new_password: str,
    db: Session = Depends(get_db),
):
    password_reset = get_password_reset_by_token(
        db,
        token
    )

    if password_reset is None:
        raise HTTPException(
            status_code=400,
            detail="Invalid password reset token"
        )

    if password_reset.used:
        raise HTTPException(
            status_code=400,
            detail="Password reset token has already been used"
        )

    if password_reset.expires_at <= datetime.utcnow():
        raise HTTPException(
            status_code=400,
            detail="Password reset token has expired"
        )

    user = get_user_by_id(
        db,
        password_reset.user_id
    )

    if user is None:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    user.password = hash_password(new_password)

    db.commit()
    db.refresh(user)

    mark_password_reset_as_used(
        db,
        password_reset
    )

    return {
        "message": "Password reset successfully"
    }