<?php
// Advanced Data Manipulation in PHP

// 1. Array Map, Filter, Reduce
$numbers = [1, 2, 3, 4, 5];

// Map
$squared = array_map(fn($x) => $x ** 2, $numbers);
print_r($squared);

// Filter
$even_numbers = array_filter($numbers, fn($x) => $x % 2 === 0);
print_r($even_numbers);

// Reduce
$product = array_reduce($numbers, fn($carry, $item) => $carry * $item, 1);
echo "Product: $product\n";

// 2. Array Destructuring (PHP 7.1+)
list($a, $b, $c) = $numbers;
echo "a: $a, b: $b, c: $c\n";

// 3. Working with Associative Arrays
$person = [
    "name" => "Alice",
    "age" => 30,
    "city" => "New York"
];

foreach ($person as $key => $value) {
    echo "$key: $value\n";
}

// 4. Merging Arrays
$array1 = ["a" => "apple", "b" => "banana"];
$array2 = ["b" => "blueberry", "c" => "cherry"];

$merged_array = array_merge($array1, $array2);
print_r($merged_array);

// 5. Sorting Arrays
$fruits = ["banana", "apple", "cherry"];
sort($fruits);
print_r($fruits);

// Associative array sorting by values
asort($person);
print_r($person);

// 6. String Manipulation
$string = "Hello, World!";
$uppercase = strtoupper($string);
echo $uppercase;

$replaced = str_replace("World", "PHP", $string);
echo $replaced;

// 7. JSON Encoding/Decoding
$json = json_encode($person);
echo $json;

$decoded = json_decode($json, true);
print_r($decoded);
?>
