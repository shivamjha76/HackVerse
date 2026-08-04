from fastapi import APIRouter
from app.api.v1.endpoints.root import router as root_router

api_router = APIRouter()

api_router.include_router(root_router)