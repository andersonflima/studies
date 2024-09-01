<?php
// Loops, Conditions, and Object (Dictionary) Manipulation in PHP

// For loop
for ($i = 0; $i < 5; $i++) {
    echo "For loop iteration $i\n";
}

// While loop
$count = 0;
while ($count < 5) {
    echo "While loop iteration $count\n";
    $count++;
}

// If/Else condition
$num = 10;
if ($num > 5) {
    echo "Number is greater than 5\n";
} else {
    echo "Number is 5 or less\n";
}

// Function definition and call
function greet($name) {
    return "Hello, $name!";
}

echo greet("Alice") . "\n";

// Array manipulation
$myArray = array(1, 2, 3);
array_push($myArray, 4);
unset($myArray[array_search(2, $myArray)]);
print_r($myArray);

// Associative Array (Dictionary) manipulation
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
?>
