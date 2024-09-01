// Loops, Conditions, and Object (Dictionary) Manipulation in Node.js

// For loop
for (let i = 0; i < 5; i++) {
  console.log(`For loop iteration ${i}`);
}

// While loop
let count = 0;
while (count < 5) {
  console.log(`While loop iteration ${count}`);
  count++;
}

// If/Else condition
let num = 10;
if (num > 5) {
  console.log("Number is greater than 5");
} else {
  console.log("Number is 5 or less");
}

// Function definition and call
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));

// Array manipulation
let myArray = [1, 2, 3];
myArray.push(4);
myArray.splice(myArray.indexOf(2), 1);
console.log(myArray);

// Object (Dictionary) manipulation
let person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// Accessing values
console.log(person.name);

// Adding a new key-value pair
person.email = "alice@example.com";

// Modifying an existing value
person.age = 31;

// Removing a key-value pair
delete person.city;

console.log(person);
