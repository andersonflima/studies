const { Client } = require("pg");

async function getPostgresClient() {
  const client = new Client({
    user: "myuser",
    host: "localhost",
    database: "mydatabase",
    password: "mypassword",
    port: 5432,
  });

  try {
    await client.connect();
    console.log("Connected to PostgreSQL:", client.database);

    return client;
  } catch (error) {
    console.error("PostgreSQL connection error:", error.stack);
    throw error;
  }
}

// 1. Insert a record
async function insertRecord(client) {
  const query = `
        INSERT INTO users (name, age, city)
        VALUES ($1, $2, $3)
        RETURNING id
    `;
  const values = ["Alice", 30, "New York"];
  try {
    const res = await client.query(query, values);
    console.log("Record inserted with ID:", res.rows[0].id);
  } catch (error) {
    console.error("Insert record error:", error.stack);
  }
}

// 2. Query records
async function queryRecords(client) {
  const query = `
        SELECT * FROM users
        WHERE age > $1
    `;
  try {
    const res = await client.query(query, [25]);
    console.log("Records found:", res.rows);
  } catch (error) {
    console.error("Query records error:", error.stack);
  }
}

// 3. Update a record
async function updateRecord(client) {
  const query = `
        UPDATE users
        SET city = $1
        WHERE name = $2
        RETURNING *
    `;
  const values = ["Los Angeles", "Alice"];
  try {
    const res = await client.query(query, values);
    console.log("Record updated:", res.rows[0]);
  } catch (error) {
    console.error("Update record error:", error.stack);
  }
}

// 4. Delete a record
async function deleteRecord(client) {
  const query = `
        DELETE FROM users
        WHERE name = $1
        RETURNING *
    `;
  try {
    const res = await client.query(query, ["Alice"]);
    console.log("Record deleted:", res.rows[0]);
  } catch (error) {
    console.error("Delete record error:", error.stack);
  }
}

// Main function to execute all operations
async function main() {
  const client = await getPostgresClient();

  try {
    await insertRecord(client);
    await queryRecords(client);
    await updateRecord(client);
    await deleteRecord(client);
  } finally {
    await client.end();
    console.log("PostgreSQL client disconnected");
  }
}

main().catch(console.error);

