from sqlalchemy import String, Boolean
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import Base


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True
    )

    full_name: Mapped[str] = mapped_column(
        String(100)
    )

    email: Mapped[str] = mapped_column(
        String(255),
        unique=True,
        index=True
    )

    is_email_verified: Mapped[bool] = mapped_column(
    Boolean,
    default=False,
    nullable=False
   )
    
    password: Mapped[str] = mapped_column(
        String(255)
    )
    
    role: Mapped[str] = mapped_column(
    String(20),
    default="participant"
    )

    phone: Mapped[str | None] = mapped_column(
        String(20),
        nullable=True
    )

    bio: Mapped[str | None] = mapped_column(
        String(500),
        nullable=True
    )

    github: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True
    )

    linkedin: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True
    )
    
    instagram: Mapped[str | None] = mapped_column(
     String(255),
    nullable=True
    )

    website: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True
    )