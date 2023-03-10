from fastapi.testclient import TestClient
from main import app
from queries.recipes import RecipeDetails


client = TestClient(app)


class FakeRecipeDetails:
    def get_details(self, id: int):
        return {}


def test_get_recipe_details():
    # Arrange
    app.dependency_overrides[RecipeDetails] = FakeRecipeDetails

    # Act
    res = client.get('/recipe-details/123')
    data = res.json()

    # Assert
    assert res.status_code == 200
    assert isinstance(data, dict)
