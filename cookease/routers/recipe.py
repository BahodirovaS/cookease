from fastapi import APIRouter, Depends
from queries.recipes import RecipeQueries, Recipe


router = APIRouter()


@router.get('/search-recipes')
def get_recipe(
    info: Recipe,
    repo: RecipeQueries = Depends()
):
    return repo.get_recipe()
