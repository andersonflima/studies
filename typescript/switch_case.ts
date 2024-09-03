// Switch Case in TypeScript

// 1. Basic Switch-Case Example
function switchCaseExample(value: number | string): string {
  switch (value) {
    case 1:
      return "Value is 1";
    case 2:
      return "Value is 2";
    case 3:
      return "Value is 3";
    case "hello":
      return "Value is hello";
    default:
      return "Value is something else";
  }
}

console.log(switchCaseExample(1)); // Outputs: Value is 1
console.log(switchCaseExample("hello")); // Outputs: Value is hello
console.log(switchCaseExample(4)); // Outputs: Value is something else

// 2. Handling Multiple Cases
function switchCaseMultiple(value: string): string {
  switch (value.toLowerCase()) {
    case "a":
    case "b":
    case "c":
      return "Value is A, B, or C";
    default:
      return "Value is something else";
  }
}

console.log(switchCaseMultiple("A")); // Outputs: Value is A, B, or C
console.log(switchCaseMultiple("b")); // Outputs: Value is A, B, or C
console.log(switchCaseMultiple("d")); // Outputs: Value is something else

// 3. Switch-Case with Fall-Through Behavior
function switchCaseFallThrough(value: number): string {
  let result = "";
  switch (value) {
    case 1:
      result += "First ";
    case 2:
      result += "Second ";
    case 3:
      result += "Third ";
      break;
    default:
      result += "Unknown ";
  }
  return result.trim();
}

console.log(switchCaseFallThrough(1)); // Outputs: First Second Third
console.log(switchCaseFallThrough(2)); // Outputs: Second Third
console.log(switchCaseFallThrough(4)); // Outputs: Unknown

// 4. Using Switch-Case with Functions
function operation(value: string): (a: number, b: number) => number {
  switch (value) {
    case "add":
      return (a, b) => a + b;
    case "subtract":
      return (a, b) => a - b;
    case "multiply":
      return (a, b) => a * b;
    case "divide":
      return (a, b) => a / b;
    default:
      throw new Error("Invalid operation");
  }
}

const addOperation = operation("add");
console.log("Add:", addOperation(10, 5)); // Outputs: Add: 15

const multiplyOperation = operation("multiply");
console.log("Multiply:", multiplyOperation(10, 5)); // Outputs: Multiply: 50

try {
  const unknownOperation = operation("modulus");
  console.log(unknownOperation(10, 5));
} catch (error) {
  console.error("Error:", error.message); // Outputs: Error: Invalid operation
}

// 5. Switch-Case with Enums
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

function move(direction: Direction): string {
  switch (direction) {
    case Direction.Up:
      return "Moving up";
    case Direction.Down:
      return "Moving down";
    case Direction.Left:
      return "Moving left";
    case Direction.Right:
      return "Moving right";
    default:
      return "Invalid direction";
  }
}

console.log(move(Direction.Up)); // Outputs: Moving up
console.log(move(Direction.Left)); // Outputs: Moving left

// 6. Switch-Case with Objects and Type Guards
interface Dog {
  type: "dog";
  bark(): string;
}

interface Cat {
  type: "cat";
  meow(): string;
}

type Animal = Dog | Cat;

function handleAnimal(animal: Animal): string {
  switch (animal.type) {
    case "dog":
      return animal.bark();
    case "cat":
      return animal.meow();
    default:
      throw new Error("Unknown animal type");
  }
}

const myDog: Dog = {
  type: "dog",
  bark: () => "Woof!",
};

const myCat: Cat = {
  type: "cat",
  meow: () => "Meow!",
};

console.log(handleAnimal(myDog)); // Outputs: Woof!
console.log(handleAnimal(myCat)); // Outputs: Meow!
