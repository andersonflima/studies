from pymongo import MongoClient, errors


def get_mongo_client(uri="mongodb://localhost:27017/", db_name="mydatabase"):
    try:
        client = MongoClient(uri, serverSelectionTimeoutMS=5000)
        db = client[db_name]
        # Trigger an exception if the connection fails
        client.admin.command("ping")
        print(f"Connected to MongoDB: {db_name}")
        return db
    except errors.ServerSelectionTimeoutError as e:
        print("Failed to connect to MongoDB:", e)
        return None


# Initialize the MongoDB connection
db = get_mongo_client()

if db:
    # List collections in the database
    print("Collections:", db.list_collection_names())

    # Example: Access a specific collection
    collection = db["mycollection"]

    # Insert a document into the collection
    document = {"name": "Alice", "age": 30, "city": "New York"}
    result = collection.insert_one(document)
    print("Inserted document ID:", result.inserted_id)

    # Find a document in the collection
    found_document = collection.find_one({"name": "Alice"})
    print("Found document:", found_document)

    # Update a document in the collection
    updated_result = collection.update_one(
        {"name": "Alice"}, {"$set": {"age": 31}})
    print(
        f"Matched {updated_result.matched_count} document(s), Updated {
            updated_result.modified_count} document(s)"
    )

    # Delete a document from the collection
    deleted_result = collection.delete_one({"name": "Alice"})
    print(f"Deleted {deleted_result.deleted_count} document(s)")
