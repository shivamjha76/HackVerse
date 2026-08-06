from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.security import get_current_user
from app.crud.team import create_team
from app.database.database import get_db
from app.schemas.team import TeamCreate, TeamResponse

router = APIRouter(
    prefix="/teams",
    tags=["Teams"]
)


@router.post(
    "",
    response_model=TeamResponse,
    status_code=201
)
def create(
    team: TeamCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return create_team(
        db=db,
        team=team,
        leader_id=current_user.id
    )