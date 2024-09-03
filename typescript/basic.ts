// Basic TypeScript Examples

// 1. Variable Declarations with Types
let isDone: boolean = false;
let age: number = 32;
let name: string = "Alice";
let list: number[] = [1, 2, 3];
let tuple: [string, number];
tuple = ["hello", 10]; // OK

// 2. Enums
enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log("Color:", c); // Outputs: Color: 2

// 3. Function with Typed Parameters and Return Type
function add(x: number, y: number): number {
  return x + y;
}
console.log("Sum:", add(5, 3)); // Outputs: Sum: 8

// 4. Function with Optional and Default Parameters
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}
console.log(greet("Alice")); // Outputs: Hello, Alice!
console.log(greet("Bob", "Hi")); // Outputs: Hi, Bob!

// 5. Union Types
function printId(id: number | string): void {
  console.log("Your ID is:", id);
}
printId(101); // OK
printId("202"); // OK
// printId({ myID: 22342 }); // Error

// 6. Interfaces
interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // Optional property
}

const user1: User = {
  name: "Alice",
  age: 30,
  isAdmin: true,
};

const user2: User = {
  name: "Bob",
  age: 25,
};

console.log("User1:", user1);
console.log("User2:", user2);

// 7. Type Assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log("String length:", strLength); // Outputs: 16

// 8. Classes and Inheritance
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Buddy");
dog.bark(); // Outputs: Woof! Woof!
dog.move(10); // Outputs: Buddy moved 10 meters.

// 9. Generics
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);
console.log("Generic outputs:", output1, output2);

// 10. Type Aliases
type Point = {
  x: number;
  y: number;
};

function printPoint(point: Point) {
  console.log(`Point x: ${point.x}, y: ${point.y}`);
}

printPoint({ x: 10, y: 20 }); // Outputs: Point x: 10, y: 20

// 11. Readonly Properties
interface ReadonlyUser {
  readonly id: number;
  name: string;
}

const readonlyUser: ReadonlyUser = {
  id: 1,
  name: "Alice",
};

// readonlyUser.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
readonlyUser.name = "Alice Cooper"; // OK

console.log("Readonly User:", readonlyUser);

// 12. Null and Undefined
let u: undefined = undefined;
let n: null = null;

console.log("Undefined value:", u);
console.log("Null value:", n);
