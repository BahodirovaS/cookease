from fastapi import (Depends, APIRouter)
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator

from pydantic import BaseModel

from queries.favorites import (FavoritesQueries)

router = APIRouter()


@router.get("/favorites", response_model=bool)
async def get_protected(
    favorites: FavoritesQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return favorites.get_current_account_data(account_data)
