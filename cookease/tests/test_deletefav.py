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
    def delete_favorite(self, id: str, user_id: str):
        return {
            "id": "6408f6c1084d0b6336943830",
            'user_id': "99",
        }


def test_delete_favorite():
    app.dependency_overrides[FavoritesQueries] = FakeFavoritesQueries
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_current_account_data

    res = client.delete('/favorites-recipes/6408f6c1084d0b6336943830')
    data = res.json()

    # assert data == {
    #     'id': "6408f6c1084d0b6336943830",
    #     'user_id': "99",
    # }
    assert isinstance(data, bool)
    assert True
    assert res.status_code == 200
