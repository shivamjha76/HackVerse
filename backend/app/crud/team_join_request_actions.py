from sqlalchemy.orm import Session

from app.models.team_join_request import TeamJoinRequest


def get_join_request_by_id(
    db: Session,
    request_id: int
):
    return (
        db.query(TeamJoinRequest)
        .filter(
            TeamJoinRequest.id == request_id
        )
        .first()
    )


def approve_request(
    db: Session,
    join_request: TeamJoinRequest
):
    join_request.status = "approved"

    return join_request