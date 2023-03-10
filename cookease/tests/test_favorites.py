from fastapi.testclient import TestClient
from main import app
from queries.favorites import FavoritesQueries
from authenticator import authenticator

client = TestClient(app)


def fake_get_current_account_data():
    return {
        'id': "id",
        'username': "test_username",
    }


class FakeFavoritesQueries:
    def get_favorites(self, user_id):
        return []


def test_get_favorite():
    app.dependency_overrides[FavoritesQueries] = FakeFavoritesQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
        ] = fake_get_current_account_data

    res = client.get('/favorites-recipes')
    data = res.json()
    assert data["favorites"] == []
    assert res.status_code == 200
