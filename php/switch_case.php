<?php
// Switch-Case Equivalent in PHP using Match (PHP 8.0+)

function switchCaseExample($value) {
    return match ($value) {
        1 => "Value is 1",
        2 => "Value is 2",
        3 => "Value is 3",
        default => "Value is something else",
    };
}

echo switchCaseExample(1); // Outputs "Value is 1"
echo switchCaseExample(4); // Outputs "Value is something else"

// More Complex Example
function getDayMessage($day) {
    return match ($day) {
        'Monday' => "Start of the work week!",
        'Friday' => "Almost the weekend!",
        'Saturday', 'Sunday' => "Weekend!",
        default => "Middle of the week.",
    };
}

echo getDayMessage('Monday'); // Outputs "Start of the work week!"
echo getDayMessage('Saturday'); // Outputs "Weekend!"
?>
