from fastapi.testClient import TestClient
from main import app
from queries.favorites import FavoritesQueries

client = TestClient(app)

class FakeFavoritesQueries:
    def get_favorite(self):
        return []

    def get_recipe_details(self, id: int):
        return {
            'id': id,
        }


def test_get_favorite():
    app.dependency_overrides[FavoritesQueries] = FakeFavoritesQueries

    res = client.get('/favorites-recipes')
    data = res.json()

    assert data["favorites"] == []
    assert res.status_code == 200

def test_get_recipe_details():
    app.dependency_overrides[FavoritesQueries] = FakeFavoritesQueries

    res = client.get('/recipe-details/{42}')
    data = res.json

    assert res.status_code == 200
    assert data['id'] == 42
