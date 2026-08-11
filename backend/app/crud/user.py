from app.core.security import hash_password

from sqlalchemy.orm import Session

from app.models.user import User
from app.schemas.user import UserRegister

def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()

def authenticate_user(
    db: Session,
    email: str,
    password: str
):
    from app.core.security import verify_password

    user = get_user_by_email(db, email)

    if not user:
        return None

    if not verify_password(password, user.password):
        return None

    return user

def create_user(db: Session, user: UserRegister):
    db_user = User(
        full_name=user.full_name,
        email=user.email,
        password=hash_password(user.password),
        role=user.role
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user

def update_profile(db, user, profile):
    user.full_name = profile.full_name
    user.phone = profile.phone
    user.bio = profile.bio
    user.github = profile.github
    user.linkedin = profile.linkedin
    user.instagram = profile.instagram
    user.website = profile.website

    db.commit()
    db.refresh(user)

    return user

def change_password(db: Session, user, current_password: str, new_password: str):
    from app.core.security import verify_password

    if not verify_password(current_password, user.password):
        return None

    user.password = hash_password(new_password)

    db.commit()
    db.refresh(user)

    return user

def verify_user_email(
    db: Session,
    user: User
):
    user.is_email_verified = True

    db.commit()
    db.refresh(user)

    return user

def get_user_by_id(
    db: Session,
    user_id: int
):
    return db.query(User).filter(
        User.id == user_id
    ).first()