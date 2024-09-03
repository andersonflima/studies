<?php
// Basic PHP Examples

// 1. Variables and Data Types
$integer = 10;
$float = 3.14;
$string = "Hello, World!";
$array = [1, 2, 3];
$boolean = true;

// 2. Basic Arithmetic Operations
$sum = $integer + 5;
$difference = $integer - 2;
$product = $integer * 2;
$division = $integer / 2;
$modulus = $integer % 3;

// 3. String Concatenation
$greeting = $string . " How are you?";

// 4. Arrays
$fruits = ["apple", "banana", "cherry"];
$fruits[] = "orange"; // Adding an element

// Associative Array
$person = [
    "name" => "Alice",
    "age" => 30,
    "city" => "New York"
];

// 5. Control Structures
if ($integer > 5) {
    echo "Greater than 5";
} else {
    echo "5 or less";
}

for ($i = 0; $i < 5; $i++) {
    echo "Iteration $i\n";
}

$counter = 0;
while ($counter < 5) {
    echo "Counter is $counter\n";
    $counter++;
}

// 6. Functions
function greet($name) {
    return "Hello, $name!";
}

echo greet("Bob");

// 7. Type Declarations (PHP 7+)
function add(int $a, int $b): int {
    return $a + $b;
}

echo add(5, 10);

// 8. Classes and Objects
class Car {
    public $make;
    public $model;

    public function __construct($make, $model) {
        $this->make = $make;
        $this->model = $model;
    }

    public function getDetails() {
        return "Make: $this->make, Model: $this->model";
    }
}

$car = new Car("Toyota", "Corolla");
echo $car->getDetails();
?>
