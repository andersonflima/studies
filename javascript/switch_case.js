// Switch Case in JavaScript

// 1. Basic Switch-Case Example
function switchCaseExample(value) {
  switch (value) {
    case 1:
      return "Value is 1";
    case 2:
      return "Value is 2";
    case 3:
      return "Value is 3";
    default:
      return "Value is something else";
  }
}

console.log(switchCaseExample(1)); // Outputs: Value is 1
console.log(switchCaseExample(4)); // Outputs: Value is something else

// 2. Handling Multiple Cases
function switchCaseMultiple(value) {
  switch (value) {
    case "a":
    case "A":
      return "Value is A";
    case "b":
    case "B":
      return "Value is B";
    default:
      return "Value is not A or B";
  }
}

console.log(switchCaseMultiple("A")); // Outputs: Value is A
console.log(switchCaseMultiple("b")); // Outputs: Value is B
console.log(switchCaseMultiple("c")); // Outputs: Value is not A or B

// 3. Switch-Case with Fall-Through Behavior
function switchCaseFallThrough(value) {
  let result = "";
  switch (value) {
    case 1:
      result += "First ";
    case 2:
      result += "Second ";
    case 3:
      result += "Third ";
      break;
    default:
      result += "Unknown ";
  }
  return result.trim();
}

console.log(switchCaseFallThrough(1)); // Outputs: First Second Third
console.log(switchCaseFallThrough(2)); // Outputs: Second Third
console.log(switchCaseFallThrough(4)); // Outputs: Unknown

// 4. Using Switch-Case with Functions
function operation(value) {
  switch (value) {
    case "add":
      return (a, b) => a + b;
    case "subtract":
      return (a, b) => a - b;
    case "multiply":
      return (a, b) => a * b;
    case "divide":
      return (a, b) => a / b;
    default:
      return () => NaN;
  }
}

const add = operation("add");
console.log(add(10, 5)); // Outputs: 15

const multiply = operation("multiply");
console.log(multiply(10, 5)); // Outputs: 50

const unknown = operation("modulus");
console.log(unknown(10, 5)); // Outputs: NaN

// 5. Switch-Case with Objects (ES6+ Alternative)
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

function performOperation(operation, a, b) {
  const func = operations[operation] || (() => NaN);
  return func(a, b);
}

console.log(performOperation("add", 10, 5)); // Outputs: 15
console.log(performOperation("divide", 10, 2)); // Outputs: 5
console.log(performOperation("modulus", 10, 2)); // Outputs: NaN
