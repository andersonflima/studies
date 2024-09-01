<?php
// Exception Handling in PHP

function divide($a, $b) {
    try {
        if ($b == 0) {
            throw new Exception("Cannot divide by zero");
        }
        return $a / $b;
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    } finally {
        echo " Execution completed.\n";
    }
}

echo divide(10, 2) . "\n";
echo divide(10, 0) . "\n";
?>
