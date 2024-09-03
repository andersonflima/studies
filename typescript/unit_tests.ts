import { expect } from "chai";

// Basic Math Functions
function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Unit Tests
describe("Math Functions", () => {
  // Testing the add function
  it("should correctly add two numbers", () => {
    expect(add(1, 2)).to.equal(3);
    expect(add(-1, 1)).to.equal(0);
    expect(add(0, 0)).to.equal(0);
  });

  // Testing the subtract function
  it("should correctly subtract two numbers", () => {
    expect(subtract(2, 1)).to.equal(1);
    expect(subtract(2, 2)).to.equal(0);
    expect(subtract(0, 5)).to.equal(-5);
  });

  // Testing the multiply function
  it("should correctly multiply two numbers", () => {
    expect(multiply(2, 3)).to.equal(6);
    expect(multiply(-2, 3)).to.equal(-6);
    expect(multiply(0, 5)).to.equal(0);
  });

  // Testing the divide function
  it("should correctly divide two numbers", () => {
    expect(divide(6, 3)).to.equal(2);
    expect(divide(10, 2)).to.equal(5);
  });

  // Testing division by zero
  it("should throw an error when dividing by zero", () => {
    expect(() => divide(6, 0)).to.throw("Cannot divide by zero");
  });
});

// 1. Testing Asynchronous Functions
function asyncAdd(a: number, b: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 100);
  });
}

describe("Asynchronous Functions", () => {
  // Testing the asyncAdd function
  it("should correctly add two numbers asynchronously", async () => {
    const result = await asyncAdd(3, 4);
    expect(result).to.equal(7);
  });
});

// 2. Testing Objects and Arrays
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

const user: User = {
  name: "Alice",
  age: 30,
  isAdmin: false,
};

describe("Object and Array Tests", () => {
  // Testing object properties
  it("should have correct user properties", () => {
    expect(user).to.have.property("name", "Alice");
    expect(user).to.have.property("age", 30);
    expect(user).to.have.property("isAdmin", false);
  });

  // Testing array contents
  const numbers = [1, 2, 3, 4, 5];
  it("should have correct array contents", () => {
    expect(numbers).to.include(3);
    expect(numbers).to.have.lengthOf(5);
  });
});

// 3. Parameterized Tests using Mocha's `forEach`
const testCases = [
  { a: 2, b: 3, expected: 5 },
  { a: -1, b: -1, expected: -2 },
  { a: 0, b: 0, expected: 0 },
];

describe("Parameterized Tests", () => {
  testCases.forEach(({ a, b, expected }) => {
    it(`should correctly add ${a} and ${b} to get ${expected}`, () => {
      expect(add(a, b)).to.equal(expected);
    });
  });
});

// 4. Stubbing and Mocking (Example with Sinon)
// Assuming Sinon is installed: npm install sinon
import sinon from "sinon";

describe("Stubbing and Mocking", () => {
  it("should stub a method", () => {
    const user = {
      getName: () => "Alice",
    };
    const stub = sinon.stub(user, "getName").returns("Bob");

    expect(user.getName()).to.equal("Bob");
    expect(stub.calledOnce).to.be.true;

    stub.restore();
  });
});
