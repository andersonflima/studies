<?php
// PostgreSQL Connection in PHP

function getPostgresConnection($dbname = "mydatabase", $user = "myuser", $password = "mypassword", $host = "localhost", $port = "5432") {
    try {
        $conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");
        if (!$conn) {
            throw new Exception("Connection failed");
        }
        echo "Connected successfully to PostgreSQL database\n";
        return $conn;
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage() . "\n";
        return null;
    }
}

// Initialize PostgreSQL connection
$conn = getPostgresConnection();

if ($conn) {
    try {
        // Creating a table
        $sql = "CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            age INT NOT NULL,
            city VARCHAR(100)
        )";
        pg_query($conn, $sql);
        echo "Table 'users' created or already exists.\n";

        // Inserting data
        $sql = "INSERT INTO users (name, age, city) VALUES ('Alice', 30, 'New York')";
        pg_query($conn, $sql);
        echo "Record inserted into 'users'.\n";

        // Fetching data
        $sql = "SELECT * FROM users";
        $result = pg_query($conn, $sql);
        while ($row = pg_fetch_assoc($result)) {
            print_r($row);
        }

        // Updating data
        $sql = "UPDATE users SET age = 31 WHERE name = 'Alice'";
        pg_query($conn, $sql);
        echo "Record updated.\n";

        // Deleting data
        $sql = "DELETE FROM users WHERE name = 'Alice'";
        pg_query($conn, $sql);
        echo "Record deleted.\n";

    } catch (Exception $e) {
        echo "Error: " . $e->getMessage() . "\n";
    } finally {
        pg_close($conn);
        echo "PostgreSQL connection closed.\n";
    }
}
?>
