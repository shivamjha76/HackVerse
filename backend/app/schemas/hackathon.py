from datetime import datetime

from pydantic import BaseModel


class HackathonCreate(BaseModel):
    title: str
    short_description: str
    description: str | None = None
    organizer: str
    start_date: datetime
    end_date: datetime
    registration_deadline: datetime
    mode: str
    status: str = "draft"
    location: str
    prize_pool: str
    max_team_size: int
    registration_link: str


class HackathonResponse(BaseModel):
    id: int
    title: str
    short_description: str
    description: str | None = None  
    organizer: str
    start_date: datetime
    end_date: datetime
    registration_deadline: datetime
    mode: str
    status: str
    location: str
    prize_pool: str
    max_team_size: int
    registration_link: str
    created_by: int

    class Config:
        from_attributes = True