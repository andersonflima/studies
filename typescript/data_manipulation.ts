// Advanced Data Manipulation in TypeScript

// 1. Map, Filter, Reduce
const numbers: number[] = [1, 2, 3, 4, 5];

// Using map to square each number
const squared: number[] = numbers.map((x) => x ** 2);
console.log("Squared:", squared);

// Using filter to extract even numbers
const evenNumbers: number[] = numbers.filter((x) => x % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Using reduce to calculate the product of all numbers
const product: number = numbers.reduce((x, y) => x * y, 1);
console.log("Product:", product);

// 2. Destructuring and Spread Operator
const [a, b, ...rest]: number[] = numbers;
console.log("a:", a, "b:", b, "rest:", rest);

const extendedNumbers: number[] = [0, ...numbers, 6];
console.log("Extended numbers:", extendedNumbers);

// 3. Array Comprehension (Map + Filter)
const evenSquared: number[] = numbers
  .filter((x) => x % 2 === 0)
  .map((x) => x ** 2);
console.log("Even Squared:", evenSquared);

// 4. Finding elements in an array
const found: number | undefined = numbers.find((x) => x > 3);
console.log("First number greater than 3:", found);

// 5. Checking conditions in an array
const allPositive: boolean = numbers.every((x) => x > 0);
console.log("Are all numbers positive?", allPositive);

const someEven: boolean = numbers.some((x) => x % 2 === 0);
console.log("Are there any even numbers?", someEven);

// 6. Sorting arrays
const sortedNumbers: number[] = [...numbers].sort((a, b) => b - a);
console.log("Sorted numbers (descending):", sortedNumbers);

// 7. Working with objects and arrays
interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// Map over an array of objects
const names: string[] = people.map((person) => person.name);
console.log("Names:", names);

// Filter based on a condition
const over30: Person[] = people.filter((person) => person.age > 30);
console.log("People over 30:", over30);

// Reduce to calculate a total
const totalAge: number = people.reduce((sum, person) => sum + person.age, 0);
console.log("Total age:", totalAge);

// 8. Merging objects using the spread operator
const personDetails = { name: "Alice", age: 25 };
const contactDetails = { email: "alice@example.com", phone: "123-456-7890" };

const mergedDetails = { ...personDetails, ...contactDetails };
console.log("Merged Details:", mergedDetails);

// 9. Cloning and modifying arrays
const clonedNumbers: number[] = [...numbers];
clonedNumbers.push(6);
console.log("Cloned and modified numbers:", clonedNumbers);
console.log("Original numbers:", numbers);

// 10. Advanced array functions: flatMap
const nestedNumbers: (number | number[])[] = [1, [2, 3], [4, 5]];
const flatNumbers: number[] = nestedNumbers.flatMap((x) =>
  Array.isArray(x) ? x : [x],
);
console.log("Flat numbers:", flatNumbers);

// 11. Tuple Manipulation
type Point = [number, number];
const point: Point = [10, 20];

const [x, y]: Point = point;
console.log(`X: ${x}, Y: ${y}`);

const newPoint: Point = [...point, 30] as Point;
console.log("New point:", newPoint);

// 12. Handling Optional Chaining with Arrays and Objects
interface User {
  id: number;
  name: string;
  preferences?: {
    color?: string;
    fontSize?: number;
  };
}

const users: User[] = [
  { id: 1, name: "Alice", preferences: { color: "blue" } },
  { id: 2, name: "Bob" },
];

users.forEach((user) => {
  const fontSize = user.preferences?.fontSize ?? 14; // Default to 14 if fontSize is not provided
  console.log(`${user.name}'s font size: ${fontSize}`);
});
