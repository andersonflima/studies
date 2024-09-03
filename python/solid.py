# solid.py

# SOLID principles in Python

# S - Single Responsibility Principle
from abc import ABC, abstractmethod


class ReportGenerator:
    """Handles the generation of reports."""

    def generate(self, data):
        print("Generating report")


class ReportPrinter:
    """Handles the printing of reports."""

    def print(self, report):
        print("Printing report")


# Example usage:
report_gen = ReportGenerator()
report = report_gen.generate("Some data")
report_printer = ReportPrinter()
report_printer.print(report)


# O - Open/Closed Principle
class Shape:
    """Abstract base class for shapes."""

    def area(self) -> float:
        raise NotImplementedError()


class Rectangle(Shape):
    """Represents a rectangle, a specific type of Shape."""

    def __init__(self, width: float, height: float):
        self.width = width
        self.height = height

    def area(self) -> float:
        return self.width * self.height


class Circle(Shape):
    """Represents a circle, a specific type of Shape."""

    def __init__(self, radius: float):
        self.radius = radius

    def area(self) -> float:
        return 3.14 * (self.radius**2)


# Extended without modifying existing classes
class Triangle(Shape):
    """Represents a triangle, a new type of Shape."""

    def __init__(self, base: float, height: float):
        self.base = base
        self.height = height

    def area(self) -> float:
        return 0.5 * self.base * self.height


# Example usage:
shapes = [Rectangle(10, 20), Circle(5), Triangle(10, 5)]
for shape in shapes:
    print(f"The area is: {shape.area()}")


# L - Liskov Substitution Principle
def calculate_area(shape: Shape) -> float:
    """Calculate the area of any shape that inherits from Shape."""
    return shape.area()


# Example usage:
rect = Rectangle(10, 20)
circ = Circle(5)
print(f"Rectangle area: {calculate_area(rect)}")
print(f"Circle area: {calculate_area(circ)}")


# I - Interface Segregation Principle


class Printer(ABC):
    """Interface for printer functionality."""

    @abstractmethod
    def print(self, document):
        pass


class Scanner(ABC):
    """Interface for scanner functionality."""

    @abstractmethod
    def scan(self, document):
        pass


class MultiFunctionPrinter(Printer, Scanner):
    """Implements both printer and scanner functionalities."""

    def print(self, document):
        print("Printing document")

    def scan(self, document):
        print("Scanning document")


# Example usage:
mfp = MultiFunctionPrinter()
mfp.print("MyDocument")
mfp.scan("MyDocument")


# D - Dependency Inversion Principle
class Developer(ABC):
    """Abstract base class for developers."""

    @abstractmethod
    def develop(self):
        pass


class BackendDeveloper(Developer):
    def develop(self):
        return "Writing Python code"


class FrontendDeveloper(Developer):
    def develop(self):
        return "Writing JavaScript code"


class Project:
    def __init__(self, developers: list[Developer]):
        self.developers = developers

    def develop(self):
        return [dev.develop() for dev in self.developers]


# Example usage:
backend_dev = BackendDeveloper()
frontend_dev = FrontendDeveloper()
project = Project([backend_dev, frontend_dev])
print(project.develop())
