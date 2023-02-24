import requests
from pydantic import BaseModel
import os
from keys.keys import SPOONACULAR_API_KEY

class RecipeQueries:
    def get_recipe(self, diet: str, intolerances: str, includeIngredients: str, maxReadyTime: str):
        params = { "diet": diet, "intolerances": intolerances, "includeIngredients": includeIngredients, "maxReadyTime": maxReadyTime, "number": 20, "apiKey": SPOONACULAR_API_KEY}
        url = 'https://api.spoonacular.com/recipes/complexSearch?'
        res = requests.get(url, params=params)
        data = res.json()
        print("url*******************",url)
        return data

class RecipeDetails:
    def get_details(self, id: int):
        res = requests.get(
            'https://api.spoonacular.com/recipes/' + str(id) + "/information?apiKey=" + SPOONACULAR_API_KEY
        )
        data = res.json()
        return data
