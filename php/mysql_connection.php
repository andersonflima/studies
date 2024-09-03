<?php
// MySQL Connection in PHP

$host = "localhost";
$user = "myuser";
$password = "mypassword";
$database = "mydatabase";

function getMySQLConnection($host, $user, $password, $database) {
    try {
        $conn = new mysqli($host, $user, $password, $database);
        if ($conn->connect_error) {
            throw new Exception("Connection failed: " . $conn->connect_error);
        }
        echo "Connected successfully to MySQL database\n";
        return $conn;
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage() . "\n";
        return null;
    }
}

// Initialize MySQL connection
$conn = getMySQLConnection($host, $user, $password, $database);

if ($conn) {
    try {
        // Creating a table
        $sql = "CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            age INT NOT NULL,
            city VARCHAR(100)
        )";
        $conn->query($sql);
        echo "Table 'users' created or already exists.\n";

        // Inserting data
        $sql = "INSERT INTO users (name, age, city) VALUES ('Alice', 30, 'New York')";
        $conn->query($sql);
        echo "Record inserted into 'users'.\n";

        // Fetching data
        $sql = "SELECT * FROM users";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                print_r($row);
            }
        }

        // Updating data
        $sql = "UPDATE users SET age = 31 WHERE name = 'Alice'";
        $conn->query($sql);
        echo "Record updated.\n";

        // Deleting data
        $sql = "DELETE FROM users WHERE name = 'Alice'";
        $conn->query($sql);
        echo "Record deleted.\n";

    } catch (Exception $e) {
        echo "Error: " . $e->getMessage() . "\n";
    } finally {
        $conn->close();
        echo "MySQL connection closed.\n";
    }
}
?>
