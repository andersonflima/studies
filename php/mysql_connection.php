<?php
function getMySQLConnection() {
    $conn = new mysqli("localhost", "myuser", "mypassword", "mydatabase");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}

$conn = getMySQLConnection();
echo "Connected to MySQL: " . $conn->host_info;
