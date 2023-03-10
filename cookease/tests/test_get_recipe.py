from fastapi.testclient import TestClient
from main import app
from queries.recipes import RecipeQueries

client = TestClient(app)


class FakeRecipeQueries:
    def get_recipe(
        self,
        diet: str,
        intolerances: str,
        includeIngredients: str,
        maxReadyTime: str,
        number: str,
    ):
        return {}


def test_get_recipe():
    # Arrange
    app.dependency_overrides[RecipeQueries] = FakeRecipeQueries

    # Act
    res = client.get(
<<<<<<< Updated upstream
        "http://localhost:8000/search-recipes?diet={self.diet}&"
        + "intolerances={self.intolerances}&includeIngredients="
        + "{self.includeIngredients}&maxReadyTime="
        + "{self.maxReadyTime}&number={self.number}"
    )
=======
        'http://localhost:8000/search-recipes?diet={self.diet}\
            &intolerances={self.intolerances}\
                &includeIngredients={self.includeIngredients}\
                    &maxReadyTime={self.maxReadyTime}\
                        &number={self.number}')
>>>>>>> Stashed changes
    data = res.json()

    # Assert
    assert isinstance(data, dict)
    assert res.status_code == 200
