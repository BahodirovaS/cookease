from fastapi import (Depends, APIRouter, Request, Response)
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator

from pydantic import BaseModel

from queries.favorites import (
    FavoritesQueries, 
    FavoriteIn, 
    FavoriteOut, 
    FavoriteList
)

router = APIRouter()


@router.get("/favorite-recipes", response_model=FavoriteList)
async def get_favorite(
    repo: FavoritesQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return {
        "favorites": repo.get_favorite(user_id=account_data["id"])
    }


@router.post("/favorites-recipes", response_model=FavoriteOut)
async def create_favorite(
    recipe_id: int,
    response: Response,
    favorite: FavoriteIn,
    repo: FavoritesQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    if favorite is None:
        response.status_code=400
    return repo.create_favorite(favorite, recipe_id)
