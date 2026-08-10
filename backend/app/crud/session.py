from datetime import datetime

from sqlalchemy.orm import Session

from app.models.session import UserSession


def create_session(
    db: Session,
    user_id: int,
    session_id: str,
    device: str | None,
    ip_address: str | None,
    expires_at: datetime,
):
    user_session = UserSession(
        user_id=user_id,
        session_id=session_id,
        device=device,
        ip_address=ip_address,
        expires_at=expires_at,
    )

    db.add(user_session)
    db.commit()
    db.refresh(user_session)

    return user_session

def get_session_by_id(
    db: Session,
    session_id: str,
):
    return (
        db.query(UserSession)
        .filter(UserSession.session_id == session_id)
        .first()
    )
    
def get_user_sessions(
    db: Session,
    user_id: int
):
    return (
        db.query(UserSession)
        .filter(
            UserSession.user_id == user_id,
            UserSession.revoked == False
        )
        .order_by(
            UserSession.last_active_at.desc()
        )
        .all()
    )
    
def revoke_session(
    db: Session,
    session_id: int,
    user_id: int
):
    session = (
        db.query(UserSession)
        .filter(
            UserSession.id == session_id,
            UserSession.user_id == user_id,
            UserSession.revoked == False
        )
        .first()
    )

    if session is None:
        return None

    session.revoked = True

    db.commit()
    db.refresh(session)

    return session