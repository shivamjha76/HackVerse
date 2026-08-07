from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey

from app.database.base import Base


class Hackathon(Base):
    __tablename__ = "hackathons"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String, nullable=False)
    short_description = Column(Text, nullable=False)

    description = Column(Text)

    organizer = Column(String)

    start_date = Column(DateTime)

    end_date = Column(DateTime)

    registration_deadline = Column(DateTime)

    mode = Column(String)
    status = Column(String(20), nullable=False, default="draft")

    location = Column(String)

    prize_pool = Column(String)

    max_team_size = Column(Integer)

    registration_link = Column(String)

    created_by = Column(
        Integer,
        ForeignKey("users.id")
    )