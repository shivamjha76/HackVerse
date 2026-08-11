from datetime import datetime

from sqlalchemy.orm import Session

from app.models.email_verification import EmailVerification


def create_verification_token(
    db: Session,
    user_id: int,
    token: str,
    expires_at: datetime,
):
    verification = EmailVerification(
        user_id=user_id,
        token=token,
        expires_at=expires_at,
        used=False,
        created_at=datetime.utcnow(),
    )

    db.add(verification)
    db.commit()
    db.refresh(verification)

    return verification


def get_verification_by_token(
    db: Session,
    token: str,
):
    return (
        db.query(EmailVerification)
        .filter(
            EmailVerification.token == token
        )
        .first()
    )


def mark_verification_as_used(
    db: Session,
    verification: EmailVerification,
):
    verification.used = True

    db.commit()
    db.refresh(verification)

    return verification