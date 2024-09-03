// Basic JavaScript Examples

// 1. Hello World in Node.js
console.log("Hello, World!");

// 2. Variables and Data Types
let integer = 10;
let float = 3.14;
let string = "Hello, JavaScript!";
let boolean = true;
let array = [1, 2, 3, 4, 5];
let object = { name: "Alice", age: 30, city: "New York" };

// 3. Basic Arithmetic Operations
let sum = integer + 5;
let difference = integer - 2;
let product = integer * 2;
let division = integer / 2;
let modulus = integer % 3;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Division:", division);
console.log("Modulus:", modulus);

// 4. String Concatenation
let greeting = string + " How are you?";
console.log(greeting);

// 5. Array Manipulation
array.push(6); // Add an element
array.splice(2, 1); // Remove an element
console.log("Array after manipulation:", array);

// 6. Object Manipulation
object.email = "alice@example.com"; // Add a new key-value pair
object.age = 31; // Modify an existing value
delete object.city; // Remove a key-value pair

console.log("Object after manipulation:", object);

// 7. Control Structures: If-Else
if (integer > 5) {
  console.log("Integer is greater than 5");
} else {
  console.log("Integer is 5 or less");
}

// 8. Loops: For Loop
for (let i = 0; i < array.length; i++) {
  console.log(`Array element at index ${i}: ${array[i]}`);
}

// 9. Functions
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Bob"));

// 10. Arrow Functions (ES6+)
const add = (a, b) => a + b;
console.log("Sum using arrow function:", add(5, 10));

// 11. Higher-Order Functions: Map, Filter, Reduce
let squaredArray = array.map((x) => x ** 2);
console.log("Squared Array:", squaredArray);

let evenNumbers = array.filter((x) => x % 2 === 0);
console.log("Even Numbers:", evenNumbers);

let arraySum = array.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of Array Elements:", arraySum);

// 12. Working with Promises
const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise resolved!");
  } else {
    reject("Promise rejected.");
  }
});

promise
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

// 13. Asynchronous Functions (Async/Await)
async function fetchData() {
  try {
    let data = await promise;
    console.log("Data:", data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();

