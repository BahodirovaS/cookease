from fastapi import (Depends, APIRouter, Response)
from authenticator import authenticator
from queries.favorites import (
    FavoritesQueries,
    FavoriteIn,
    FavoriteOut,
    FavoriteList
)


router = APIRouter()


@router.get("/favorites-recipes", response_model=FavoriteList)
async def get_favorite(
    repo: FavoritesQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return {
        "favorites": repo.get_favorites(user_id=account_data["id"])
    }


@router.post("/favorites-recipes")
async def create_favorite(
    response: Response,
    favorite: FavoriteIn,
    repo: FavoritesQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    print(favorite)
    if favorite is None:
        response.status_code = 400
    return repo.create_favorite(favorite=favorite, user_id=account_data["id"])


@router.delete("/favorites-recipes/{id}", response_model=bool)
async def remove_favorite(
    id: str,
    repo: FavoritesQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data)
):

    repo.delete_favorite(id=id, user_id=account_data["id"])
    return True
