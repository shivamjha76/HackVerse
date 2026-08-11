from datetime import datetime

from sqlalchemy.orm import Session

from app.models.password_reset import PasswordReset


def create_password_reset_token(
    db: Session,
    user_id: int,
    token: str,
    expires_at: datetime,
):
    password_reset = PasswordReset(
        user_id=user_id,
        token=token,
        expires_at=expires_at,
        used=False,
        created_at=datetime.utcnow(),
    )

    db.add(password_reset)
    db.commit()
    db.refresh(password_reset)

    return password_reset


def get_password_reset_by_token(
    db: Session,
    token: str,
):
    return (
        db.query(PasswordReset)
        .filter(
            PasswordReset.token == token
        )
        .first()
    )


def mark_password_reset_as_used(
    db: Session,
    password_reset: PasswordReset,
):
    password_reset.used = True

    db.commit()
    db.refresh(password_reset)

    return password_reset