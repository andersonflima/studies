const mysql = require("mysql");

function getMySQLConnection() {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "myuser",
    password: "mypassword",
    database: "mydatabase",
  });

  connection.connect((error) => {
    if (error) throw error;
    console.log("Connected to MySQL:", connection.threadId);
  });

  return connection;
}

// 1. Insert a record
function insertRecord(connection) {
  const sql =
    "INSERT INTO users (name, age, city) VALUES ('Alice', 30, 'New York')";
  connection.query(sql, (error, result) => {
    if (error) throw error;
    console.log("Record inserted:", result.insertId);
  });
}

// 2. Query records
function queryRecords(connection) {
  const sql = "SELECT * FROM users WHERE age > 25";
  connection.query(sql, (error, results) => {
    if (error) throw error;
    console.log("Records found:", results);
  });
}

// 3. Update a record
function updateRecord(connection) {
  const sql = "UPDATE users SET city = 'Los Angeles' WHERE name = 'Alice'";
  connection.query(sql, (error, result) => {
    if (error) throw error;
    console.log("Record updated:", result.affectedRows);
  });
}

// 4. Delete a record
function deleteRecord(connection) {
  const sql = "DELETE FROM users WHERE name = 'Alice'";
  connection.query(sql, (error, result) => {
    if (error) throw error;
    console.log("Record deleted:", result.affectedRows);
  });
}

// Main function to execute operations
function main() {
  const connection = getMySQLConnection();

  insertRecord(connection);
  queryRecords(connection);
  updateRecord(connection);
  deleteRecord(connection);

  connection.end((err) => {
    if (err) throw err;
    console.log("Connection closed.");
  });
}

main();

