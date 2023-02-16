from .client import Queries
from pydantic import BaseModel
from pymongo.errors import DuplicateKeyError
from typing import List



class DuplicateAccountError(ValueError):
    pass

class FavoriteIn(BaseModel):
    recipe_id: int

class FavoriteOut(FavoriteIn):
    user_id: int
    id: int | str

class FavoriteList(BaseModel):
    favorites: list[FavoriteOut]


class FavoritesQueries(Queries):
    DB_NAME = "db-name"
    COLLECTION = "favorites"


    def get_favorite(self, user_id: int) -> list[FavoriteOut]:
        results = self.collection.find({"user_id": user_id})
        favorites = []
        for recipe in results:
            recipe['recipe_id'] = str(recipe['_recipe_id'])
            favorite = FavoriteOut(**recipe)
            favorites.append(favorite)
        return favorites

    def create_favorite(self, favorite: FavoriteIn, recipe_id:int) -> FavoriteOut:
        favorites = favorite.dict()
        favorites["recipe_id"] = recipe_id
        try:
            self.collection.insert_one(favorites)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        favorites["recipe_id"] = str(favorites["recipe_id"])
        return FavoriteOut(**favorites)
