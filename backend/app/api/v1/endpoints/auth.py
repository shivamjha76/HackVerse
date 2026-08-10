from datetime import datetime, timedelta, UTC
from uuid import uuid4

from fastapi import APIRouter, Depends, HTTPException, Request
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app.core.config import settings
from app.core.security import create_access_token, get_current_user
from app.crud.session import create_session
from app.crud.user import authenticate_user, create_user, get_user_by_email
from app.database.database import get_db
from app.models.session import UserSession
from app.schemas.token import Token
from app.schemas.user import UserRegister, UserResponse

router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post("/register", response_model=UserResponse, status_code=201)
def register(user: UserRegister, db: Session = Depends(get_db)):
    existing_user = get_user_by_email(db, user.email)

    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    return create_user(db, user)


@router.post("/login", response_model=Token)
def login(
    request: Request,
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
):
    db_user = authenticate_user(db, form_data.username, form_data.password)

    if not db_user:
        raise HTTPException(status_code=401, detail="Invalid email or password")

    session_id = str(uuid4())
    expires_at = datetime.now(UTC) + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
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

    token = create_access_token({"sub": db_user.email, "session_id": session_id})

    return {"access_token": token, "token_type": "bearer"}


@router.get("/me")
def get_me(current_user=Depends(get_current_user)):
    return current_user