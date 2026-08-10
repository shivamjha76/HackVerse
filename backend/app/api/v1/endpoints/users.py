from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.core.security import get_current_user, oauth2_scheme, verify_access_token
from app.schemas.profile import ProfileUpdate, ProfileResponse
from app.crud.user import update_profile, change_password
from fastapi import APIRouter, Depends, HTTPException
from app.schemas.password import PasswordChange
from app.schemas.session import SessionResponse
from app.crud.session import get_user_sessions, revoke_session
from app.crud.login_activity import get_user_login_activity
from app.schemas.login_activity import LoginActivityResponse

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@router.get(
    "/me",
    response_model=ProfileResponse
)
def get_profile(
    current_user=Depends(get_current_user)
):
    return current_user

@router.get(
    "/me/sessions",
    response_model=list[SessionResponse]
)
def get_active_sessions(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
    token: str = Depends(oauth2_scheme)
):
    sessions = get_user_sessions(
        db,
        current_user.id
    )

    payload = verify_access_token(token)

    current_session_id = (
        payload.get("session_id")
        if payload
        else None
    )

    return [
        {
            "id": session.id,
            "device": session.device,
            "ip_address": session.ip_address,
            "created_at": session.created_at,
            "last_active_at": session.last_active_at,
            "expires_at": session.expires_at,
            "is_current": session.session_id == current_session_id,
        }
        for session in sessions
    ]

@router.get(
    "/me/login-activity",
    response_model=list[LoginActivityResponse]
)
def get_login_activity(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return get_user_login_activity(
        db,
        current_user.id
    )

@router.delete("/me/sessions/{session_id}")
def revoke_user_session(
    session_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    session = revoke_session(
        db,
        session_id,
        current_user.id
    )

    if session is None:
        raise HTTPException(
            status_code=404,
            detail="Session not found"
        )

    return {
        "message": "Session revoked successfully"
    }
    
@router.put(
    "/me",
    response_model=ProfileResponse
)
def edit_profile(
    profile: ProfileUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return update_profile(
        db,
        current_user,
        profile
    )
    
@router.put(
    "/me/password"
)
def edit_password(
    password: PasswordChange,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    user = change_password(
        db,
        current_user,
        password.current_password,
        password.new_password
    )

    if user is None:
        raise HTTPException(
            status_code=400,
            detail="Current password is incorrect"
        )

    return {
        "message": "Password updated successfully"
    }