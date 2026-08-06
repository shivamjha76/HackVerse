from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.crud.team import (
    get_team_by_id,
    transfer_team_leadership,
)

from app.crud.team_join_request import get_pending_request

from app.crud.team_join_request_actions import (
    get_join_request_by_id,
    approve_request,
    reject_request,
)

from app.crud.team_member import (
    add_team_member,
    get_team_member,
    remove_team_member,
    get_team_member_by_id,
)

def validate_join_request(
    db: Session,
    request_id: int,
    current_user_id: int,
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
        join_request.team_id
    )

    if team.leader_id != current_user_id:
        raise HTTPException(
            status_code=403,
            detail="Only team leader can perform this action"
        )

    if join_request.status != "pending":
        raise HTTPException(
            status_code=409,
            detail="Request has already been processed"
        )

    return join_request

def approve_team_request(
    db: Session,
    request_id: int,
    current_user_id: int,
):
    join_request = validate_join_request(
        db=db,
        request_id=request_id,
        current_user_id=current_user_id,
    )

    existing_member = get_team_member(
        db,
        join_request.team_id,
        join_request.user_id,
    )

    if existing_member:
        raise HTTPException(
            status_code=409,
            detail="User is already a team member"
        )

    approve_request(
        db,
        join_request
    )

    add_team_member(
        db,
        join_request.team_id,
        join_request.user_id,
    )

    db.commit()
    db.refresh(join_request)

    return {
        "message": "Request approved successfully"
    }
    
def reject_team_request(
    db: Session,
    request_id: int,
    current_user_id: int,
):
    join_request = validate_join_request(
        db=db,
        request_id=request_id,
        current_user_id=current_user_id,
    )

    reject_request(join_request)

    db.commit()
    db.refresh(join_request)

    return {
        "message": "Request rejected successfully"
    }

def leave_team(
    db: Session,
    team_id: int,
    current_user_id: int,
):
    team = get_team_by_id(
        db,
        team_id
    )

    if team is None:
        raise HTTPException(
            status_code=404,
            detail="Team not found"
        )

    if team.leader_id == current_user_id:
        raise HTTPException(
            status_code=400,
            detail="Team leader cannot leave the team"
        )

    team_member = get_team_member(
        db,
        team_id,
        current_user_id,
    )

    if team_member is None:
        raise HTTPException(
            status_code=404,
            detail="You are not a member of this team"
        )

    remove_team_member(
        db,
        team_member,
    )

    db.commit()

    return {
        "message": "Successfully left the team"
    }
    
def remove_member(
    db: Session,
    team_id: int,
    team_member_id: int,
    current_user_id: int,
):
    team = get_team_by_id(
        db,
        team_id,
    )

    if team is None:
        raise HTTPException(
            status_code=404,
            detail="Team not found",
        )

    if team.leader_id != current_user_id:
        raise HTTPException(
            status_code=403,
            detail="Only team leader can remove members",
        )

    team_member = get_team_member_by_id(
        db,
        team_member_id,
    )

    if team_member is None:
        raise HTTPException(
            status_code=404,
            detail="Team member not found",
        )

    if team_member.team_id != team_id:
        raise HTTPException(
            status_code=400,
            detail="Member does not belong to this team",
        )

    remove_team_member(
        db,
        team_member,
    )

    db.commit()

    return {
        "message": "Team member removed successfully"
    }
    
def transfer_leadership(
    db: Session,
    team_id: int,
    new_leader_member_id: int,
    current_user_id: int,
):
    team = get_team_by_id(
        db,
        team_id,
    )

    if team is None:
        raise HTTPException(
            status_code=404,
            detail="Team not found",
        )

    if team.leader_id != current_user_id:
        raise HTTPException(
            status_code=403,
            detail="Only team leader can transfer leadership",
        )

    new_leader = get_team_member_by_id(
        db,
        new_leader_member_id,
    )

    if new_leader is None:
        raise HTTPException(
            status_code=404,
            detail="Team member not found",
        )

    if new_leader.team_id != team_id:
        raise HTTPException(
            status_code=400,
            detail="Member does not belong to this team",
        )

    transfer_team_leadership(
        team,
        new_leader.user_id,
    )

    db.commit()
    db.refresh(team)

    return {
        "message": "Leadership transferred successfully"
    }