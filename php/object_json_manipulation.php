<?php
// Object (Associative Array) and JSON Manipulation in PHP

// 1. Associative Array Manipulation
$person = [
    "name" => "Alice",
    "age" => 30,
    "city" => "New York"
];

// Accessing values
echo "Name: " . $person["name"] . "\n";

// Adding a new key-value pair
$person["email"] = "alice@example.com";

// Modifying an existing value
$person["age"] = 31;

// Removing a key-value pair
unset($person["city"]);

// Print the modified array
print_r($person);

// 2. Convert Associative Array to JSON
$jsonData = json_encode($person, JSON_PRETTY_PRINT);
echo "JSON Data:\n$jsonData\n";

// 3. Convert JSON to Associative Array
$decodedArray = json_decode($jsonData, true);
print_r($decodedArray);

// 4. Handling Nested Arrays in JSON
$personWithAddress = [
    "name" => "Bob",
    "age" => 35,
    "address" => [
        "street" => "123 Main St",
        "city" => "Los Angeles",
        "zip" => "90001"
    ]
];

$nestedJson = json_encode($personWithAddress, JSON_PRETTY_PRINT);
echo "Nested JSON Data:\n$nestedJson\n";

// Decoding nested JSON back to an array
$decodedNestedArray = json_decode($nestedJson, true);
print_r($decodedNestedArray);

// 5. Merging Two Associative Arrays
$additionalInfo = ["occupation" => "Engineer", "hobbies" => ["reading", "cycling"]];
$mergedArray = array_merge($person, $additionalInfo);
print_r($mergedArray);

// 6. Pretty Print JSON
$prettyJson = json_encode($mergedArray, JSON_PRETTY_PRINT);
echo "Pretty JSON:\n$prettyJson\n";
?>
