from pymongo import MongoClient

def get_mongo_client():
    client = MongoClient("mongodb://localhost:27017/")
    db = client["mydatabase"]
    return db

db = get_mongo_client()
print("Connected to MongoDB:", db.list_collection_names())