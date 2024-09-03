// Exception Handling in Node.js

// 1. Basic Exception Handling
function divide(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("Invalid input type");
    }
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    console.log("Result:", a / b);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("Execution completed.");
  }
}

// Example usage:
divide(10, 2); // Outputs: Result: 5
divide(10, 0); // Outputs: Error: Cannot divide by zero
divide(10, "a"); // Outputs: Error: Invalid input type

// 2. Custom Error Classes
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class NegativeValueError extends CustomError {
  constructor(value) {
    super(`Negative value is not allowed: ${value}`);
  }
}

function checkPositive(value) {
  if (value < 0) {
    throw new NegativeValueError(value);
  }
  return value;
}

// Example usage:
try {
  console.log(checkPositive(10)); // Outputs: 10
  console.log(checkPositive(-5)); // Throws and catches NegativeValueError
} catch (error) {
  console.error("Caught error:", error.message);
}

// 3. Multiple Catch Blocks (via instance checks)
function parseJSON(jsonString) {
  try {
    let result = JSON.parse(jsonString);
    console.log("Parsed JSON:", result);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error("JSON Syntax Error:", error.message);
    } else {
      console.error("Unexpected Error:", error.message);
    }
  }
}

// Example usage:
parseJSON('{"name": "Alice", "age": 30}'); // Outputs: Parsed JSON
parseJSON('{"name": "Alice", "age": 30'); // Outputs: JSON Syntax Error

// 4. Propagating Errors
function readData(data) {
  if (!data) {
    throw new Error("No data provided");
  }
  return data;
}

function processData() {
  try {
    let data = readData(null);
    console.log("Processing data:", data);
  } catch (error) {
    console.error("Error in processData:", error.message);
    throw error; // Propagate the error
  }
}

// Example usage:
try {
  processData(); // Throws and catches Error in processData
} catch (error) {
  console.error("Caught propagated error:", error.message);
}

// 5. Using try-catch with Async/Await
async function fetchData(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

// Example usage:
fetchData("https://jsonplaceholder.typicode.com/posts/1"); // Successfully fetches data
fetchData("https://jsonplaceholder.typicode.com/invalid-url"); // Outputs fetch error

// 6. Creating and Handling Promises with Errors
function fetchDataPromise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "valid-url") {
        resolve("Fetched data successfully");
      } else {
        reject(new Error("Invalid URL"));
      }
    }, 1000);
  });
}

// Example usage:
fetchDataPromise("valid-url")
  .then((data) => console.log(data)) // Outputs: Fetched data successfully
  .catch((error) => console.error("Promise error:", error.message)); // Outputs error if URL is invalid
