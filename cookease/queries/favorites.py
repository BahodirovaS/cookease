from .client import Queries
from pydantic import BaseModel
from pymongo.errors import DuplicateKeyError
from typing import List



class DuplicateAccountError(ValueError):
    pass

class FavoriteIn(BaseModel):
    recipe_id: int

class FavoriteOut(BaseModel):
    recipe_id: int
    user_id: int
    id: int

class FavoriteList(BaseModel):
    favorites: List[FavoriteOut]

class FavoritesQueries(Queries):
    DB_NAME = "db-name"
    COLLECTION = "favorites"


    def get_favorite(self, recipe_id: int) -> FavoriteOut:
        favorites = self.collection.find_one({"recipe_id": recipe_id})
        if not favorites:
            return None
        favorites["recipe_id"] = str(favorites["_recipe_id"])
        return FavoriteOut(**favorites)

    def create_favorite(self, favorite: FavoriteIn, recipe_id:int) -> FavoriteOut:
        favorites = favorite.dict()
        favorites["recipe_id"] = recipe_id
        try:
            self.collection.insert_one(favorites)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        favorites["recipe_id"] = str(favorites["_recipe_id"])
        return FavoriteOut(**favorites)
