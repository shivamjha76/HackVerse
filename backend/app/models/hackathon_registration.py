from sqlalchemy import Column, ForeignKey, Integer, String

from app.database.base import Base


class HackathonRegistration(Base):
    __tablename__ = "hackathon_registrations"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )

    hackathon_id = Column(
        Integer,
        ForeignKey("hackathons.id"),
        nullable=False
    )

    team_id = Column(
        Integer,
        ForeignKey("teams.id"),
        nullable=True
    )

    registration_type = Column(
        String,
        nullable=False
    )