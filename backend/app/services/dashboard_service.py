from sqlalchemy.orm import Session

from app.crud.dashboard import (
    get_total_hackathons,
    get_total_teams,
    get_total_participants,
    get_pending_join_requests,
)


def get_dashboard_stats(
    db: Session,
):
    return {
        "total_hackathons": get_total_hackathons(db),
        "total_teams": get_total_teams(db),
        "total_participants": get_total_participants(db),
        "pending_join_requests": get_pending_join_requests(db),
    }