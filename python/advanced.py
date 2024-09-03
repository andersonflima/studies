# advanced.py

# 1. Decorators
# Decorators are a way to modify or enhance functions or methods without changing their actual code.


from functools import reduce
from contextlib import contextmanager


def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Something is happening before the function is called.")
        result = func(*args, **kwargs)
        print("Something is happening after the function is called.")
        return result

    return wrapper


# Using the decorator
@my_decorator
def say_hello():
    print("Hello!")


say_hello()


# Advanced usage: Decorators with arguments
def repeat_decorator(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result

        return wrapper

    return decorator


@repeat_decorator(times=3)
def greet(name):
    print(f"Hello, {name}!")


greet("Alice")

# 2. Generators
# Generators are a way to create iterators in Python with less memory consumption.


def fibonacci(n):
    """Generates Fibonacci numbers up to n"""
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b


# Using the generator
for number in fibonacci(10):
    print(number)

# Advanced: Generator Expressions
# Similar to list comprehensions, but returns a generator instead of a list
squared_numbers = (x * x for x in range(10))
for num in squared_numbers:
    print(num)

# 3. Context Managers
# Context Managers are used for resource management like file handling, ensuring resources are cleaned up when not needed.


# Example of a context manager using a class
class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode

    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file

    def __exit__(self, exc_type, exc_value, traceback):
        self.file.close()


# Using the context manager
with FileManager("test.txt", "w") as f:
    f.write("Hello, World!")

# Advanced: Context Manager with 'contextlib'


@contextmanager
def open_file(name, mode):
    try:
        f = open(name, mode)
        yield f
    finally:
        f.close()


# Using the advanced context manager
with open_file("test.txt", "a") as f:
    f.write("\nThis is an additional line.")

# 4. Lambda Functions and Higher-Order Functions
# Lambda functions are small anonymous functions defined with lambda keyword.

# Basic usage


def square(x): return x * x


print(square(5))  # Output: 25

# Lambda with map, filter, reduce

numbers = [1, 2, 3, 4, 5]

# Using map with a lambda function
squared = list(map(lambda x: x * x, numbers))  # [1, 4, 9, 16, 25]

# Using filter with a lambda function
evens = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4]

# Using reduce with a lambda function
sum_numbers = reduce(lambda x, y: x + y, numbers)  # 15

# 5. Advanced Class Techniques
# Using properties, class methods, and static methods


class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value

    @property
    def area(self):
        import math

        return math.pi * (self._radius**2)

    @classmethod
    def from_diameter(cls, diameter):
        return cls(diameter / 2)

    @staticmethod
    def is_valid_radius(value):
        return value >= 0


# Using the advanced class
c = Circle(5)
print(c.radius)  # 5
print(c.area)  # 78.53981633974483

c.radius = 10
print(c.area)  # 314.1592653589793

c2 = Circle.from_diameter(20)
print(c2.radius)  # 10

# Checking valid radius
print(Circle.is_valid_radius(-5))  # False

# 6. Metaprogramming
# Python allows you to manipulate classes and objects dynamically.


# Example: Creating a class dynamically
def create_class(name):
    if name == "Person":

        class Person:
            def __init__(self, name, age):
                self.name = name
                self.age = age

            def greet(self):
                return f"Hello, my name is {self.name} and I am {self.age} years old."

        return Person


PersonClass = create_class("Person")
p = PersonClass("Alice", 30)
print(p.greet())  # Output: Hello, my name is Alice and I am 30 years old.

# 7. Error Handling and Custom Exceptions
# Python's try-except blocks allow you to handle exceptions gracefully.


class NegativeRadiusError(Exception):
    """Custom exception for negative radius"""

    pass


def calculate_circle_area(radius):
    if radius < 0:
        raise NegativeRadiusError("Radius cannot be negative.")
    import math

    return math.pi * radius * radius


try:
    area = calculate_circle_area(-5)
except NegativeRadiusError as e:
    print(e)
