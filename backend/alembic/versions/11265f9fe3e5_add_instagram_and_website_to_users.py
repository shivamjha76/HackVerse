"""add instagram and website to users

Revision ID: 11265f9fe3e5
Revises: 720eb5233572
Create Date: 2026-08-09 20:03:54.969487

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "11265f9fe3e5"
down_revision: Union[str, Sequence[str], None] = "720eb5233572"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column(
        "users",
        sa.Column(
            "instagram",
            sa.String(length=255),
            nullable=True,
        ),
    )

    op.add_column(
        "users",
        sa.Column(
            "website",
            sa.String(length=255),
            nullable=True,
        ),
    )


def downgrade() -> None:
    op.drop_column("users", "website")
    op.drop_column("users", "instagram")