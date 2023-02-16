from .client import Queries
from pydantic import BaseModel
from pymongo.errors import DuplicateKeyError
from typing import List



class DuplicateAccountError(ValueError):
    pass

class FavoriteIn(BaseModel):
    recipe_id: int

class FavoriteOut(FavoriteIn):
    user_id: str
    id: int | str

class FavoriteList(BaseModel):
    favorites: list[FavoriteOut]


class FavoritesQueries(Queries):
    DB_NAME = "db-name"
    COLLECTION = "favorites"


    def get_favorites(self, user_id: str) -> list[FavoriteOut]:
        results = self.collection.find({"user_id": user_id})
        favorites = []
        for recipe in results:
            recipe['id'] = str(recipe['_id'])
            favorite = FavoriteOut(**recipe)
            favorites.append(favorite)
        return favorites

    def get_favorite(self, id) -> FavoriteOut:
        result = self.collection.find_one({"_id": id})
        if result:
            result["id"] = str(result["_id"])
            return FavoriteOut(**result)

    def create_favorite(self, favorite: FavoriteIn, user_id:str) -> FavoriteOut:
        favorite = favorite.dict()
        favorite["user_id"] = user_id
        try:
            result = self.collection.insert_one(favorite)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        if result.inserted_id:
            result = self.get_favorite(result.inserted_id)
            return result
