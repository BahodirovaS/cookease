from fastapi import APIRouter, Depends
from queries.recipes import RecipeQueries, Recipe


router = APIRouter()


@router.get('/search-recipes')
def get_recipe(
    # info: Recipe,
    diet: str,
    intolerances: str,
    includeIngredients: str,
    maxReadyTime: str,
    repo: RecipeQueries = Depends()
):
    return repo.get_recipe(diet, intolerances, includeIngredients, maxReadyTime)
