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

class IngredientWidget:
    def get_ingredient_widget(self, id: int):

        headers={
            "x-api-key": SPOONACULAR_API_KEY,
            "Accept": "application/json"
            }
        url = "https://api.spoonacular.com/recipes/" + str(id) + "/ingredientWidget?"
        res = requests.get(
            url=url, headers=headers
        )
        try:
            data = json.loads(res.content)
        except json.JSONDecodeError as e:
            raise ValueError("Error decoding JSON response") from e
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
