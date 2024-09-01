// Loops, Conditions, and Object (Dictionary) Manipulation in TypeScript

// For loop
for (let i: number = 0; i < 5; i++) {
    console.log(`For loop iteration ${i}`);
}

// While loop
let count: number = 0;
while (count < 5) {
    console.log(`While loop iteration ${count}`);
    count++;
}

// If/Else condition
let num: number = 10;
if (num > 5) {
    console.log("Number is greater than 5");
} else {
    console.log("Number is 5 or less");
}

// Function definition and call
function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Alice"));

// Array manipulation
let myArray: number[] = [1, 2, 3];
myArray.push(4);
myArray.splice(myArray.indexOf(2), 1);
console.log(myArray);

// Object (Dictionary) manipulation
interface Person {
    name: string;
    age: number;
    city?: string;
    email?: string;
}

let person: Person = {
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
