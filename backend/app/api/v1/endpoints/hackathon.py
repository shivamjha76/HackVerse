from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.security import get_current_user
from app.crud.hackathon import create_hackathon
from app.database.database import get_db

from fastapi import HTTPException
from fastapi import APIRouter, Depends, HTTPException
from app.schemas.hackathon import (
    HackathonCreate,
    HackathonResponse,
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
    db: Session = Depends(get_db)
):
    from app.crud.hackathon import get_all_hackathons

    return get_all_hackathons(db)


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