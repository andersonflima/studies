// File Handling in TypeScript (Node.js environment)

import * as fs from 'fs';

// Writing to a file
fs.writeFileSync('example.txt', 'Hello, world!\n');

// Reading from a file
const content: string = fs.readFileSync('example.txt', 'utf-8');
console.log(content);

// Working with CSV files
import { createObjectCsvWriter } from 'csv-writer';

const writer = createObjectCsvWriter({
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

import * as csv from 'csv-parser';
fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (row: any) => {
        console.log(row);
    });
