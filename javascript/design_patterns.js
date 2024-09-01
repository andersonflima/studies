// Design Patterns in JavaScript

// Singleton Pattern
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();

console.log(singleton1 === singleton2);  // True

// Factory Pattern
class Dog {
    speak() {
        return 'Woof!';
    }
}

class Cat {
    speak() {
        return 'Meow!';
    }
}

class AnimalFactory {
    static getAnimal(animalType) {
        if (animalType === 'dog') {
            return new Dog();
        } else if (animalType === 'cat') {
            return new Cat();
        }
    }
}

const dog = AnimalFactory.getAnimal('dog');
const cat = AnimalFactory.getAnimal('cat');
console.log(dog.speak());
console.log(cat.speak());
