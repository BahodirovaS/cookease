import requests
from pydantic import BaseModel
import os
from keys.keys import SPOONACULAR_API_KEY

# key = os.environ["SPOONACULAR_API_KEY"]

class Recipe(BaseModel):
    diet: str
    intolerances: str
    includeIngredients: str
    maxReadyTime: str


class RecipeQueries:
    def get_recipe(self, diet: str, intolerances: str, includeIngredients: str, maxReadyTime: str):
        res = requests.get(
            'https://api.spoonacular.com/recipes/complexSearch?'
            + diet + intolerances + includeIngredients + maxReadyTime + "&apiKey=" + SPOONACULAR_API_KEY)
        data = res.json()
        return data
