from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.crud.team import get_team_by_id
from app.crud.team_member import get_team_member
from app.core.security import get_current_user
from app.crud.hackathon import create_hackathon
from app.crud.hackathon_registration import (
    create_registration,
    get_registration,
    get_user_registrations,
)
from app.database.database import get_db

from app.schemas.hackathon import (
    HackathonCreate,
    HackathonResponse,
    HackathonRegistrationCreate,
    HackathonRegistrationResponse,
)

router = APIRouter(
    prefix="/hackathons",
    tags=["Hackathons"]
)


@router.post(
    "",
    response_model=HackathonResponse,
    status_code=201
)
def create(
    hackathon: HackathonCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return create_hackathon(
        db=db,
        hackathon=hackathon,
        user_id=current_user.id
    )
    
@router.get(
    "",
    response_model=list[HackathonResponse]
)

def get_all(
    search: str | None = None,
    mode: str | None = None,
    sort: str | None = None,
    order: str = "asc",
    page: int = 1,
    limit: int = 10,
    db: Session = Depends(get_db),
):
    
    from app.crud.hackathon import get_all_hackathons

    return get_all_hackathons(
        db=db,
        search=search,
        mode=mode,
        sort=sort,
        order=order,
        page=page,
        limit=limit,
    )

@router.get(
    "/my-registrations",
    response_model=list[HackathonRegistrationResponse]
)
def get_my_registrations(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    if current_user.role != "participant":
        raise HTTPException(
            status_code=403,
            detail="Only participants can access registrations"
        )

    return get_user_registrations(
        db=db,
        user_id=current_user.id
    )
       
@router.get(
    "/{hackathon_id}",
    response_model=HackathonResponse
)
def get_by_id(
    hackathon_id: int,
    db: Session = Depends(get_db)
):
    from app.crud.hackathon import get_hackathon_by_id

    hackathon = get_hackathon_by_id(
        db,
        hackathon_id
    )

    if hackathon is None:
        raise HTTPException(
            status_code=404,
            detail="Hackathon not found"
        )

    return hackathon

@router.put(
    "/{hackathon_id}",
    response_model=HackathonResponse
)
def update(
    hackathon_id: int,
    hackathon: HackathonCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    from app.crud.hackathon import (
        get_hackathon_by_id,
        update_hackathon
    )

    db_hackathon = get_hackathon_by_id(
        db,
        hackathon_id
    )

    if db_hackathon is None:
        raise HTTPException(
            status_code=404,
            detail="Hackathon not found"
        )

    return update_hackathon(
        db,
        db_hackathon,
        hackathon
    )
    
@router.delete(
    "/{hackathon_id}",
    status_code=204
)
def delete(
    hackathon_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    from app.crud.hackathon import (
        get_hackathon_by_id,
        delete_hackathon
    )

    db_hackathon = get_hackathon_by_id(
        db,
        hackathon_id
    )

    if db_hackathon is None:
        raise HTTPException(
            status_code=404,
            detail="Hackathon not found"
        )

    delete_hackathon(
        db,
        db_hackathon
    )
    
@router.post(
    "/{hackathon_id}/register",
    response_model=HackathonRegistrationResponse,
    status_code=201
)
def register_for_hackathon(
    hackathon_id: int,
    registration: HackathonRegistrationCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    if current_user.role != "participant":
      raise HTTPException(
        status_code=403,
        detail="Only participants can register for hackathons"
    )
    
    if registration.hackathon_id != hackathon_id:
        raise HTTPException(
            status_code=400,
            detail="Hackathon ID mismatch"
        )
    
    if registration.registration_type == "team":
        if registration.team_id is None:
            raise HTTPException(
                status_code=400,
                detail="Team ID is required for team registration"
            )

        team = get_team_by_id(
            db=db,
            team_id=registration.team_id
        )

        if team is None:
            raise HTTPException(
                status_code=404,
                detail="Team not found"
            )

        if team.hackathon_id != hackathon_id:
            raise HTTPException(
                status_code=400,
                detail="Team does not belong to this hackathon"
            )

        team_member = get_team_member(
            db=db,
            team_id=registration.team_id,
            user_id=current_user.id
        )

        if team_member is None:
            raise HTTPException(
                status_code=403,
                detail="You are not a member of this team"
            )

    existing = get_registration(
        db=db,
        user_id=current_user.id,
        hackathon_id=hackathon_id,
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Already registered for this hackathon"
        )

    return create_registration(
        db=db,
        user_id=current_user.id,
        hackathon_id=hackathon_id,
        team_id=registration.team_id,
        registration_type=registration.registration_type,
    )
    
