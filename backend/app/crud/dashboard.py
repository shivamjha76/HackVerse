from sqlalchemy.orm import Session

from app.models.hackathon import Hackathon
from app.models.team import Team
from app.models.team_member import TeamMember
from app.models.team_join_request import TeamJoinRequest


def get_total_hackathons(db: Session):
    return db.query(Hackathon).count()


def get_total_teams(db: Session):
    return db.query(Team).count()


def get_total_participants(db: Session):
    return db.query(TeamMember).count()


def get_pending_join_requests(db: Session):
    return (
        db.query(TeamJoinRequest)
        .filter(
            TeamJoinRequest.status == "pending"
        )
        .count()
    )