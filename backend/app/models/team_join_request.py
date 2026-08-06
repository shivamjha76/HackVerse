from sqlalchemy import Column, ForeignKey, Integer, String

from app.database.base import Base


class TeamJoinRequest(Base):
    __tablename__ = "team_join_requests"

    id = Column(Integer, primary_key=True, index=True)

    team_id = Column(
        Integer,
        ForeignKey("teams.id")
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id")
    )

    status = Column(
        String,
        default="pending"
    )