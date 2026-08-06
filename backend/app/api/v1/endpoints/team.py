from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.security import get_current_user
from app.crud.team import create_team
from app.database.database import get_db
from app.schemas.team import TeamCreate, TeamResponse

from app.services.team_request_service import (
    leave_team,
    remove_member,
    transfer_leadership,
)

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

@router.delete("/{team_id}/leave")
def leave_team_endpoint(
    team_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    return leave_team(
        db=db,
        team_id=team_id,
        current_user_id=current_user.id,
    )
    
@router.delete("/{team_id}/members/{team_member_id}")
def remove_member_endpoint(
    team_id: int,
    team_member_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    return remove_member(
        db=db,
        team_id=team_id,
        team_member_id=team_member_id,
        current_user_id=current_user.id,
    )
    
@router.put("/{team_id}/transfer-leadership/{team_member_id}")
def transfer_leadership_endpoint(
    team_id: int,
    team_member_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    return transfer_leadership(
        db=db,
        team_id=team_id,
        new_leader_member_id=team_member_id,
        current_user_id=current_user.id,
    )