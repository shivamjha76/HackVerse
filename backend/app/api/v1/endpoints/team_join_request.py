from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.security import get_current_user
from app.crud.team_join_request import create_join_request, get_pending_request
from app.database.database import get_db
from app.crud.team_member import add_team_member
from app.crud.team_join_request_actions import approve_request
from app.crud.team import get_team_by_id
from app.schemas.team_join_request import (
    TeamJoinRequestCreate,
    TeamJoinRequestResponse,
)

from app.crud.team_member import (
    add_team_member,
    get_team_member
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
    join_request = get_join_request_by_id(
        db,
        request_id
    )

    if join_request is None:
        raise HTTPException(
            status_code=404,
            detail="Join request not found"
        )
    team = get_team_by_id(
        db,
        join_request.team_id,
    )

    if team.leader_id != current_user.id:
        raise HTTPException(
            status_code=403,
            detail="Only team leader can approve requests",
        )

    if join_request.status != "pending":
     raise HTTPException(
        status_code=409,
        detail="Request has already been processed"
    )

    approve_request(
        db,
        join_request
    )

    existing_member = get_team_member(
    db,
    join_request.team_id,
    join_request.user_id
)

    if existing_member:
     raise HTTPException(
        status_code=409,
        detail="User is already a team member"
    )

    add_team_member(
        db,
        join_request.team_id,
        join_request.user_id
    )
    db.commit()
    db.refresh(join_request)
    
    return {
        "message": "Request approved successfully"
    }