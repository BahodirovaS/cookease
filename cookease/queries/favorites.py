from .client import Queries
from pydantic import BaseModel
from pymongo.errors import DuplicateKeyError
from typing import List
from bson.objectid import ObjectId
from fastapi.exceptions import HTTPException
from pymongo import ASCENDING


class DuplicateAccountError(ValueError):
    pass


class FavoriteIn(BaseModel):
    id: int
    title: str
    image: str


class FavoriteOut(FavoriteIn):
    user_id: str
    id: int


class FavoriteList(BaseModel):
    favorites: List[FavoriteOut]


class FavoritesQueries(Queries):
    DB_NAME = "cookease"
    COLLECTION = "favorites"

    def get_favorites(self, user_id: str) -> List[FavoriteOut]:
        results = self.collection.find({"user_id": user_id})
        favorites = []
        for recipe in results:
            print(recipe)
            recipe['_id'] = str(recipe['_id'])
            favorite = FavoriteOut(**recipe)
            favorites.append(favorite)
        return favorites

    def get_favorite(self, id) -> FavoriteOut:
        result = self.collection.find_one({"_id": id})
        if result:
            result["_id"] = str(result["_id"])
            return FavoriteOut(**result)

    def create_favorite(self, favorite: FavoriteIn, user_id: str) -> FavoriteOut:
        favorite = favorite.dict()
        favorite["user_id"] = user_id
        self.collection.create_index(
            [("user_id", ASCENDING), ("_id", ASCENDING), ("title", ASCENDING), ("image", ASCENDING)], unique=True)
        try:
            result = self.collection.insert_one(favorite)
        except DuplicateKeyError:
            raise HTTPException(status_code=400, detail="favorite already exists")
        if result.inserted_id:
            result = self.get_favorite(result.inserted_id)
            return result

    def delete_favorite(self, id: str, user_id: str):
        self.collection.delete_one(
            {
                "_id": ObjectId(id),
                "user_id": user_id
            }
        )
