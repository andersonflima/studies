// Advanced TypeScript Examples

// 1. Advanced Type Inference and Interfaces

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

const user: User = {
  name: "Alice",
  age: 30,
  isAdmin: true,
};

console.log(user);

// 2. Union Types and Type Guards

function printId(id: number | string): void {
  if (typeof id === "string") {
    console.log(`ID is a string: ${id.toUpperCase()}`);
  } else {
    console.log(`ID is a number: ${id.toFixed(2)}`);
  }
}

printId(101); // Outputs: ID is a number: 101.00
printId("2021"); // Outputs: ID is a string: 2021

// 3. Advanced Function Types

type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log("Add:", add(5, 3)); // Outputs: Add: 8
console.log("Subtract:", subtract(5, 3)); // Outputs: Subtract: 2

// 4. Generics

function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("Hello")); // Outputs: Hello
console.log(identity<number>(123)); // Outputs: 123

// 5. Generic Constraints

function loggingIdentity<T extends { length: number }>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property
  return arg;
}

loggingIdentity("Lengthy string"); // Outputs: 14

// 6. Enums

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

const move = (direction: Direction) => {
  console.log(`Moving ${Direction[direction]}`);
};

move(Direction.Up); // Outputs: Moving Up
move(Direction.Right); // Outputs: Moving Right

// 7. Advanced Classes with Access Modifiers

class Person {
  private name: string;
  protected age: number;
  public email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  public getDetails(): string {
    return `${this.name}, ${this.age} years old`;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, age: number, email: string, department: string) {
    super(name, age, email);
    this.department = department;
  }

  public getEmployeeDetails(): string {
    return `${this.getDetails()}, works in ${this.department}`;
  }
}

const emp = new Employee("Bob", 25, "bob@example.com", "Engineering");
console.log(emp.getEmployeeDetails()); // Outputs: Bob, 25 years old, works in Engineering

// 8. Interfaces with Optional Properties and Readonly Properties

interface Car {
  readonly model: string;
  year: number;
  brand?: string;
}

const myCar: Car = { model: "Tesla Model 3", year: 2021 };
myCar.year = 2022; // Allowed
// myCar.model = "Tesla Model S"; // Error: Cannot assign to 'model' because it is a read-only property

console.log(myCar);

// 9. Advanced Type Assertions

let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;
console.log("String length:", strLength);

// 10. Advanced Async/Await with TypeScript

async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// Example usage:
fetchData("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log(data))
  .catch((error) => console.error("Caught error:", error));
