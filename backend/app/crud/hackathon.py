from sqlalchemy.orm import Session

from app.models.hackathon import Hackathon
from app.schemas.hackathon import HackathonCreate

def create_hackathon(
    db: Session,
    hackathon: HackathonCreate,
    user_id: int
):
    db_hackathon = Hackathon(
        title=hackathon.title,
        description=hackathon.description,
        organizer=hackathon.organizer,
        start_date=hackathon.start_date,
        end_date=hackathon.end_date,
        registration_deadline=hackathon.registration_deadline,
        mode=hackathon.mode,
        location=hackathon.location,
        prize_pool=hackathon.prize_pool,
        max_team_size=hackathon.max_team_size,
        registration_link=hackathon.registration_link,
        created_by=user_id
    )

    db.add(db_hackathon)
    db.commit()
    db.refresh(db_hackathon)

    return db_hackathon

def get_all_hackathons(db: Session):
    return db.query(Hackathon).all()