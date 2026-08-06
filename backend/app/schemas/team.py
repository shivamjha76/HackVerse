from pydantic import BaseModel


class TeamCreate(BaseModel):
    name: str
    description: str
    hackathon_id: int


class TeamResponse(BaseModel):
    id: int
    name: str
    description: str
    hackathon_id: int
    leader_id: int

    class Config:
        from_attributes = True