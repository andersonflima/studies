// Advanced Data Manipulation in TypeScript

// Map, Filter, Reduce
const numbers: number[] = [1, 2, 3, 4, 5];
const squared: number[] = numbers.map(x => x ** 2);
const evenNumbers: number[] = numbers.filter(x => x % 2 === 0);
const product: number = numbers.reduce((x, y) => x * y, 1);

console.log('Squared:', squared);
console.log('Even numbers:', evenNumbers);
console.log('Product:', product);

// Destructuring and Spread Operator
const [a, b, ...rest] = numbers;
console.log('a:', a, 'b:', b, 'rest:', rest);

const extendedNumbers: number[] = [0, ...numbers, 6];
console.log('Extended numbers:', extendedNumbers);
