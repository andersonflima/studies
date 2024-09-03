// Object and JSON Manipulation in JavaScript

// 1. Basic Object Manipulation
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

// 2. Nested Object Manipulation
let complexPerson = {
  name: "Bob",
  age: 40,
  address: {
    street: "123 Main St",
    city: "Los Angeles",
    zip: "90001",
  },
  hobbies: ["reading", "cycling", "hiking"],
};

// Accessing nested values
console.log("Street:", complexPerson.address.street);
console.log("First hobby:", complexPerson.hobbies[0]);

// Modifying nested values
complexPerson.address.zip = "90002";
complexPerson.hobbies.push("painting");

console.log("Updated complex person object:", complexPerson);

// 3. Convert Object to JSON
let personJson = JSON.stringify(person, null, 2); // Pretty print JSON
console.log("Person JSON:", personJson);

// 4. Convert JSON to Object
let personObj = JSON.parse(personJson);
console.log("Parsed JSON object:", personObj);

// 5. JSON Manipulation with Arrays
let people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

// Convert array of objects to JSON
let peopleJson = JSON.stringify(people, null, 2);
console.log("People JSON:", peopleJson);

// Convert JSON back to array of objects
let parsedPeople = JSON.parse(peopleJson);
console.log("Parsed people array:", parsedPeople);

// 6. Handling Deeply Nested JSON
let nestedData = {
  user: {
    id: 1,
    info: {
      name: "Alice",
      contacts: {
        email: "alice@example.com",
        phone: "123-456-7890",
      },
    },
  },
};

// Accessing deeply nested values
console.log("User Email:", nestedData.user.info.contacts.email);

// Modifying deeply nested values
nestedData.user.info.contacts.phone = "098-765-4321";

console.log("Updated nested data:", nestedData);

// 7. Merging Objects
let additionalInfo = { occupation: "Engineer", country: "USA" };
let mergedPerson = { ...person, ...additionalInfo };
console.log("Merged person object:", mergedPerson);

// 8. Cloning Objects
let clonedPerson = { ...person };
clonedPerson.name = "Eve"; // Modifying clone does not affect original
console.log("Original person object:", person);
console.log("Cloned and modified person object:", clonedPerson);

// 9. Dealing with Undefined Properties
console.log("Middle Name:", person.middleName || "N/A"); // Outputs "N/A" if middleName is undefined
