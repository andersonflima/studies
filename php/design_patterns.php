<?php
// Design Patterns in PHP

// Singleton Pattern
class Singleton {
    private static $instance = null;

    private function __construct() {}

    public static function getInstance() {
        if (self::$instance == null) {
            self::$instance = new Singleton();
        }
        return self::$instance;
    }
}

$singleton1 = Singleton::getInstance();
$singleton2 = Singleton::getInstance();
echo $singleton1 === $singleton2 ? "True\n" : "False\n";

// Factory Pattern
interface Animal {
    public function speak(): string;
}

class Dog implements Animal {
    public function speak(): string {
        return "Woof!";
    }
}

class Cat implements Animal {
    public function speak(): string {
        return "Meow!";
    }
}

class AnimalFactory {
    public static function getAnimal(string $animalType): Animal {
        if ($animalType == "dog") {
            return new Dog();
        } else if ($animalType == "cat") {
            return new Cat();
        } else {
            throw new Exception("Unknown animal type");
        }
    }
}

$dog = AnimalFactory::getAnimal("dog");
$cat = AnimalFactory::getAnimal("cat");
echo $dog->speak() . "\n";
echo $cat->speak() . "\n";
?>
