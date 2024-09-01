<?php
require 'vendor/autoload.php';

function getMongoClient() {
    $client = new MongoDB\Client("mongodb://localhost:27017");
    $db = $client->mydatabase;
    return $db;
}

$db = getMongoClient();
echo "Connected to MongoDB: " . implode(", ", $db->listCollections());
