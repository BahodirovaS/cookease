from fastapi import (Depends, APIRouter)
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator

from pydantic import BaseModel

from queries.favorites import (FavoritesQueries, FavoriteIn, FavoriteOut)

router = APIRouter()


@router.get("/favorite-recipes", response_model=FavoriteOut)
async def get_favorite(
    favorite: FavoritesQueries = Depends(),
    account_data: dict = Depends(authenticator.get_account_data),
):
    if "username" in account_data.username:
        return FavoriteOut(favorites = favorite.get_all())
    else:
        return "username does not exist"

@router.post("/favorites-recipes", response_model=FavoriteOut)
async def create_favorite(
    favorite: FavoriteIn,
    repo: FavoritesQueries = Depends(),
    account_data: dict = Depends(authenticator.get_account_data),
):
    if "username" in account_data.username:
        favorites = repo.create(favorite)
        return favorites
    else:
        return "username does not exist"
