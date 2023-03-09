from fastapi.testclient import TestClient
from main import app
from queries.favorites import FavoritesQueries
from bson.objectid import ObjectId
from authenticator import authenticator

client = TestClient(app)


def fake_get_current_account_data():
    return {
        'id': "id",
        'username': "test_username",
    }


class FakeFavoritesQueries:
    def delete_favorite(self, id: str, user_id: str) -> bool:
        return True

    def create_favorite(self, favorite, user_id):
        favorite = favorite.dict()
        favorite['user_id'] = user_id
        return favorite


def test_delete_favorite():
    app.dependency_overrides[FavoritesQueries] = FakeFavoritesQueries
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_current_account_data

    res = client.post('/favorites-recipes', json={
        'id': 1,
        'title': "test_title",
        'image': "test_image",
    })
    res = client.delete('/favorites-recipes/9999}')

    assert res.status_code == 200
    assert res.json() == True
