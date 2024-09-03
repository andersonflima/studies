import { Client, QueryResult } from "pg";

async function getPostgresConnection(): Promise<Client> {
  const client = new Client({
    user: "myuser",
    host: "localhost",
    database: "mydatabase",
    password: "mypassword",
    port: 5432,
  });

  try {
    await client.connect();
    console.log("Connected to PostgreSQL");
    return client;
  } catch (error) {
    console.error("PostgreSQL connection error:", error);
    throw error;
  }
}

// 1. Insert a Record
async function insertRecord(client: Client): Promise<QueryResult> {
  const sql =
    "INSERT INTO users (name, age, city) VALUES ($1, $2, $3) RETURNING id";
  const values = ["Alice", 30, "New York"];
  try {
    const result = await client.query(sql, values);
    console.log("Record inserted with ID:", result.rows[0].id);
    return result;
  } catch (error) {
    console.error("Error inserting record:", error);
    throw error;
  }
}

// 2. Query Records
async function queryRecords(client: Client): Promise<QueryResult> {
  const sql = "SELECT * FROM users WHERE age > $1";
  try {
    const result = await client.query(sql, [25]);
    console.log("Records found:", result.rows);
    return result;
  } catch (error) {
    console.error("Error querying records:", error);
    throw error;
  }
}

// 3. Update a Record
async function updateRecord(client: Client): Promise<QueryResult> {
  const sql = "UPDATE users SET city = $1 WHERE name = $2 RETURNING *";
  const values = ["Los Angeles", "Alice"];
  try {
    const result = await client.query(sql, values);
    console.log("Record updated:", result.rows[0]);
    return result;
  } catch (error) {
    console.error("Error updating record:", error);
    throw error;
  }
}

// 4. Delete a Record
async function deleteRecord(client: Client): Promise<QueryResult> {
  const sql = "DELETE FROM users WHERE name = $1 RETURNING *";
  try {
    const result = await client.query(sql, ["Alice"]);
    console.log("Record deleted:", result.rows[0]);
    return result;
  } catch (error) {
    console.error("Error deleting record:", error);
    throw error;
  }
}

// 5. Transactions Example
async function runTransaction(client: Client): Promise<void> {
  try {
    await client.query("BEGIN");

    await client.query("UPDATE users SET age = age + 1 WHERE name = $1", [
      "Bob",
    ]);
    await client.query(
      "INSERT INTO users (name, age, city) VALUES ($1, $2, $3)",
      ["Charlie", 28, "San Francisco"],
    );

    await client.query("COMMIT");
    console.log("Transaction committed");
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Transaction rolled back due to an error:", error);
  }
}

// 6. Using Parameterized Queries to Prevent SQL Injection
async function safeQuery(
  client: Client,
  userInput: string,
): Promise<QueryResult> {
  const sql = "SELECT * FROM users WHERE name = $1";
  try {
    const result = await client.query(sql, [userInput]);
    console.log("Safe query result:", result.rows);
    return result;
  } catch (error) {
    console.error("Error executing safe query:", error);
    throw error;
  }
}

// 7. Aggregation Example
async function aggregateRecords(client: Client): Promise<QueryResult> {
  const sql = `
        SELECT city, COUNT(*) as user_count
        FROM users
        GROUP BY city
        HAVING COUNT(*) > 1
        ORDER BY user_count DESC
    `;
  try {
    const result = await client.query(sql);
    console.log("Aggregation result:", result.rows);
    return result;
  } catch (error) {
    console.error("Error aggregating records:", error);
    throw error;
  }
}

// Main function to execute all operations
async function main() {
  const client = await getPostgresConnection();

  try {
    await insertRecord(client);
    await queryRecords(client);
    await updateRecord(client);
    await deleteRecord(client);
    await runTransaction(client);
    await safeQuery(client, "Bob");
    await aggregateRecords(client);
  } catch (error) {
    console.error("Error during PostgreSQL operations:", error);
  } finally {
    await client.end();
    console.log("PostgreSQL client disconnected");
  }
}

main().catch(console.error);
