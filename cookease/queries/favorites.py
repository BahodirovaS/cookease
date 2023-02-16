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


    def get_favorites(self, user_id: int) -> list[FavoriteOut]:
        results = self.collection.find({"user_id": user_id})
        favorites = []
        for recipe in results:
            recipe['recipe_id'] = str(recipe['_recipe_id'])
            favorite = FavoriteOut(**recipe)
            favorites.append(favorite)
        return favorites

    def create_favorite(self, favorite: FavoriteIn, user_id:int) -> FavoriteOut:
        favorite = favorite.dict()
        favorite["user_id"] = user_id
        try:
          result = self.collection.insert_one(favorite)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        if result.inserted_id:
            result = self.get_favorite(result.inserted_id)
            return result
