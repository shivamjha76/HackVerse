from datetime import datetime

from pydantic import BaseModel


class HackathonCreate(BaseModel):
    title: str
    description: str
    organizer: str
    start_date: datetime
    end_date: datetime
    registration_deadline: datetime
    mode: str
    location: str
    prize_pool: str
    max_team_size: int
    registration_link: str


class HackathonResponse(BaseModel):
    id: int
    title: str
    description: str
    organizer: str
    start_date: datetime
    end_date: datetime
    registration_deadline: datetime
    mode: str
    location: str
    prize_pool: str
    max_team_size: int
    registration_link: str
    created_by: int

    class Config:
        from_attributes = True