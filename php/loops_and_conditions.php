<?php
// Loops and Conditions in PHP

// 1. For Loop
for ($i = 0; $i < 5; $i++) {
    echo "For loop iteration: $i\n";
}

// 2. While Loop
$count = 0;
while ($count < 5) {
    echo "While loop iteration: $count\n";
    $count++;
}

// 3. Do-While Loop
$count = 0;
do {
    echo "Do-While loop iteration: $count\n";
    $count++;
} while ($count < 5);

// 4. If-Else Conditions
$number = 10;
if ($number > 5) {
    echo "Number is greater than 5\n";
} elseif ($number == 5) {
    echo "Number is equal to 5\n";
} else {
    echo "Number is less than 5\n";
}

// 5. Switch Case
$day = "Monday";
switch ($day) {
    case "Monday":
        echo "Start of the work week\n";
        break;
    case "Friday":
        echo "End of the work week\n";
        break;
    default:
        echo "Middle of the work week\n";
        break;
}

// 6. Foreach Loop
$fruits = ["apple", "banana", "cherry"];
foreach ($fruits as $index => $fruit) {
    echo "Fruit $index: $fruit\n";
}

// 7. Associative Array Iteration
$person = ["name" => "Alice", "age" => 30, "city" => "New York"];
foreach ($person as $key => $value) {
    echo "$key: $value\n";
}
?>
