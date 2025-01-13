import os


class Config:
    SQLALCHEMY_DATABASE_URI = "sqlite:///meeting_rooms.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "secret")
