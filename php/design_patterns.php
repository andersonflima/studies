<?php
// Design Patterns in PHP

// 1. Singleton Pattern
class Singleton {
    private static $instance = null;

    private function __construct() {
        // Private constructor to prevent multiple instances
    }

    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new Singleton();
        }
        return self::$instance;
    }
}

// Example usage
$singleton1 = Singleton::getInstance();
$singleton2 = Singleton::getInstance();
echo $singleton1 === $singleton2 ? "Singleton works!\n" : "Singleton failed.\n";

// 2. Factory Pattern
interface Animal {
    public function speak();
}

class Dog implements Animal {
    public function speak() {
        return "Woof!";
    }
}

class Cat implements Animal {
    public function speak() {
        return "Meow!";
    }
}

class AnimalFactory {
    public static function createAnimal($type) {
        return match($type) {
            'dog' => new Dog(),
            'cat' => new Cat(),
            default => throw new Exception("Unknown animal type"),
        };
    }
}

// Example usage
$dog = AnimalFactory::createAnimal('dog');
$cat = AnimalFactory::createAnimal('cat');
echo $dog->speak(); // Outputs "Woof!"
echo $cat->speak(); // Outputs "Meow!"

// 3. Observer Pattern
class Subject {
    private $observers = [];

    public function attach($observer) {
        $this->observers[] = $observer;
    }

    public function notify() {
        foreach ($this->observers as $observer) {
            $observer->update();
        }
    }
}

class Observer {
    public function update() {
        echo "Observer has been notified!\n";
    }
}

// Example usage
$subject = new Subject();
$observer = new Observer();
$subject->attach($observer);
$subject->notify(); // Outputs "Observer has been notified!"

// 4. Strategy Pattern
interface PaymentStrategy {
    public function pay($amount);
}

class CreditCardPayment implements PaymentStrategy {
    public function pay($amount) {
        echo "Paid $amount using Credit Card.\n";
    }
}

class PayPalPayment implements PaymentStrategy {
    public function pay($amount) {
        echo "Paid $amount using PayPal.\n";
    }
}

class PaymentContext {
    private $strategy;

    public function setStrategy(PaymentStrategy $strategy) {
        $this->strategy = $strategy;
    }

    public function executePayment($amount) {
        $this->strategy->pay($amount);
    }
}

// Example usage
$context = new PaymentContext();
$context->setStrategy(new CreditCardPayment());
$context->executePayment(100); // Outputs "Paid 100 using Credit Card."
$context->setStrategy(new PayPalPayment());
$context->executePayment(200); // Outputs "Paid 200 using PayPal."

// 5. Decorator Pattern
interface Coffee {
    public function cost();
}

class SimpleCoffee implements Coffee {
    public function cost() {
        return 5;
    }
}

class MilkDecorator implements Coffee {
    protected $coffee;

    public function __construct(Coffee $coffee) {
        $this->coffee = $coffee;
    }

    public function cost() {
        return $this->coffee->cost() + 2;
    }
}

class SugarDecorator implements Coffee {
    protected $coffee;

    public function __construct(Coffee $coffee) {
        $this->coffee = $coffee;
    }

    public function cost() {
        return $this->coffee->cost() + 1;
    }
}

// Example usage
$coffee = new SimpleCoffee();
$coffee = new MilkDecorator($coffee);
$coffee = new SugarDecorator($coffee);
echo "Total cost: " . $coffee->cost(); // Outputs "Total cost: 8"
?>
