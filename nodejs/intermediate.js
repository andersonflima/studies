// Intermediate: Enhanced HTTP server
const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Serve a basic HTML page
  if (pathname === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello, World!</h1><p>Welcome to the Node.js HTTP server.</p>");
  }
  // Serve a static file
  else if (pathname === "/file") {
    const filePath = path.join(__dirname, "example.txt");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Error reading file.");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end(data);
      }
    });
  }
  // Handle a query parameter
  else if (pathname === "/query") {
    const name = parsedUrl.query.name || "Guest";
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(`Hello, ${name}!`);
  }
  // Handle a POST request
  else if (pathname === "/post" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "Data received", data: body }));
    });
  }
  // Handle 404
  else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

