<?php
// MongoDB Connection in PHP

require 'vendor/autoload.php'; // Make sure to install MongoDB driver with Composer

use MongoDB\Client;

function getMongoConnection(string $uri = "mongodb://localhost:27017", string $dbname = "mydatabase") {
    try {
        $client = new Client($uri);
        $db = $client->selectDatabase($dbname);
        echo "Connected to MongoDB database: $dbname\n";
        return $db;
    } catch (Exception $e) {
        echo "Error connecting to MongoDB: " . $e->getMessage() . "\n";
        return null;
    }
}

// Initialize MongoDB connection
$db = getMongoConnection();

if ($db) {
    // Example: Accessing a collection
    $collection = $db->users;

    // Inserting a document
    $result = $collection->insertOne([
        'name' => 'Alice',
        'age' => 30,
        'city' => 'New York'
    ]);
    echo "Inserted document with ID: " . $result->getInsertedId() . "\n";

    // Querying documents
    $documents = $collection->find(['name' => 'Alice']);
    foreach ($documents as $document) {
        print_r($document);
    }

    // Updating a document
    $updateResult = $collection->updateOne(
        ['name' => 'Alice'],
        ['$set' => ['age' => 31]]
    );
    echo "Matched " . $updateResult->getMatchedCount() . " document(s) and updated " . $updateResult->getModifiedCount() . " document(s)\n";

    // Deleting a document
    $deleteResult = $collection->deleteOne(['name' => 'Alice']);
    echo "Deleted " . $deleteResult->getDeletedCount() . " document(s)\n";
}
?>
