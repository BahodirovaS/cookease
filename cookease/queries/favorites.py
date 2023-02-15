from pydantic import BaseModel
from .client import Queries


class Favorite(BaseModel):
    id: int


class FavoritesQueries(Queries):
    DB_NAME = "db-name"
    COLLECTION = "accounts"

    def create(self, info: Favorite):
        pass