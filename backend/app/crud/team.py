from sqlalchemy.orm import Session

from app.models.team import Team
from app.schemas.team import TeamCreate


def create_team(
    db: Session,
    team: TeamCreate,
    leader_id: int
):
    db_team = Team(
        name=team.name,
        description=team.description,
        hackathon_id=team.hackathon_id,
        leader_id=leader_id
    )

    db.add(db_team)
    db.commit()
    db.refresh(db_team)

    return db_team

def get_team_by_id(
    db: Session,
    team_id: int
):
    return (
        db.query(Team)
        .filter(Team.id == team_id)
        .first()
    )