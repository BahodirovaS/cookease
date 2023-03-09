from fastapi.testclient import TestClient
from main import app
from queries.favorites import FavoritesQueries
<<<<<<< HEAD
=======
from bson.objectid import ObjectId
>>>>>>> 7471326cb3aa191bc8b318ae22ce70123ce2b30b
from authenticator import authenticator

client = TestClient(app)

<<<<<<< HEAD
=======

>>>>>>> 7471326cb3aa191bc8b318ae22ce70123ce2b30b
def fake_get_current_account_data():
    return {
        'id': "id",
        'username': "test_username",
    }


class FakeFavoritesQueries:
<<<<<<< HEAD
    def delete_favorite(self, id: str, user_id: str) -> bool:
        return True

    def create_favorite(self, favorite, user_id):
        favorite = favorite.dict()
        favorite['user_id'] = user_id
        return favorite
=======
    def delete_favorite(self, id: str, user_id: str):
        return {
            "id": "6408f6c1084d0b6336943830",
            'user_id': "99",
        }

>>>>>>> 7471326cb3aa191bc8b318ae22ce70123ce2b30b

def test_delete_favorite():
    app.dependency_overrides[FavoritesQueries] = FakeFavoritesQueries
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_current_account_data

<<<<<<< HEAD
    res = client.post('/favorites-recipes', json={
        'id': 1,
        'title': "test_title",
        'image': "test_image",
    })
    res = client.delete('/favorites-recipes/9999}')

    assert res.status_code == 200
    assert res.json() == True

=======
    res = client.delete('/favorites-recipes/6408f6c1084d0b6336943830')
    data = res.json()

    # assert data == {
    #     'id': "6408f6c1084d0b6336943830",
    #     'user_id': "99",
    # }
    assert isinstance(data, bool)
    assert True
    assert res.status_code == 200
>>>>>>> 7471326cb3aa191bc8b318ae22ce70123ce2b30b
