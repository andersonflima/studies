<?php
function getPostgresConnection() {
    $conn = pg_connect("host=localhost dbname=mydatabase user=myuser password=mypassword");
    if (!$conn) {
        echo "An error occurred.
";
        exit;
    }
    return $conn;
}

$conn = getPostgresConnection();
echo "Connected to PostgreSQL: " . pg_host($conn);
