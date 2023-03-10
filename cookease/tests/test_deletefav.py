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
    def delete_favorite(self, id: str, user_id: str) -> bool:
        return True


def test_delete_favorite():
    app.dependency_overrides[FavoritesQueries] = FakeFavoritesQueries
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_current_account_data
    res = client.delete('/favorites-recipes/6408f6c1084d0b6336943830')
    data = res.json()
    assert isinstance(data, bool)
    assert True
    assert res.status_code == 200
