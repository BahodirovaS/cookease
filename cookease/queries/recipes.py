import requests
import os
import json

from keys.keys import SPOONACULAR_API_KEY

# SPOONACULAR_API_KEY = os.environ["SPOONACULAR_API_KEY"]


class RecipeQueries:
    def get_recipe(
        self,
        diet: str,
        intolerances: str,
        includeIngredients: str,
        maxReadyTime: str,
        number: str,
    ):
        params = {
            "diet": diet,
            "intolerances": intolerances,
            "includeIngredients": includeIngredients,
            "maxReadyTime": maxReadyTime,
            "number": number,
        }
        url = "https://api.spoonacular.com/recipes/complexSearch?"
        res = requests.get(
            url=url, params=params, headers={"x-api-key": SPOONACULAR_API_KEY}
        )
        data = res.json()
        return data


class RecipeDetails:
    def get_details(self, id: int):
        res = requests.get(
            "https://api.spoonacular.com/recipes/"
            + str(id)
            + "/information?apiKey="
            + SPOONACULAR_API_KEY
        )
        data = res.json()
        return data
