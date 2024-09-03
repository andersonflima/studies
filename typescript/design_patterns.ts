// Design Patterns in TypeScript

// 1. Singleton Pattern
class Singleton {
  private static instance: Singleton;

  private constructor() {
    // Private constructor prevents instantiation from other classes
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public someBusinessLogic() {
    console.log("Executing some business logic.");
  }
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // Outputs: true

// 2. Factory Pattern
interface Animal {
  speak(): string;
}

class Dog implements Animal {
  speak(): string {
    return "Woof!";
  }
}

class Cat implements Animal {
  speak(): string {
    return "Meow!";
  }
}

class AnimalFactory {
  static createAnimal(animalType: string): Animal {
    switch (animalType) {
      case "dog":
        return new Dog();
      case "cat":
        return new Cat();
      default:
        throw new Error("Unknown animal type");
    }
  }
}

const dog = AnimalFactory.createAnimal("dog");
const cat = AnimalFactory.createAnimal("cat");
console.log(dog.speak()); // Outputs: Woof!
console.log(cat.speak()); // Outputs: Meow!

// 3. Observer Pattern
interface Observer {
  update(message: string): void;
}

class ConcreteObserver implements Observer {
  private observerName: string;

  constructor(name: string) {
    this.observerName = name;
  }

  update(message: string): void {
    console.log(`${this.observerName} received: ${message}`);
  }
}

class Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(message: string): void {
    for (const observer of this.observers) {
      observer.update(message);
    }
  }
}

const subject = new Subject();
const observer1 = new ConcreteObserver("Observer 1");
const observer2 = new ConcreteObserver("Observer 2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers("Event 1 occurred!"); // Both observers receive the message

// 4. Strategy Pattern
interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card.`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using PayPal.`);
  }
}

class PaymentContext {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  executeStrategy(amount: number): void {
    this.strategy.pay(amount);
  }
}

const paymentContext = new PaymentContext(new CreditCardPayment());
paymentContext.executeStrategy(100); // Outputs: Paid 100 using Credit Card.

paymentContext.setStrategy(new PayPalPayment());
paymentContext.executeStrategy(200); // Outputs: Paid 200 using PayPal.

// 5. Decorator Pattern
interface Coffee {
  cost(): number;
}

class SimpleCoffee implements Coffee {
  cost(): number {
    return 5;
  }
}

class MilkDecorator implements Coffee {
  private coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  cost(): number {
    return this.coffee.cost() + 2;
  }
}

class SugarDecorator implements Coffee {
  private coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  cost(): number {
    return this.coffee.cost() + 1;
  }
}

let coffee: Coffee = new SimpleCoffee();
console.log(`Cost: $${coffee.cost()}`); // Outputs: Cost: $5

coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
console.log(`Cost with milk and sugar: $${coffee.cost()}`); // Outputs: Cost with milk and sugar: $8

// 6. Command Pattern
class Light {
  turnOn(): void {
    console.log("Light is On");
  }

  turnOff(): void {
    console.log("Light is Off");
  }
}

interface Command {
  execute(): void;
}

class LightOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOn();
  }
}

class LightOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOff();
  }
}

class RemoteControl {
  private command: Command;

  setCommand(command: Command): void {
    this.command = command;
  }

  pressButton(): void {
    this.command.execute();
  }
}

const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();
remote.setCommand(lightOn);
remote.pressButton(); // Outputs: Light is On

remote.setCommand(lightOff);
remote.pressButton(); // Outputs: Light is Off

// 7. Proxy Pattern
interface SubjectInterface {
  request(): void;
}

class RealSubject implements SubjectInterface {
  request(): void {
    console.log("RealSubject: Handling request.");
  }
}

class ProxySubject implements SubjectInterface {
  private realSubject: RealSubject;

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  request(): void {
    if (this.checkAccess()) {
      this.realSubject.request();
    }
  }

  private checkAccess(): boolean {
    console.log("Proxy: Checking access before firing a request.");
    return true;
  }
}

const realSubject = new RealSubject();
const proxy = new ProxySubject(realSubject);
proxy.request(); // Outputs: Proxy: Checking access before firing a request. RealSubject: Handling request.
