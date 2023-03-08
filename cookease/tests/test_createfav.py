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
    def create_favorite(self, favorite, user_id):
        return {
            'id': 1,
            'title': "test_title",
            'image': "test_image",
        }

def test_create_favorite():
    app.dependency_overrides[FavoritesQueries] = FakeFavoritesQueries
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_current_account_data

    res = client.post('/favorites-recipes', json={
        'id': 1,
        'title': "test_title",
        'image': "test_image",
    })
    data = res.json()

    assert data == {
        'id': 1,
        'title': "test_title",
        'image': "test_image",
    }
    assert res.status_code == 200
