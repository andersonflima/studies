// Unit Testing in JavaScript with Mocha and Chai

// Install mocha and chai with `npm install mocha chai`

const { expect } = require("chai");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

describe("Math functions", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).to.equal(3);
    expect(add(-1, 1)).to.equal(0);
  });

  it("should subtract two numbers", () => {
    expect(subtract(2, 1)).to.equal(1);
    expect(subtract(2, 2)).to.equal(0);
  });

  it("should multiply two numbers", () => {
    expect(multiply(2, 3)).to.equal(6);
    expect(multiply(-2, 3)).to.equal(-6);
  });

  it("should divide two numbers", () => {
    expect(divide(6, 3)).to.equal(2);
  });

  it("should throw an error when dividing by zero", () => {
    expect(() => divide(6, 0)).to.throw("Cannot divide by zero");
  });
});

// 1. Asynchronous Testing Example
function fetchData(callback) {
  setTimeout(() => {
    callback("data");
  }, 1000);
}

describe("Asynchronous tests", () => {
  it("should fetch data after a delay", (done) => {
    fetchData((data) => {
      expect(data).to.equal("data");
      done();
    });
  });
});

// 2. Testing Object Properties
const user = {
  name: "Alice",
  age: 30,
  isAdmin: false,
};

describe("User object", () => {
  it("should have name, age, and isAdmin properties", () => {
    expect(user).to.have.property("name");
    expect(user).to.have.property("age").that.is.a("number");
    expect(user).to.have.property("isAdmin").that.is.false;
  });
});

// 3. Array Testing
const fruits = ["apple", "banana", "cherry"];

describe("Array tests", () => {
  it("should contain the correct fruits", () => {
    expect(fruits).to.include("banana");
    expect(fruits).to.have.lengthOf(3);
    expect(fruits).to.deep.equal(["apple", "banana", "cherry"]);
  });
});

// Run the tests with `npx mocha`
