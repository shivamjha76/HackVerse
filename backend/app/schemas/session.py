from datetime import datetime

from pydantic import BaseModel


class SessionResponse(BaseModel):
    id: int
    device: str | None = None
    ip_address: str | None = None
    created_at: datetime
    last_active_at: datetime
    expires_at: datetime

    class Config:
        from_attributes = True