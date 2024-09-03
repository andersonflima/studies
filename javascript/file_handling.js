// File Handling in JavaScript (Browser and Node.js)

// 1. File Handling in the Browser
// Writing to a file is not directly possible in the browser environment,
// but you can create and download a file using the following function:

function download(content, fileName, contentType) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

// Example usage:
download("Hello, world!\n", "example.txt", "text/plain");

// Reading from a file in the browser can be done using the File API,
// which requires user interaction to select the file.
// This is not covered here, but here is a basic outline:

// document.getElementById('fileInput').addEventListener('change', function(event) {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = function(e) {
//         console.log(e.target.result);
//     };
//     reader.readAsText(file);
// });

// 2. File Handling in Node.js
// Node.js provides the `fs` module to work with the file system.

const fs = require("fs");

// Writing to a file
fs.writeFile("example.txt", "Hello, world!\n", (err) => {
  if (err) throw err;
  console.log("File has been written");
});

// Reading from a file
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File content:", data);
});

// Appending to a file
fs.appendFile("example.txt", "Appending a new line.\n", (err) => {
  if (err) throw err;
  console.log("Data has been appended to file");
});

// Deleting a file
fs.unlink("example.txt", (err) => {
  if (err) throw err;
  console.log("File has been deleted");
});

// 3. Working with JSON Files (Node.js)
const data = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// Writing JSON to a file
fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
  if (err) throw err;
  console.log("JSON data has been written to file");
});

// Reading JSON from a file
fs.readFile("data.json", "utf8", (err, jsonData) => {
  if (err) throw err;
  const parsedData = JSON.parse(jsonData);
  console.log("JSON data:", parsedData);
});
