from pydantic import BaseModel
from .client import Queries

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


class AccountQueries(Queries):
    pass


class FavoritesQueries(Queries):
    pass
