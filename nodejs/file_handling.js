// File Handling in Node.js

const fs = require('fs');

// Writing to a file
fs.writeFileSync('example.txt', 'Hello, world!\n');

// Reading from a file
const content = fs.readFileSync('example.txt', 'utf-8');
console.log(content);

// Working with CSV files
const csvWriter = require('csv-writer').createObjectCsvWriter;

const writer = csvWriter({
    path: 'data.csv',
    header: [
        {id: 'name', title: 'Name'},
        {id: 'age', title: 'Age'},
        {id: 'city', title: 'City'}
    ]
});

writer.writeRecords([
    {name: 'Alice', age: 30, city: 'New York'},
    {name: 'Bob', age: 25, city: 'Los Angeles'}
]).then(() => console.log('CSV file written successfully'));

const csv = require('csv-parser');
fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (row) => {
        console.log(row);
    });
