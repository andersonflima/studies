// Exception Handling in JavaScript

function divide(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Invalid input type');
        }
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        console.log('Result:', a / b);
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        console.log('Execution completed.');
    }
}

divide(10, 2);
divide(10, 0);
divide(10, 'a');
