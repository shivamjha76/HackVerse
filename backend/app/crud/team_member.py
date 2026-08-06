from sqlalchemy.orm import Session

from app.models.team_member import TeamMember


def add_team_member(
    db: Session,
    team_id: int,
    user_id: int
):
    member = TeamMember(
        team_id=team_id,
        user_id=user_id
    )

    db.add(member)

    return member

def get_team_member(
    db: Session,
    team_id: int,
    user_id: int
):
    return (
        db.query(TeamMember)
        .filter(
            TeamMember.team_id == team_id,
            TeamMember.user_id == user_id
        )
        .first()
    )
    
def remove_team_member(
    db: Session,
    team_member: TeamMember
):
    db.delete(team_member)

    return team_member

def get_team_member_by_id(
    db: Session,
    team_member_id: int,
):
    return (
        db.query(TeamMember)
        .filter(
            TeamMember.id == team_member_id
        )
        .first()
    )