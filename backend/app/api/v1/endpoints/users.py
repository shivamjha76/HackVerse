from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.core.security import get_current_user
from app.schemas.profile import ProfileUpdate, ProfileResponse
from app.crud.user import update_profile, change_password
from fastapi import APIRouter, Depends, HTTPException
from app.schemas.password import PasswordChange

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