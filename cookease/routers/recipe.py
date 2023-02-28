from fastapi import APIRouter, Depends
from queries.recipes import RecipeQueries, RecipeDetails, IngredientWidget


router = APIRouter()


@router.get("/search-recipes")
def get_recipe(
    diet: str,
    intolerances: str,
    includeIngredients: str,
    maxReadyTime: str,
    number: str,
    repo: RecipeQueries = Depends(),
):

    return repo.get_recipe(
        diet, intolerances, includeIngredients, maxReadyTime, number
    )


@router.get('/ingredient/{id}')
def get_ingredient_widget(
    id: int,
    repo: IngredientWidget = Depends(),
):
    return repo.get_ingredient_widget(id)


@router.get('/recipe-details/{id}')
def get_recipe_details(
    id: int,
    repo: RecipeDetails = Depends(),
):
    return repo.get_details(id)
