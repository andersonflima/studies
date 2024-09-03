// Loops, Conditions, and Object (Dictionary) Manipulation in TypeScript

// 1. For Loop with Index
for (let i: number = 0; i < 5; i++) {
  console.log(`For loop iteration ${i}`);
}

// 2. While Loop
let count: number = 0;
while (count < 5) {
  console.log(`While loop iteration ${count}`);
  count++;
}

// 3. Do-While Loop
let counter: number = 0;
do {
  console.log(`Do-While loop iteration ${counter}`);
  counter++;
} while (counter < 5);

// 4. If/Else Condition
let num: number = 10;
if (num > 5) {
  console.log("Number is greater than 5");
} else if (num === 5) {
  console.log("Number is exactly 5");
} else {
  console.log("Number is less than 5");
}

// 5. Switch Case
const day: string = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break;
  case "Friday":
    console.log("End of the work week");
    break;
  default:
    console.log("Midweek day");
}

// 6. Function Definition and Call
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Outputs: Hello, Alice!

// 7. Arrow Functions with TypeScript
const add = (a: number, b: number): number => a + b;
console.log("Sum:", add(5, 10)); // Outputs: Sum: 15

// 8. Array Iteration with forEach
let myArray: number[] = [1, 2, 3, 4, 5];
myArray.forEach((item, index) => {
  console.log(`Item at index ${index}: ${item}`);
});

// 9. Filtering Arrays with Conditions
let filteredArray: number[] = myArray.filter((item) => item > 2);
console.log("Filtered Array:", filteredArray); // Outputs: [3, 4, 5]

// 10. Mapping Arrays to New Values
let mappedArray: string[] = myArray.map((item) => `Number: ${item}`);
console.log("Mapped Array:", mappedArray); // Outputs: ["Number: 1", "Number: 2", "Number: 3", "Number: 4", "Number: 5"]

// 11. Reducing Arrays to a Single Value
let total: number = myArray.reduce((acc, item) => acc + item, 0);
console.log("Total Sum:", total); // Outputs: Total Sum: 15

// 12. Object (Dictionary) Manipulation
interface Person {
  name: string;
  age: number;
  city?: string; // Optional property
}

let person: Person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// Accessing values
console.log("Name:", person.name);

// Adding or Modifying a key-value pair
person.email = "alice@example.com";
console.log("Updated Person:", person);

// Removing a key-value pair
delete person.city;
console.log("Person after deletion:", person);

// Iterating over Object Keys
for (const key in person) {
  if (Object.prototype.hasOwnProperty.call(person, key)) {
    console.log(`${key}: ${person[key as keyof Person]}`);
  }
}

// 13. Working with Nested Objects
let complexPerson: Person & { address: { street: string; city: string } } = {
  name: "Bob",
  age: 40,
  address: {
    street: "123 Main St",
    city: "Los Angeles",
  },
};

// Accessing nested properties
console.log("Street:", complexPerson.address.street);

// Modifying nested values
complexPerson.address.city = "San Francisco";
console.log("Updated Address:", complexPerson.address);

// 14. Advanced Conditional Statements
const age: number = 18;
const canVote: string = age >= 18 ? "You can vote" : "You cannot vote";
console.log(canVote); // Outputs: You can vote

// 15. Using Optional Chaining and Nullish Coalescing
let user: Person | null = null;
console.log("User Name:", user?.name ?? "Anonymous"); // Outputs: User Name: Anonymous

user = { name: "Charlie", age: 25 };
console.log("User Name:", user?.name ?? "Anonymous"); // Outputs: User Name: Charlie

// 16. Looping with Object Entries
const entries = Object.entries(person);
for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}

// 17. Looping with Object Keys and Values
const keys = Object.keys(person);
const values = Object.values(person);

console.log("Keys:", keys);
console.log("Values:", values);
