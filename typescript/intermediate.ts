// Intermediate TypeScript Examples

// 1. Advanced Function Types with Optional and Default Parameters

type MathOperation = (a: number, b: number, precision?: number) => number;

const add: MathOperation = (a, b, precision = 2) => {
  return parseFloat((a + b).toFixed(precision));
};

const subtract: MathOperation = (a, b, precision = 2) => {
  return parseFloat((a - b).toFixed(precision));
};

console.log("Add:", add(5.1234, 3.5678)); // Outputs: Add: 8.69
console.log("Subtract:", subtract(5.1234, 3.5678)); // Outputs: Subtract: 1.56

// 2. Interfaces with Function Types
interface StringManipulator {
  (input: string): string;
}

const toUpperCase: StringManipulator = (input: string) => {
  return input.toUpperCase();
};

console.log("Uppercase:", toUpperCase("hello")); // Outputs: Uppercase: HELLO

// 3. Interfaces with Index Signatures
interface NumberDictionary {
  [key: string]: number;
}

const numbers: NumberDictionary = {
  one: 1,
  two: 2,
  three: 3,
};

console.log("NumberDictionary:", numbers);

// 4. Intersection Types
interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type Worker = Person & Employee;

const worker: Worker = {
  name: "Alice",
  employeeId: 1234,
};

console.log("Worker:", worker);

// 5. Union Types with Type Guards
function logValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String value:", value.toUpperCase());
  } else {
    console.log("Number value:", value.toFixed(2));
  }
}

logValue("hello"); // Outputs: String value: HELLO
logValue(42.5678); // Outputs: Number value: 42.57

// 6. Type Aliases with Complex Types
type Point = { x: number; y: number };
type Circle = { center: Point; radius: number };

const circle: Circle = {
  center: { x: 5, y: 10 },
  radius: 7,
};

console.log("Circle:", circle);

// 7. Generics with Constraints
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
  console.log("Length:", arg.length);
}

logLength([1, 2, 3]); // Outputs: Length: 3
logLength("hello"); // Outputs: Length: 5

// 8. Enum with String Values
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

function move(direction: Direction) {
  console.log("Moving:", direction);
}

move(Direction.Up); // Outputs: Moving: UP
move(Direction.Left); // Outputs: Moving: LEFT

// 9. Class with Access Modifiers and Getters/Setters
class Rectangle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  get width(): number {
    return this._width;
  }

  set width(newWidth: number) {
    this._width = newWidth;
  }

  get area(): number {
    return this._width * this._height;
  }
}

const rect = new Rectangle(10, 20);
console.log("Area:", rect.area); // Outputs: Area: 200
rect.width = 15;
console.log("New area:", rect.area); // Outputs: New area: 300

// 10. Advanced Promises with TypeScript
function fetchData(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

// Example usage
fetchData("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log("Fetched data:", data))
  .catch((error) => console.error("Error:", error.message));
