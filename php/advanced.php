<?php
// Advanced PHP Example: Class with Inheritance

class Animal {
    public $name;
    
    function __construct($name) {
        $this->name = $name;
    }

    function makeSound() {
        echo "$this->name makes a sound.";
    }
}

class Dog extends Animal {
    function makeSound() {
        echo "$this->name says Woof!";
    }
}

class Cat extends Animal {
    function makeSound() {
        echo "$this->name says Meow!";
    }
}

$dog = new Dog("Buddy");
$cat = new Cat("Whiskers");

$dog->makeSound();
$cat->makeSound();
