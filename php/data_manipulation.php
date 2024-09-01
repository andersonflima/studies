<?php
// Advanced Data Manipulation in PHP

// Array Map, Filter, Reduce
$numbers = [1, 2, 3, 4, 5];
$squared = array_map(fn($x) => $x ** 2, $numbers);
$evenNumbers = array_filter($numbers, fn($x) => $x % 2 == 0);
$product = array_reduce($numbers, fn($x, $y) => $x * $y, 1);

print_r($squared);
print_r($evenNumbers);
echo "Product: $product\n";

// Array Destructuring (list in PHP)
list($a, $b, ...$rest) = $numbers;
echo "a: $a, b: $b\n";
print_r($rest);

// Array Spread Operator (array_merge in PHP)
$extendedNumbers = array_merge([0], $numbers, [6]);
print_r($extendedNumbers);
?>
