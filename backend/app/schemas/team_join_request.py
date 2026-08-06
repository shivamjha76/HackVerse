from pydantic import BaseModel


class TeamJoinRequestCreate(BaseModel):
    team_id: int


class TeamJoinRequestResponse(BaseModel):
    id: int
    team_id: int
    user_id: int
    status: str

    class Config:
        from_attributes = True