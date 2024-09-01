// Object and JSON Manipulation in JavaScript

// Object Manipulation
let person = {
    name: "Alice",
    age: 30,
    city: "New York"
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

// Convert object to JSON
let personJson = JSON.stringify(person);
console.log(personJson);

// Convert JSON to object
let personObj = JSON.parse(personJson);
console.log(personObj);
