// SOLID principles in JavaScript

// S - Single Responsibility Principle (SRP)
class ReportGenerator {
  generate(data) {
    console.log("Generating report with data:", data);
  }
}

class ReportPrinter {
  print(report) {
    console.log("Printing report:", report);
  }
}

// Example usage:
const generator = new ReportGenerator();
const report = generator.generate({ title: "Annual Report" });
const printer = new ReportPrinter();
printer.print(report);

// O - Open/Closed Principle (OCP)
class Shape {
  area() {
    throw new Error("Subclasses must implement this method");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

// Example usage:
const shapes = [new Rectangle(10, 20), new Circle(5)];
shapes.forEach((shape) => console.log("Area:", shape.area()));

// L - Liskov Substitution Principle (LSP)
function calculateArea(shape) {
  if (!(shape instanceof Shape)) {
    throw new Error("Invalid shape");
  }
  return shape.area();
}

// Example usage:
try {
  const circle = new Circle(7);
  console.log("Area of circle:", calculateArea(circle));
  const invalidShape = { area: () => 100 };
  console.log("Area of invalid shape:", calculateArea(invalidShape)); // This will throw an error
} catch (error) {
  console.error(error.message);
}

// I - Interface Segregation Principle (ISP)
class Printer {
  print(document) {
    console.log("Printing document:", document);
  }
}

class Scanner {
  scan(document) {
    console.log("Scanning document:", document);
  }
}

class MultiFunctionPrinter extends Printer {
  scan(document) {
    console.log("Scanning document:", document);
  }
}

// Example usage:
const multiPrinter = new MultiFunctionPrinter();
multiPrinter.print("Document 1");
multiPrinter.scan("Document 1");

// D - Dependency Inversion Principle (DIP)
class Developer {
  develop() {
    throw new Error("Method 'develop()' must be implemented");
  }
}

class BackendDeveloper extends Developer {
  develop() {
    return "Writing Node.js code";
  }
}

class FrontendDeveloper extends Developer {
  develop() {
    return "Writing JavaScript code";
  }
}

class Project {
  constructor(developers) {
    this.developers = developers;
  }

  develop() {
    return this.developers.map((dev) => dev.develop());
  }
}

// Example usage:
const project = new Project([new BackendDeveloper(), new FrontendDeveloper()]);
console.log("Project development:", project.develop().join(", "));

