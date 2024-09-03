// Advanced Node.js Examples

const fetch = require("node-fetch");

// 1. Async/Await with Promises
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Example usage:
fetchData();

// 2. Using Promises
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(2000).then(() => console.log("Executed after 2 seconds"));

// 3. Chaining Promises
function fetchUserData(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
      console.log("User Data:", user);
      return user;
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
}

// Example usage:
fetchUserData(1);

// 4. Error Handling in Async/Await
async function fetchWithErrorHandling() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/invalid-url",
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Caught an error:", error.message);
  }
}

// Example usage:
fetchWithErrorHandling();

// 5. Parallel Async Operations with Promise.all
async function fetchMultipleData() {
  try {
    const [posts, users] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json(),
      ),
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json(),
      ),
    ]);
    console.log("Posts:", posts);
    console.log("Users:", users);
  } catch (error) {
    console.error("Error fetching multiple data:", error);
  }
}

// Example usage:
fetchMultipleData();

// 6. Using Async Generators
async function* asyncGenerator() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  for (const post of posts) {
    yield post;
  }
}

async function consumeAsyncGenerator() {
  const generator = asyncGenerator();
  for await (const post of generator) {
    console.log("Post:", post);
  }
}

// Example usage:
consumeAsyncGenerator();

// 7. Working with Streams
const { createReadStream } = require("fs");
const { pipeline } = require("stream");
const { promisify } = require("util");

const pipelineAsync = promisify(pipeline);

async function streamFile() {
  const stream = createReadStream("example.txt", { encoding: "utf8" });
  stream.on("data", (chunk) => console.log("Chunk:", chunk));
  stream.on("end", () => console.log("Finished reading file."));
}

// Example usage:
streamFile();

// 8. Using Event Emitters
const { EventEmitter } = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("event", () => {
  console.log("An event occurred!");
});

// Example usage:
myEmitter.emit("event");

