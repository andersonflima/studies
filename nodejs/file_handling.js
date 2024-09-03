// File Handling in Node.js

const fs = require("fs");
const path = require("path");
const csvWriter = require("csv-writer").createObjectCsvWriter;
const csv = require("csv-parser");

// 1. Writing to a file
fs.writeFileSync("example.txt", "Hello, world!\n");

// 2. Reading from a file
const content = fs.readFileSync("example.txt", "utf-8");
console.log("File content:", content);

// 3. Appending to a file
fs.appendFileSync("example.txt", "Appending some text.\n");
const updatedContent = fs.readFileSync("example.txt", "utf-8");
console.log("Updated file content:", updatedContent);

// 4. Deleting a file
fs.unlinkSync("example.txt");
console.log("File deleted.");

// 5. Working with Directories
// Creating a directory
const dirPath = path.join(__dirname, "example_dir");
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
  console.log("Directory created:", dirPath);
}

// Reading contents of a directory
const files = fs.readdirSync(__dirname);
console.log("Directory contents:", files);

// Deleting a directory
if (fs.existsSync(dirPath)) {
  fs.rmdirSync(dirPath);
  console.log("Directory deleted:", dirPath);
}

// 6. Working with CSV files
const csvPath = "data.csv";

// Writing to a CSV file
const writer = csvWriter({
  path: csvPath,
  header: [
    { id: "name", title: "Name" },
    { id: "age", title: "Age" },
    { id: "city", title: "City" },
  ],
});

writer
  .writeRecords([
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 25, city: "Los Angeles" },
  ])
  .then(() => console.log("CSV file written successfully"));

// Reading from a CSV file
fs.createReadStream(csvPath)
  .pipe(csv())
  .on("data", (row) => {
    console.log("CSV Row:", row);
  })
  .on("end", () => {
    console.log("CSV file reading completed.");
  });

// 7. File Copying
const srcFile = "source.txt";
const destFile = "destination.txt";
fs.writeFileSync(srcFile, "This is the source file.");
fs.copyFileSync(srcFile, destFile);
console.log("File copied from source to destination.");

// 8. Watching a file for changes
fs.watchFile(srcFile, (curr, prev) => {
  console.log(`${srcFile} file changed`);
});

// Clean up the created files
setTimeout(() => {
  fs.unlinkSync(srcFile);
  fs.unlinkSync(destFile);
  fs.unlinkSync(csvPath);
  console.log("Cleanup: files removed.");
}, 5000);
