# SOLID principles in Python

# S - Single Responsibility Principle
class ReportGenerator:
    def generate(self, data):
        print("Generating report")

class ReportPrinter:
    def print(self, report):
        print("Printing report")

# O - Open/Closed Principle
class Shape:
    def area(self) -> float:
        raise NotImplementedError()

class Rectangle(Shape):
    def __init__(self, width: float, height: float):
        self.width = width
        self.height = height

    def area(self) -> float:
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius: float):
        self.radius = radius

    def area(self) -> float:
        return 3.14 * (self.radius ** 2)

# L - Liskov Substitution Principle
def calculate_area(shape: Shape) -> float:
    return shape.area()

# I - Interface Segregation Principle
from abc import ABC, abstractmethod

class Printer(ABC):
    @abstractmethod
    def print(self, document):
        pass

class Scanner(ABC):
    @abstractmethod
    def scan(self, document):
        pass

class MultiFunctionPrinter(Printer, Scanner):
    def print(self, document):
        print("Printing document")

    def scan(self, document):
        print("Scanning document")

# D - Dependency Inversion Principle
class BackendDeveloper:
    def develop(self):
        return "Writing Python code"

class FrontendDeveloper:
    def develop(self):
        return "Writing JavaScript code"

class Project:
    def __init__(self):
        self.backend = BackendDeveloper()
        self.frontend = FrontendDeveloper()

    def develop(self):
        return [self.backend.develop(), self.frontend.develop()]