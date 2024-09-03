// Loops, Conditions, and Object (Dictionary) Manipulation in Node.js

// 1. For Loop
for (let i = 0; i < 5; i++) {
  console.log(`For loop iteration ${i}`);
}

// 2. While Loop
let count = 0;
while (count < 5) {
  console.log(`While loop iteration ${count}`);
  count++;
}

// 3. Do-While Loop
let counter = 0;
do {
  console.log(`Do-While loop iteration ${counter}`);
  counter++;
} while (counter < 5);

// 4. If/Else Condition
let num = 10;
if (num > 5) {
  console.log("Number is greater than 5");
} else if (num === 5) {
  console.log("Number is exactly 5");
} else {
  console.log("Number is less than 5");
}

// 5. Switch Case
const day = "Monday";
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
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));

// 7. Arrow Functions (ES6+)
const add = (a, b) => a + b;
console.log("Sum:", add(5, 10));

// 8. Array Manipulation
let myArray = [1, 2, 3];
myArray.push(4); // Add an element
myArray.splice(myArray.indexOf(2), 1); // Remove an element
console.log("Array after manipulation:", myArray);

// Array Iteration with forEach
myArray.forEach((item, index) => {
  console.log(`Item at index ${index}: ${item}`);
});

// 9. Object (Dictionary) Manipulation
let person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// Accessing values
console.log("Name:", person.name);

// Adding a new key-value pair
person.email = "alice@example.com";

// Modifying an existing value
person.age = 31;

// Removing a key-value pair
delete person.city;

console.log("Updated person object:", person);

// Iterating over Object Keys
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}

// 10. Nested Objects and Arrays
let complexPerson = {
  name: "Bob",
  age: 40,
  address: {
    street: "123 Main St",
    city: "Los Angeles",
  },
  hobbies: ["reading", "cycling", "hiking"],
};

// Accessing nested properties
console.log("City:", complexPerson.address.city);

// Adding a new hobby
complexPerson.hobbies.push("painting");

// Iterating over nested arrays
complexPerson.hobbies.forEach((hobby) => {
  console.log("Hobby:", hobby);
});
