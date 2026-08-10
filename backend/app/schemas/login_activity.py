from datetime import datetime

from pydantic import BaseModel


class LoginActivityResponse(BaseModel):
    id: int
    user_id: int
    device: str | None = None
    ip_address: str | None = None
    login_at: datetime
    success: bool

    class Config:
        from_attributes = True