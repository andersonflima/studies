<?php
// Object (Associative Array) and JSON Manipulation in PHP

// Associative Array (Object) Manipulation
$person = array(
    "name" => "Alice",
    "age" => 30,
    "city" => "New York"
);

// Accessing values
echo $person["name"] . "\n";

// Adding a new key-value pair
$person["email"] = "alice@example.com";

// Modifying an existing value
$person["age"] = 31;

// Removing a key-value pair
unset($person["city"]);

print_r($person);

// Convert associative array to JSON
$personJson = json_encode($person);
echo $personJson . "\n";

// Convert JSON to associative array
$personArray = json_decode($personJson, true);
print_r($personArray);
?>
