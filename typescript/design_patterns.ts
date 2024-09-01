// Design Patterns in TypeScript

// Singleton Pattern
class Singleton {
    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2);  // True

// Factory Pattern
interface Animal {
    speak(): string;
}

class Dog implements Animal {
    speak(): string {
        return 'Woof!';
    }
}

class Cat implements Animal {
    speak(): string {
        return 'Meow!';
    }
}

class AnimalFactory {
    static getAnimal(animalType: string): Animal {
        if (animalType === 'dog') {
            return new Dog();
        } else if (animalType === 'cat') {
            return new Cat();
        } else {
            throw new Error('Unknown animal type');
        }
    }
}

const dog = AnimalFactory.getAnimal('dog');
const cat = AnimalFactory.getAnimal('cat');
console.log(dog.speak());
console.log(cat.speak());
