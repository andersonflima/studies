// OOP in JavaScript

// 1. Class Definition and Constructor
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    throw new Error("Subclasses must implement this method");
  }
}

// 2. Inheritance
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

// 3. Polymorphism
function makeAnimalSpeak(animal) {
  console.log(animal.speak());
}

const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

makeAnimalSpeak(dog); // Outputs: Buddy says Woof!
makeAnimalSpeak(cat); // Outputs: Whiskers says Meow!

// 4. Encapsulation
class User {
  #password; // Private property

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  checkPassword(password) {
    return this.#password === password;
  }

  setPassword(newPassword) {
    this.#password = newPassword;
  }
}

const user = new User("Alice", "secret");
console.log(user.checkPassword("secret")); // Outputs: true
console.log(user.checkPassword("wrong")); // Outputs: false

// 5. Static Methods and Properties
class MathUtils {
  static pi = 3.14159;

  static circumference(radius) {
    return 2 * MathUtils.pi * radius;
  }
}

console.log(
  "Circumference of circle with radius 5:",
  MathUtils.circumference(5),
); // Outputs: 31.4159

// 6. Getters and Setters
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get area() {
    return this._width * this._height;
  }

  set width(newWidth) {
    this._width = newWidth;
  }

  set height(newHeight) {
    this._height = newHeight;
  }
}

const rect = new Rectangle(10, 5);
console.log("Area of rectangle:", rect.area); // Outputs: 50
rect.width = 15;
rect.height = 10;
console.log("New area of rectangle:", rect.area); // Outputs: 150

// 7. Abstract Classes (ES6 does not support true abstract classes, but we can simulate them)
class Shape {
  constructor(name) {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class Shape directly");
    }
    this.name = name;
  }

  area() {
    throw new Error("Method 'area()' must be implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
console.log(`${circle.name} area:`, circle.area()); // Outputs: Circle area: 78.53981633974483

// 8. Inheritance with Method Overriding
class Bird extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    return `${this.name} says Tweet!`;
  }
}

const bird = new Bird("Tweety");
makeAnimalSpeak(bird); // Outputs: Tweety says Tweet!

