from sqlalchemy import (
    Column,
    ForeignKey,
    Integer,
    UniqueConstraint,
)

from app.database.base import Base

class TeamMember(Base):
    __tablename__ = "team_members"

    __table_args__ = (
    UniqueConstraint(
        "team_id",
        "user_id",
        name="uq_team_member"
    ),
)
    id = Column(Integer, primary_key=True, index=True)

    team_id = Column(
        Integer,
        ForeignKey("teams.id")
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id")
    )