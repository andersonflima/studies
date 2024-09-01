// OOP in JavaScript

// Class definition
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        throw new Error("Subclasses must implement this method");
    }
}

// Inheritance
class Dog extends Animal {
    speak() {
        return `${this.name} says Woof!`;
    }
}

class Cat extends Animal {
    speak() {
        return `${this.name} says Meow!`;
    }
}

// Polymorphism
function makeAnimalSpeak(animal) {
    console.log(animal.speak());
}

const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

makeAnimalSpeak(dog);
makeAnimalSpeak(cat);