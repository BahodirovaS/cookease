import requests
import os
from keys.keys import SPOONACULAR_API_KEY


class RecipeQueries:
    def get_recipe(self, diet: str, intolerances: str, includeIngredients: str, maxReadyTime: str):
        res = requests.get(
            'https://api.spoonacular.com/recipes/complexSearch??'
            + diet + intolerances + includeIngredients + maxReadyTime + "&apiKey=" + SPOONACULAR_API_KEY)
        data = res.json()
        return data


class RecipeDetails:
    def get_details(self, id: int):
        res = requests.get(
            'https://api.spoonacular.com/recipes/' + str(id) + "/information?apiKey=" + SPOONACULAR_API_KEY
        )
        data = res.json()
        return data
