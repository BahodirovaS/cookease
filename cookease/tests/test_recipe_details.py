from fastapi.testclient import TestClient
from main import app
from queries.recipes import RecipeDetails

client =TestClient(app)

class FakeRecipeDetails:
    def get_details(self, id):
        return []

def test_get_recipe_details():
    app.dependency_overrides[RecipeDetails] = FakeRecipeDetails
    res = client.get('/recipe-details/1')
    assert res.status_code == 200
