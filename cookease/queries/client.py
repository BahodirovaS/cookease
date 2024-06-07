import os
import pymongo
from dotenv import load_dotenv

load_dotenv()

MONGO_URL = os.environ.get("DATABASE_URI")
client = pymongo.MongoClient(MONGO_URL)


class Queries:
    @property
    def collection(self):
        db = client[self.DB_NAME]
        return db[self.COLLECTION]
