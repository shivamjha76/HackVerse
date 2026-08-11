from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    DATABASE_USER: str
    DATABASE_PASSWORD: str
    DATABASE_HOST: str
    DATABASE_PORT: int
    DATABASE_NAME: str
    
    SMTP_HOST: str
    SMTP_PORT: int
    SMTP_USER: str
    SMTP_PASSWORD: str

    SECRET_KEY: str
    ALGORITHM: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int

    class Config:
        env_file = ".env"


settings = Settings()

print("SMTP USER:", settings.SMTP_USER)
print("SMTP HOST:", settings.SMTP_HOST)
print("SMTP PORT:", settings.SMTP_PORT)
print("SMTP PASSWORD LOADED:", bool(settings.SMTP_PASSWORD))