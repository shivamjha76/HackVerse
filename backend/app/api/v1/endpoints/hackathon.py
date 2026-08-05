from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.security import get_current_user
from app.crud.hackathon import create_hackathon
from app.database.database import get_db
from app.schemas.hackathon import (
    HackathonCreate,
    HackathonResponse,
)

router = APIRouter(
    prefix="/hackathons",
    tags=["Hackathons"]
)


@router.post(
    "",
    response_model=HackathonResponse,
    status_code=201
)
def create(
    hackathon: HackathonCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return create_hackathon(
        db=db,
        hackathon=hackathon,
        user_id=current_user.id
    )