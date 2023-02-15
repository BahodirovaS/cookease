from fastapi import (Depends, APIRouter, Request)
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator

from pydantic import BaseModel

from queries.favorites import (FavoritesQueries, FavoriteIn, FavoriteOut, FavoriteList)

router = APIRouter()


@router.get("/favorite-recipes", response_model=FavoriteList)
async def get_favorite(
    request: Request,
    repo: FavoritesQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    if account_data and authenticator.cookie_name in request.cookies:
        return FavoriteList(favorites=repo.get_favorite())


@router.post("/favorites-recipes", response_model=FavoriteOut)
async def create_favorite(
    request: Request,
    favorite: FavoriteIn,
    repo: FavoritesQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    if account_data and authenticator.cookie_name in request.cookies:
        favorites = repo.create_favorite(favorite)
        return favorites
