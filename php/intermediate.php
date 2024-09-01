<?php
// Intermediate PHP Example: Function with Default Parameters

function greet($name = "Guest") {
    return "Hello, $name!";
}

echo greet("Alice");
echo greet();
