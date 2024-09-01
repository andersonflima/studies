// SOLID principles in JavaScript

// S - Single Responsibility Principle
class ReportGenerator {
    generate(data) {
        console.log("Generating report");
    }
}

class ReportPrinter {
    print(report) {
        console.log("Printing report");
    }
}

// O - Open/Closed Principle
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
        return Math.PI * (this.radius ** 2);
    }
}

// L - Liskov Substitution Principle
function calculateArea(shape) {
    return shape.area();
}

// I - Interface Segregation Principle
class Printer {
    print(document) {
        console.log("Printing document");
    }
}

class Scanner {
    scan(document) {
        console.log("Scanning document");
    }
}

class MultiFunctionPrinter extends Printer {
    scan(document) {
        console.log("Scanning document");
    }
}

// D - Dependency Inversion Principle
class BackendDeveloper {
    develop() {
        return "Writing Node.js code";
    }
}

class FrontendDeveloper {
    develop() {
        return "Writing JavaScript code";
    }
}

class Project {
    constructor() {
        this.backend = new BackendDeveloper();
        this.frontend = new FrontendDeveloper();
    }

    develop() {
        return [this.backend.develop(), this.frontend.develop()];
    }
}