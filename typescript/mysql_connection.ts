import {
  createConnection,
  Connection,
  QueryError,
  RowDataPacket,
  OkPacket,
} from "mysql2/promise";

async function getMySQLConnection(): Promise<Connection> {
  const connection = await createConnection({
    host: "localhost",
    user: "myuser",
    password: "mypassword",
    database: "mydatabase",
  });

  console.log("Connected to MySQL");
  return connection;
}

// 1. Insert a Record
async function insertRecord(connection: Connection): Promise<OkPacket> {
  const sql = "INSERT INTO users (name, age, city) VALUES (?, ?, ?)";
  const [result]: [OkPacket, any] = await connection.execute(sql, [
    "Alice",
    30,
    "New York",
  ]);
  console.log("Record inserted with ID:", result.insertId);
  return result;
}

// 2. Query Records
async function queryRecords(connection: Connection): Promise<RowDataPacket[]> {
  const sql = "SELECT * FROM users WHERE age > ?";
  const [rows]: [RowDataPacket[], any] = await connection.execute(sql, [25]);
  console.log("Records found:", rows);
  return rows;
}

// 3. Update a Record
async function updateRecord(connection: Connection): Promise<OkPacket> {
  const sql = "UPDATE users SET city = ? WHERE name = ?";
  const [result]: [OkPacket, any] = await connection.execute(sql, [
    "Los Angeles",
    "Alice",
  ]);
  console.log("Record updated:", result.affectedRows);
  return result;
}

// 4. Delete a Record
async function deleteRecord(connection: Connection): Promise<OkPacket> {
  const sql = "DELETE FROM users WHERE name = ?";
  const [result]: [OkPacket, any] = await connection.execute(sql, ["Alice"]);
  console.log("Record deleted:", result.affectedRows);
  return result;
}

// 5. Transactions
async function runTransaction(connection: Connection): Promise<void> {
  try {
    await connection.beginTransaction();

    await connection.execute("UPDATE users SET age = age + 1 WHERE name = ?", [
      "Bob",
    ]);
    await connection.execute(
      "INSERT INTO users (name, age, city) VALUES (?, ?, ?)",
      ["Charlie", 28, "San Francisco"],
    );

    await connection.commit();
    console.log("Transaction committed");
  } catch (error) {
    await connection.rollback();
    console.error("Transaction rolled back due to an error:", error);
  }
}

// Main function to execute all operations
async function main() {
  const connection = await getMySQLConnection();

  try {
    await insertRecord(connection);
    await queryRecords(connection);
    await updateRecord(connection);
    await deleteRecord(connection);
    await runTransaction(connection);
  } catch (error) {
    console.error(
      "Error during MySQL operations:",
      (error as QueryError).message,
    );
  } finally {
    await connection.end();
    console.log("MySQL connection closed");
  }
}

main().catch(console.error);
