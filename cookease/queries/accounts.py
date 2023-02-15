from pydantic import BaseModel
from .client import Queries
from pymongo.errors import DuplicateKeyError

class DuplicateAccountError(ValueError):
    pass

# sign up form model
class AccountIn(BaseModel):
    username: str
    password: str
    first_name: str
    last_name: str

# login model
class AccountOut(BaseModel):
    id: str
    username: str
    first_name: str
    last_name: str

class AccountOutWithPassword(AccountOut):
    hashed_password: str


# he made this to hide the password so it's not returned for AccountOut
class AccountOutWithPassword(AccountOut):
    hashed_password: str

class AccountQueries(Queries):
    DB_NAME = "db-name"
    COLLECTION = "accounts"

    def get(self, username: str) -> AccountOutWithPassword:
        props = self.collection.find_one({"username": username})
        if not props:
            return None
        props["id"] = str(props["_id"])
        return AccountOutWithPassword(**props)


    def create(self, info: AccountIn, hashed_password:str) -> AccountOutWithPassword:
        props = info.dict()
        props["hashed_password"] = hashed_password
        del props["password"]
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        props["id"] = str(props["_id"])
        del props["_id"]
        return AccountOutWithPassword(**props)


class FavoritesQueries(Queries):
    pass
