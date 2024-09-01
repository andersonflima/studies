// Exception Handling in TypeScript

function divide(a: number, b: number): number | void {
    try {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        console.log('Execution completed.');
    }
}

console.log(divide(10, 2));
console.log(divide(10, 0));
