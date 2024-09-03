<?php
// Advanced PHP Examples

// 1. Namespaces
namespace MyProject\Utilities;

class Helper {
    public static function greet($name) {
        return "Hello, $name!";
    }
}

// Example usage:
use MyProject\Utilities\Helper;
echo Helper::greet("Alice");

// 2. Traits
trait Loggable {
    public function log($message) {
        echo "Logging message: $message\n";
    }
}

class User {
    use Loggable;
    
    public $name;

    public function __construct($name) {
        $this->name = $name;
    }
}

// Example usage:
$user = new User("Bob");
$user->log("User created.");

// 3. Late Static Binding
class Base {
    public static function who() {
        echo __CLASS__;
    }

    public static function test() {
        static::who(); // Here comes Late Static Binding
    }
}

class Child extends Base {
    public static function who() {
        echo __CLASS__;
    }
}

// Example usage:
Child::test(); // Outputs "Child"

// 4. Magic Methods
class Magic {
    private $data = [];

    public function __set($name, $value) {
        $this->data[$name] = $value;
    }

    public function __get($name) {
        return $this->data[$name];
    }

    public function __call($name, $arguments) {
        echo "Calling method '$name' with arguments: " . implode(', ', $arguments) . "\n";
    }

    public static function __callStatic($name, $arguments) {
        echo "Calling static method '$name' with arguments: " . implode(', ', $arguments) . "\n";
    }
}

// Example usage:
$magic = new Magic();
$magic->name = "Alice";
echo $magic->name; // Outputs "Alice"
$magic->doSomething("arg1", "arg2");
Magic::doStatic("arg1", "arg2");

// 5. Anonymous Classes
$logger = new class {
    public function log($message) {
        echo "Logging: $message\n";
    }
};

$logger->log("This is a log message.");

// 6. Generators
function xrange($start, $end, $step = 1) {
    for ($i = $start; $i <= $end; $i += $step) {
        yield $i;
    }
}

// Example usage:
foreach (xrange(1, 10, 2) as $number) {
    echo "$number\n"; // Outputs 1, 3, 5, 7, 9
}
?>
