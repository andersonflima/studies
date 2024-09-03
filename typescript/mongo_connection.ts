import {
  MongoClient,
  Db,
  Collection,
  Document,
  InsertOneResult,
  UpdateResult,
  DeleteResult,
} from "mongodb";

async function getMongoClient(): Promise<Db> {
  const uri = "mongodb://localhost:27017/";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("mydatabase");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

// 1. Insert a Document
async function insertDocument(db: Db): Promise<InsertOneResult<Document>> {
  const collection: Collection<Document> = db.collection("test_collection");
  const result: InsertOneResult<Document> = await collection.insertOne({
    name: "Alice",
    age: 25,
    city: "New York",
  });
  console.log("Document inserted:", result.insertedId);
  return result;
}

// 2. Find a Document
async function findDocument(db: Db): Promise<Document | null> {
  const collection: Collection<Document> = db.collection("test_collection");
  const document: Document | null = await collection.findOne({ name: "Alice" });
  console.log("Document found:", document);
  return document;
}

// 3. Update a Document
async function updateDocument(db: Db): Promise<UpdateResult> {
  const collection: Collection<Document> = db.collection("test_collection");
  const result: UpdateResult = await collection.updateOne(
    { name: "Alice" },
    { $set: { age: 26 } },
  );
  console.log("Document updated:", result.modifiedCount);
  return result;
}

// 4. Delete a Document
async function deleteDocument(db: Db): Promise<DeleteResult> {
  const collection: Collection<Document> = db.collection("test_collection");
  const result: DeleteResult = await collection.deleteOne({ name: "Alice" });
  console.log("Document deleted:", result.deletedCount);
  return result;
}

// 5. Aggregation Example
async function aggregateDocuments(db: Db): Promise<Document[]> {
  const collection: Collection<Document> = db.collection("test_collection");
  const pipeline = [
    { $match: { age: { $gte: 20 } } },
    { $group: { _id: "$city", total: { $sum: 1 } } },
    { $sort: { total: -1 } },
  ];
  const results: Document[] = await collection.aggregate(pipeline).toArray();
  console.log("Aggregation results:", results);
  return results;
}

// 6. Transaction Example
async function runTransaction(client: MongoClient): Promise<void> {
  const session = client.startSession();
  session.startTransaction();
  try {
    const db = client.db("mydatabase");
    const collection = db.collection("test_collection");

    await collection.updateOne(
      { name: "Alice" },
      { $set: { age: 27 } },
      { session },
    );
    await collection.insertOne(
      { name: "Bob", age: 30, city: "Los Angeles" },
      { session },
    );

    await session.commitTransaction();
    console.log("Transaction committed");
  } catch (error) {
    await session.abortTransaction();
    console.error("Transaction aborted due to an error:", error);
  } finally {
    session.endSession();
  }
}

// Main function to execute all operations
async function main() {
  const client = new MongoClient("mongodb://localhost:27017/");
  try {
    const db = await getMongoClient();
    await insertDocument(db);
    await findDocument(db);
    await updateDocument(db);
    await deleteDocument(db);
    await aggregateDocuments(db);
    await runTransaction(client);
  } catch (error) {
    console.error("Error during MongoDB operations:", error);
  } finally {
    await client.close();
    console.log("MongoDB client disconnected");
  }
}

main().catch(console.error);
