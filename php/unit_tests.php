<?php
// Unit Testing in PHP with PHPUnit

use PHPUnit\Framework\TestCase;

class MathTest extends TestCase {
    public function testAdd() {
        $this->assertEquals(4, add(2, 2));
        $this->assertEquals(0, add(2, -2));
    }

    public function testSubtract() {
        $this->assertEquals(0, subtract(2, 2));
        $this->assertEquals(4, subtract(2, -2));
    }
}

function add($a, $b) {
    return $a + $b;
}

function subtract($a, $b) {
    return $a - $b;
}

// PHPUnit Command: phpunit --bootstrap autoload.php tests/MathTest.php
?>
