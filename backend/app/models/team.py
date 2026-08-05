from sqlalchemy import Column, ForeignKey, Integer, String

from app.database.base import Base


class Team(Base):
    __tablename__ = "teams"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String, nullable=False)

    description = Column(String)

    hackathon_id = Column(
        Integer,
        ForeignKey("hackathons.id")
    )

    leader_id = Column(
        Integer,
        ForeignKey("users.id")
    )