from sqlalchemy.orm import Session

from app.models.team_join_request import TeamJoinRequest
from app.schemas.team_join_request import TeamJoinRequestCreate


def create_join_request(
    db: Session,
    request: TeamJoinRequestCreate,
    user_id: int
):
    db_request = TeamJoinRequest(
        team_id=request.team_id,
        user_id=user_id,
        status="pending"
    )

    db.add(db_request)
    db.commit()
    db.refresh(db_request)

    return db_request

def get_pending_request(
    db: Session,
    team_id: int,
    user_id: int
):
    return (
        db.query(TeamJoinRequest)
        .filter(
            TeamJoinRequest.team_id == team_id,
            TeamJoinRequest.user_id == user_id,
            TeamJoinRequest.status == "pending"
        )
        .first()
    )