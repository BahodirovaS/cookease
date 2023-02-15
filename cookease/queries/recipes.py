import requests
from pydantic import BaseModel


class Recipe(BaseModel):
    diet: str
    intolerances: str
    includeIngredients: str
    maxReadyTime: int


class RecipeQueries:
    def get_recipe(self, diet: str, intolerances: str, includeIngredients: str, maxReadyTime:int):
        res = requests.get('https://api.spoonacular.com/recipes/complexSearch?' + diet + intolerances + includeIngredients + maxReadyTime, response_model=Recipe)
        data = res.json()
        return data
