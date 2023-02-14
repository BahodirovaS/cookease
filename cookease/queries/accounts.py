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


class AccountQueries(Queries):
    pass


class FavoritesQueries(Queries):
    pass

# he made this to hide the password so it's not returned for AccountOut
class AccountOutWithPassword(AccountOut):
    hashed_password: str
