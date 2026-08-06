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

def get_all_hackathons(
    db: Session,
    search: str | None = None,
    page: int = 1,
    limit: int = 10,
):
    query = db.query(Hackathon)

    if search:
        query = query.filter(
            Hackathon.title.ilike(f"%{search}%")
        )

    return (
        query
        .offset((page - 1) * limit)
        .limit(limit)
        .all()
    )
    
def get_hackathon_by_id(
    db: Session,
    hackathon_id: int
):
    return (
        db.query(Hackathon)
        .filter(Hackathon.id == hackathon_id)
        .first()
    )
    
def update_hackathon(
    db: Session,
    db_hackathon: Hackathon,
    hackathon: HackathonCreate
):
    db_hackathon.title = hackathon.title
    db_hackathon.description = hackathon.description
    db_hackathon.organizer = hackathon.organizer
    db_hackathon.start_date = hackathon.start_date
    db_hackathon.end_date = hackathon.end_date
    db_hackathon.registration_deadline = hackathon.registration_deadline
    db_hackathon.mode = hackathon.mode
    db_hackathon.location = hackathon.location
    db_hackathon.prize_pool = hackathon.prize_pool
    db_hackathon.max_team_size = hackathon.max_team_size
    db_hackathon.registration_link = hackathon.registration_link

    db.commit()
    db.refresh(db_hackathon)

    return db_hackathon

def delete_hackathon(
    db: Session,
    db_hackathon: Hackathon
):
    db.delete(db_hackathon)
    db.commit()