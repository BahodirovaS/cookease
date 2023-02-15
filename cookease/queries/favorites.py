from .client import Queries
from pydantic import BaseModel


class FavoriteIn(BaseModel):
    recipe_id: int

class FavoriteOut(BaseModel):
    user_id: int
    recipe_id: int
    id: int

class FavoritesQueries(Queries):
    DB_NAME = "db-name"
    COLLECTION = "favorites"


    def get_favorite(self, id: int) -> FavoriteOut:
        favorites = self.collection.find_one({"id": id})
        if not favorites:
            return None
        favorites["id"] = str(favorites["_id"])
        return FavoriteOut(**favorites)

    def create_favorite(self, favorite: FavoriteIn) -> FavoriteOut:
        favorites = favorite.dict()
        self.collection.insert_one(favorites)
        favorites["id"] = str(favorites["_id"])
        return FavoriteOut(recipes = [], **favorites)
