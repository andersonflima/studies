<?php
// Intermediate PHP Examples

// 1. Type Hinting and Return Types
function add(int $a, int $b): int {
    return $a + $b;
}

echo add(10, 20); // Outputs 30

// 2. Default Parameters
function greet(string $name, string $greeting = "Hello"): string {
    return "$greeting, $name!";
}

echo greet("Alice"); // Outputs "Hello, Alice!"
echo greet("Bob", "Hi"); // Outputs "Hi, Bob!"

// 3. Handling Arrays with Type Hints
function sumArray(array $numbers): int {
    return array_sum($numbers);
}

echo sumArray([1, 2, 3, 4]); // Outputs 10

// 4. Object-Oriented Programming Basics
class Car {
    private string $make;
    private string $model;

    public function __construct(string $make, string $model) {
        $this->make = $make;
        $this->model = $model;
    }

    public function getMake(): string {
        return $this->make;
    }

    public function getModel(): string {
        return $this->model;
    }

    public function getFullDetails(): string {
        return "Make: $this->make, Model: $this->model";
    }
}

$car = new Car("Toyota", "Corolla");
echo $car->getFullDetails(); // Outputs "Make: Toyota, Model: Corolla"

// 5. Working with Dates and Times
$date = new DateTime();
echo $date->format('Y-m-d H:i:s'); // Outputs current date and time

// Modifying Date
$date->modify('+1 day');
echo $date->format('Y-m-d'); // Outputs tomorrow's date

// 6. Simple Exception Handling
function divide($a, $b): float {
    if ($b == 0) {
        throw new Exception("Division by zero is not allowed.");
    }
    return $a / $b;
}

try {
    echo divide(10, 2); // Outputs 5
    echo divide(10, 0); // Throws an exception
} catch (Exception $e) {
    echo "Caught exception: " . $e->getMessage();
}

// 7. Working with JSON
$data = ["name" => "Alice", "age" => 30, "city" => "New York"];
$json = json_encode($data);
echo $json; // Outputs JSON string

$decodedData = json_decode($json, true);
print_r($decodedData); // Outputs associative array
?>
