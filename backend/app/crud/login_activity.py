from datetime import datetime

from sqlalchemy.orm import Session

from app.models.login_activity import LoginActivity


def create_login_activity(
    db: Session,
    user_id: int,
    device: str | None,
    ip_address: str | None,
    success: bool = True
):
    activity = LoginActivity(
        user_id=user_id,
        device=device,
        ip_address=ip_address,
        login_at=datetime.utcnow(),
        success=success,
    )

    db.add(activity)
    db.commit()
    db.refresh(activity)

    return activity

def get_user_login_activity(
    db: Session,
    user_id: int
):
    return (
        db.query(LoginActivity)
        .filter(
            LoginActivity.user_id == user_id
        )
        .order_by(
            LoginActivity.login_at.desc()
        )
        .all()
    )