// Unit Testing in TypeScript with Mocha and Chai

// Install mocha and chai with `npm install mocha chai @types/mocha @types/chai`

import { expect } from 'chai';

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

describe('Math functions', () => {
    it('should add two numbers', () => {
        expect(add(1, 2)).to.equal(3);
        expect(add(-1, 1)).to.equal(0);
    });

    it('should subtract two numbers', () => {
        expect(subtract(2, 1)).to.equal(1);
        expect(subtract(2, 2)).to.equal(0);
    });
});

// Run the tests with `npx mocha`
