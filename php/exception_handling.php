<?php
// Exception Handling in PHP

// 1. Basic Exception Handling
function divide($a, $b) {
    try {
        if ($b == 0) {
            throw new Exception("Division by zero");
        }
        return $a / $b;
    } catch (Exception $e) {
        echo "Caught exception: " . $e->getMessage() . "\n";
    } finally {
        echo "Execution completed.\n";
    }
}

// Example usage
echo divide(10, 2); // Outputs 5
echo divide(10, 0); // Outputs error message

// 2. Custom Exception Handling
class CustomException extends Exception {
    public function errorMessage() {
        return "Custom error on line " . $this->getLine() . " in " . $this->getFile() . ": " . $this->getMessage();
    }
}

function testException($value) {
    try {
        if ($value < 0) {
            throw new CustomException("Negative value not allowed");
        }
        echo "Value is $value\n";
    } catch (CustomException $e) {
        echo $e->errorMessage() . "\n";
    }
}

// Example usage
testException(10); // Outputs "Value is 10"
testException(-5); // Outputs custom error message

// 3. Multiple Exceptions
function multiCatchExample($a, $b) {
    try {
        if ($b == 0) {
            throw new DivisionByZeroError("Cannot divide by zero");
        }
        if (!is_numeric($a) || !is_numeric($b)) {
            throw new InvalidArgumentException("Both arguments must be numbers");
        }
        return $a / $b;
    } catch (DivisionByZeroError $e) {
        echo "Error: " . $e->getMessage() . "\n";
    } catch (InvalidArgumentException $e) {
        echo "Error: " . $e->getMessage() . "\n";
    } finally {
        echo "Finished execution.\n";
    }
}

// Example usage
echo multiCatchExample(10, 2); // Outputs 5
echo multiCatchExample(10, 0); // Outputs division by zero error
echo multiCatchExample(10, 'a'); // Outputs invalid argument error

// 4. Using Finally for Cleanup
function openFile($filename) {
    try {
        $file = fopen($filename, "r");
        if (!$file) {
            throw new Exception("File not found");
        }
        echo fread($file, filesize($filename));
    } catch (Exception $e) {
        echo "Caught exception: " . $e->getMessage() . "\n";
    } finally {
        if (isset($file) && $file) {
            fclose($file);
            echo "File closed.\n";
        }
    }
}

// Example usage
openFile("example.txt"); // Outputs file content or error
?>
