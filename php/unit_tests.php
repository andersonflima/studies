<?php
// Unit Testing in PHP with PHPUnit

// Install PHPUnit with `composer require --dev phpunit/phpunit`

class MathFunctionsTest extends PHPUnit\Framework\TestCase {
    public function testAdd() {
        $this->assertEquals(3, add(1, 2));
        $this->assertEquals(0, add(-1, 1));
    }

    public function testSubtract() {
        $this->assertEquals(1, subtract(2, 1));
        $this->assertEquals(0, subtract(2, 2));
    }
}

// Functions to be tested
function add($a, $b) {
    return $a + $b;
}

function subtract($a, $b) {
    return $a - $b;
}

// Run the tests with `vendor/bin/phpunit --bootstrap <filename>.php <filename>Test.php`
?>
