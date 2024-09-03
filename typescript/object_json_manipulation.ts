// Object and JSON Manipulation in TypeScript

// 1. Basic Object Manipulation
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

// Adding a new key-value pair
person.email = "alice@example.com";
console.log("Updated Person:", person);

// Modifying an existing value
person.age = 31;
console.log("Modified Age:", person.age);

// Removing a key-value pair
delete person.city;
console.log("Person after deletion:", person);

// 2. Nested Object Manipulation
let complexPerson: Person & { address: { street: string; city: string } } = {
  name: "Bob",
  age: 40,
  address: {
    street: "123 Main St",
    city: "Los Angeles",
  },
};

// Accessing nested values
console.log("Street:", complexPerson.address.street);

// Modifying nested values
complexPerson.address.city = "San Francisco";
console.log("Updated Address:", complexPerson.address);

// 3. Convert Object to JSON
let personJson: string = JSON.stringify(person, null, 2); // Pretty print JSON
console.log("Person JSON:", personJson);

// 4. Convert JSON to Object
let personObj: Person = JSON.parse(personJson);
console.log("Parsed JSON Object:", personObj);

// 5. Working with Arrays of Objects
interface Employee {
  id: number;
  name: string;
  department: string;
}

let employees: Employee[] = [
  { id: 1, name: "Alice", department: "HR" },
  { id: 2, name: "Bob", department: "Engineering" },
  { id: 3, name: "Charlie", department: "Finance" },
];

// Convert array of objects to JSON
let employeesJson: string = JSON.stringify(employees, null, 2);
console.log("Employees JSON:", employeesJson);

// Convert JSON back to array of objects
let parsedEmployees: Employee[] = JSON.parse(employeesJson);
console.log("Parsed Employees Array:", parsedEmployees);

// 6. Merging Objects
let additionalInfo = { phone: "123-456-7890", country: "USA" };
let mergedPerson = { ...person, ...additionalInfo };
console.log("Merged Person Object:", mergedPerson);

// 7. Cloning and Modifying Objects
let clonedPerson: Person = { ...person };
clonedPerson.name = "Eve"; // Modifying clone does not affect original
console.log("Original Person Object:", person);
console.log("Cloned and Modified Person Object:", clonedPerson);

// 8. Handling Optional Properties and Nullish Coalescing
interface User {
  id: number;
  name: string;
  preferences?: {
    theme?: string;
  };
}

let user: User = {
  id: 1,
  name: "Alice",
  preferences: {
    theme: "dark",
  },
};

let theme: string = user.preferences?.theme ?? "default";
console.log("User theme:", theme); // Outputs: dark

user.preferences = undefined;
theme = user.preferences?.theme ?? "default";
console.log("User theme with undefined preferences:", theme); // Outputs: default

// 9. Working with Deeply Nested Objects
interface Product {
  id: number;
  name: string;
  details?: {
    price?: number;
    manufacturer?: {
      name: string;
      address?: string;
    };
  };
}

let product: Product = {
  id: 101,
  name: "Laptop",
  details: {
    price: 999.99,
    manufacturer: {
      name: "TechCorp",
    },
  },
};

// Accessing deeply nested properties with optional chaining
let manufacturerName =
  product.details?.manufacturer?.name ?? "Unknown Manufacturer";
console.log("Manufacturer Name:", manufacturerName);

// 10. Array Manipulation with Objects
let sortedEmployees = [...employees].sort((a, b) =>
  a.name.localeCompare(b.name),
);
console.log("Sorted Employees by Name:", sortedEmployees);

let filteredEmployees = employees.filter(
  (employee) => employee.department === "Engineering",
);
console.log("Filtered Employees (Engineering):", filteredEmployees);

let employeeNames = employees.map((employee) => employee.name);
console.log("Employee Names:", employeeNames);

let totalEmployeeIds = employees.reduce(
  (sum, employee) => sum + employee.id,
  0,
);
console.log("Total Employee IDs:", totalEmployeeIds);
