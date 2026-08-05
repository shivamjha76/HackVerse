from pydantic import BaseModel, EmailStr


class ProfileUpdate(BaseModel):
    full_name: str
    phone: str | None = None
    bio: str | None = None
    github: str | None = None
    linkedin: str | None = None


class ProfileResponse(BaseModel):
    id: int
    full_name: str
    email: EmailStr
    phone: str | None = None
    bio: str | None = None
    github: str | None = None
    linkedin: str | None = None

    class Config:
        from_attributes = True