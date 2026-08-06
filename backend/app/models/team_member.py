from sqlalchemy import Column, ForeignKey, Integer

from app.database.base import Base


class TeamMember(Base):
    __tablename__ = "team_members"

    id = Column(Integer, primary_key=True, index=True)

    team_id = Column(
        Integer,
        ForeignKey("teams.id")
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id")
    )