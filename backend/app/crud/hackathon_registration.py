from sqlalchemy.orm import Session

from app.models.hackathon_registration import HackathonRegistration


def create_registration(
    db: Session,
    user_id: int,
    hackathon_id: int,
    team_id: int | None,
    registration_type: str,
):
    registration = HackathonRegistration(
        user_id=user_id,
        hackathon_id=hackathon_id,
        team_id=team_id,
        registration_type=registration_type,
    )

    db.add(registration)
    db.commit()
    db.refresh(registration)

    return registration


def get_user_registrations(
    db: Session,
    user_id: int,
):
    return (
        db.query(HackathonRegistration)
        .filter(
            HackathonRegistration.user_id == user_id
        )
        .all()
    )


def get_registration(
    db: Session,
    user_id: int,
    hackathon_id: int,
):
    return (
        db.query(HackathonRegistration)
        .filter(
            HackathonRegistration.user_id == user_id,
            HackathonRegistration.hackathon_id == hackathon_id,
        )
        .first()
    )