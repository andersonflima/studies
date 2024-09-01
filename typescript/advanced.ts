// Advanced TypeScript Example: Class with Inheritance and Interface

interface Animal {
    name: string;
    makeSound(): void;
}

class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    makeSound(): void {
        console.log(`${this.name} says Woof!`);
    }
}

class Cat implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    makeSound(): void {
        console.log(`${this.name} says Meow!`);
    }
}

let dog = new Dog("Buddy");
let cat = new Cat("Whiskers");

dog.makeSound();
cat.makeSound();
