from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.security import get_current_user
from app.database.database import get_db

from app.schemas.team_join_request import (
    TeamJoinRequestCreate,
    TeamJoinRequestResponse,
)

from app.crud.team_join_request import (
    create_join_request,
    get_pending_request,
)

from app.crud.team_join_request_actions import reject_request

from app.services.team_request_service import (
    approve_team_request,
    reject_team_request,
)

router = APIRouter(
    prefix="/team-requests",
    tags=["Team Requests"],
)


@router.post(
    "/join",
    response_model=TeamJoinRequestResponse,
    status_code=201,
)
def join_team(
    request: TeamJoinRequestCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    existing_request = get_pending_request(
        db=db,
        team_id=request.team_id,
        user_id=current_user.id,
    )

    if existing_request:
        raise HTTPException(
            status_code=409,
            detail="Join request already exists",
        )

    return create_join_request(
        db=db,
        request=request,
        user_id=current_user.id,
    )
    
from app.crud.team_join_request_actions import (
    get_join_request_by_id
)

@router.put(
    "/{request_id}/approve"
)
def approve(
    request_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return approve_team_request(
        db=db,
        request_id=request_id,
        current_user_id=current_user.id,
    )
    
@router.put("/{request_id}/reject")
def reject(
    request_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return reject_team_request(
        db=db,
        request_id=request_id,
        current_user_id=current_user.id,
    )