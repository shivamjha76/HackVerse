from pydantic import BaseModel


class TeamMemberCreate(BaseModel):
    team_id: int


class TeamMemberResponse(BaseModel):
    id: int
    team_id: int
    user_id: int

    class Config:
        from_attributes = True