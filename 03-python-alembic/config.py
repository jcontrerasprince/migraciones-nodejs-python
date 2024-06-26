import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:password@localhost:5432/migrations_alembic'  # o el URI de tu base de datos
    SQLALCHEMY_TRACK_MODIFICATIONS = False