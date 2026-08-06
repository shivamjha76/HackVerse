from fastapi import APIRouter

from app.api.v1.endpoints.auth import router as auth_router
from app.api.v1.endpoints.users import router as users_router
from app.api.v1.endpoints.hackathon import router as hackathon_router
from app.api.v1.endpoints.team import router as team_router
from app.api.v1.endpoints.team_join_request import router as team_request_router

api_router = APIRouter()

api_router.include_router(auth_router)
api_router.include_router(users_router)
api_router.include_router(hackathon_router)
api_router.include_router(team_router)
api_router.include_router(team_request_router)