// Design Patterns in JavaScript

// 1. Singleton Pattern
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

console.log(singleton1 === singleton2); // True

// 2. Factory Pattern
class Dog {
  speak() {
    return "Woof!";
  }
}

class Cat {
  speak() {
    return "Meow!";
  }
}

class AnimalFactory {
  static getAnimal(animalType) {
    if (animalType === "dog") {
      return new Dog();
    } else if (animalType === "cat") {
      return new Cat();
    } else {
      throw new Error("Animal type not recognized.");
    }
  }
}

const dog = AnimalFactory.getAnimal("dog");
const cat = AnimalFactory.getAnimal("cat");
console.log(dog.speak()); // Outputs "Woof!"
console.log(cat.speak()); // Outputs "Meow!"

// 3. Observer Pattern
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log(`Observer received data: ${data}`);
  }
}

// Example usage:
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("Hello Observers!"); // Both observers receive the data

// 4. Strategy Pattern
class PaymentStrategy {
  pay(amount) {
    throw new Error("This method should be overridden");
  }
}

class CreditCardPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

class PayPalPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Paid ${amount} using PayPal`);
  }
}

class PaymentContext {
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executeStrategy(amount) {
    this.strategy.pay(amount);
  }
}

// Example usage:
const payment = new PaymentContext();
payment.setStrategy(new CreditCardPayment());
payment.executeStrategy(100); // Outputs "Paid 100 using Credit Card"
payment.setStrategy(new PayPalPayment());
payment.executeStrategy(200); // Outputs "Paid 200 using PayPal"

// 5. Decorator Pattern
class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 2;
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 1;
  }
}

// Example usage:
let coffee = new Coffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
console.log(`Total cost: ${coffee.cost()}`); // Outputs "Total cost: 8"

// 6. Module Pattern
const CounterModule = (function () {
  let count = 0;

  return {
    increment() {
      count += 1;
      console.log(`Count is now: ${count}`);
    },
    reset() {
      count = 0;
      console.log(`Count has been reset`);
    },
    getCount() {
      return count;
    },
  };
})();

CounterModule.increment(); // Outputs "Count is now: 1"
CounterModule.increment(); // Outputs "Count is now: 2"
console.log(`Current count: ${CounterModule.getCount()}`); // Outputs "Current count: 2"
CounterModule.reset(); // Outputs "Count has been reset"

// 7. Command Pattern
class Light {
  turnOn() {
    console.log("Light is On");
  }

  turnOff() {
    console.log("Light is Off");
  }
}

class Command {
  execute() {}
}

class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class LightOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

class RemoteControl {
  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

// Example usage:
const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();
remote.setCommand(lightOn);
remote.pressButton(); // Outputs "Light is On"
remote.setCommand(lightOff);
remote.pressButton(); // Outputs "Light is Off"
