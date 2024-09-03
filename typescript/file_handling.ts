// File Handling in TypeScript (Node.js environment)

import * as fs from "fs";
import * as path from "path";
import * as csv from "csv-parser";

// 1. Writing to a File
fs.writeFileSync("example.txt", "Hello, world!\n");

// 2. Reading from a File
const content: string = fs.readFileSync("example.txt", "utf-8");
console.log("File content:", content);

// 3. Appending to a File
fs.appendFileSync("example.txt", "Appending some text.\n");
const updatedContent: string = fs.readFileSync("example.txt", "utf-8");
console.log("Updated file content:", updatedContent);

// 4. Deleting a File
fs.unlinkSync("example.txt");
console.log("File deleted.");

// 5. Working with Directories
// Creating a directory
const dirPath: string = path.join(__dirname, "example_dir");
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
  console.log("Directory created:", dirPath);
}

// Reading contents of a directory
const files: string[] = fs.readdirSync(__dirname);
console.log("Directory contents:", files);

// Deleting a directory
if (fs.existsSync(dirPath)) {
  fs.rmdirSync(dirPath);
  console.log("Directory deleted:", dirPath);
}

// 6. Working with CSV Files
const csvPath: string = "data.csv";

// Writing to a CSV file
const csvData: string[][] = [
  ["Name", "Age", "City"],
  ["Alice", "30", "New York"],
  ["Bob", "25", "Los Angeles"],
];

const csvContent: string = csvData.map((row) => row.join(",")).join("\n");
fs.writeFileSync(csvPath, csvContent);
console.log("CSV file written successfully");

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
const srcFile: string = "source.txt";
const destFile: string = "destination.txt";
fs.writeFileSync(srcFile, "This is the source file.");
fs.copyFileSync(srcFile, destFile);
console.log("File copied from source to destination.");

// 8. Watching a File for Changes
fs.watchFile(srcFile, (curr, prev) => {
  console.log(`${srcFile} file changed`);
});

// Clean up the created files after use
setTimeout(() => {
  fs.unlinkSync(srcFile);
  fs.unlinkSync(destFile);
  fs.unlinkSync(csvPath);
  console.log("Cleanup: files removed.");
}, 5000);

// 9. Async/Await File Handling
async function readFileAsync(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function main() {
  try {
    const data = await readFileAsync("example.txt");
    console.log("Async file read content:", data);
  } catch (error) {
    console.error("Error reading file asynchronously:", error.message);
  }
}

main();
