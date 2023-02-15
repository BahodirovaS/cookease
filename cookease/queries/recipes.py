import requests
from pydantic import BaseModel
import os

key = os.environ["SPOONACULAR_API_KEY"]

class Recipe(BaseModel):
    diet: str
    intolerances: str
    includeIngredients: str
    maxReadyTime: str


class RecipeQueries:
    def get_recipe(self, diet: str, intolerances: str, includeIngredients: str, maxReadyTime:int):
        res = requests.get(
            'https://api.spoonacular.com/recipes/complexSearch?'
            + diet + intolerances + includeIngredients + maxReadyTime + "&apiKey=" + key)
        data = res.json()
        return data
