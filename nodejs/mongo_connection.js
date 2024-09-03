const { MongoClient } = require("mongodb");

async function getMongoClient() {
  const uri = "mongodb://localhost:27017/";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("mydatabase");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

// 1. Insert a document
async function insertDocument(db) {
  const collection = db.collection("test_collection");
  const result = await collection.insertOne({
    name: "Alice",
    age: 25,
    city: "New York",
  });
  console.log("Document inserted:", result.insertedId);
}

// 2. Find a document
async function findDocument(db) {
  const collection = db.collection("test_collection");
  const document = await collection.findOne({ name: "Alice" });
  console.log("Document found:", document);
}

// 3. Update a document
async function updateDocument(db) {
  const collection = db.collection("test_collection");
  const result = await collection.updateOne(
    { name: "Alice" },
    { $set: { age: 26 } },
  );
  console.log("Document updated:", result.modifiedCount);
}

// 4. Delete a document
async function deleteDocument(db) {
  const collection = db.collection("test_collection");
  const result = await collection.deleteOne({ name: "Alice" });
  console.log("Document deleted:", result.deletedCount);
}

// Main function to execute all operations
async function main() {
  const db = await getMongoClient();

  if (db) {
    await insertDocument(db);
    await findDocument(db);
    await updateDocument(db);
    await deleteDocument(db);
    await db.client.close();
  }
}

main().catch(console.error);

