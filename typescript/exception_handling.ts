// Exception Handling in TypeScript

// 1. Basic Exception Handling
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log("Result:", divide(10, 2)); // Outputs: Result: 5
  console.log("Result:", divide(10, 0)); // This will throw an error
} catch (error) {
  console.error("Error:", error.message); // Outputs: Error: Cannot divide by zero
} finally {
  console.log("Execution completed.");
}

// 2. Custom Error Classes
class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomError";
  }
}

class NegativeValueError extends CustomError {
  constructor(value: number) {
    super(`Negative value is not allowed: ${value}`);
  }
}

function checkPositive(value: number): number {
  if (value < 0) {
    throw new NegativeValueError(value);
  }
  return value;
}

try {
  console.log(checkPositive(10)); // Outputs: 10
  console.log(checkPositive(-5)); // This will throw NegativeValueError
} catch (error) {
  if (error instanceof NegativeValueError) {
    console.error("Caught NegativeValueError:", error.message);
  } else {
    console.error("Caught Error:", error.message);
  }
}

// 3. Multiple Catch Blocks via Type Guards
function parseJSON(jsonString: string): any {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error("JSON Syntax Error:", error.message);
    } else {
      console.error("Unexpected Error:", error.message);
    }
    return null;
  }
}

console.log(parseJSON('{"name": "Alice", "age": 30}')); // Outputs: { name: 'Alice', age: 30 }
console.log(parseJSON('{"name": "Alice", "age": 30')); // Outputs JSON Syntax Error

// 4. Propagating Errors
function readData(data: any): any {
  if (!data) {
    throw new Error("No data provided");
  }
  return data;
}

function processData() {
  try {
    const data = readData(null); // This will throw an error
    console.log("Processing data:", data);
  } catch (error) {
    console.error("Error in processData:", error.message);
    throw error; // Propagate the error
  }
}

try {
  processData(); // Will catch the propagated error
} catch (error) {
  console.error("Caught propagated error:", error.message);
}

// 5. Async/Await with Error Handling
async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error.message);
    throw error; // Optionally rethrow the error
  }
}

async function main() {
  try {
    const data = await fetchData(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Caught error in main:", error.message);
  }
}

main();

// 6. Handling Promises with .then and .catch
function fetchDataWithPromise(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

fetchDataWithPromise("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log("Fetched data with promise:", data))
  .catch((error) => console.error("Promise error:", error.message));
