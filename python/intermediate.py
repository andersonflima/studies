# intermediate.py

# 1. Simple Function with Type Hints
from typing import Any, Optional
from typing import List, Tuple, Dict, Union


def greet(name: str) -> str:
    """Returns a greeting message."""
    return f"Hello, {name}!"


print(greet("Alice"))

# 2. More Complex Type Hints
# Python supports type hints for more complex structures like lists, tuples, dictionaries, etc.


# Function with a list of strings as argument
def process_names(names: List[str]) -> List[str]:
    """Converts all names in the list to uppercase."""
    return [name.upper() for name in names]


print(process_names(["Alice", "Bob", "Charlie"]))


# Function with a tuple as an argument
def get_coordinates() -> Tuple[int, int]:
    """Returns a tuple representing coordinates."""
    return (10, 20)


print(get_coordinates())


# Function with a dictionary as an argument and union type hint
def get_student_score(student_data: Dict[str, Union[str, int]]) -> str:
    """Returns a formatted string with the student's name and score."""
    return f"{student_data['name']} scored {student_data['score']}"


student = {"name": "Alice", "score": 95}
print(get_student_score(student))


# 3. Default Arguments and Keyword Arguments
def create_greeting(name: str, greeting: str = "Hello") -> str:
    """Returns a greeting message with a default greeting."""
    return f"{greeting}, {name}!"


print(create_greeting("Bob"))
print(create_greeting("Bob", greeting="Hi"))


# 4. Variable-Length Arguments (*args and **kwargs)
def sum_numbers(*args: int) -> int:
    """Returns the sum of all provided arguments."""
    return sum(args)


print(sum_numbers(1, 2, 3, 4, 5))


def display_info(**kwargs) -> None:
    """Displays key-value pairs passed as keyword arguments."""
    for key, value in kwargs.items():
        print(f"{key}: {value}")


display_info(name="Alice", age=30, city="Wonderland")


# 5. Working with Classes and Type Hints
class Car:
    def __init__(self, make: str, model: str, year: int) -> None:
        self.make = make
        self.model = model
        self.year = year

    def car_info(self) -> str:
        """Returns formatted information about the car."""
        return f"{self.year} {self.make} {self.model}"


my_car = Car("Toyota", "Corolla", 2020)
print(my_car.car_info())


# 6. Handling Exceptions
def divide_numbers(a: int, b: int) -> float:
    """Divides two numbers and handles division by zero."""
    try:
        return a / b
    except ZeroDivisionError as e:
        return f"Error: {str(e)}"


print(divide_numbers(10, 2))
print(divide_numbers(10, 0))


# 7. File Handling with Context Managers
def write_to_file(filename: str, content: str) -> None:
    """Writes content to a file."""
    with open(filename, "w") as file:
        file.write(content)


write_to_file("sample.txt", "This is some sample content.")

# 8. List Comprehensions and Dictionary Comprehensions
squares = [x * x for x in range(10)]  # List comprehension
print(squares)

square_dict = {x: x * x for x in range(10)}  # Dictionary comprehension
print(square_dict)

# 9. Enumerate and Zip Functions
names = ["Alice", "Bob", "Charlie"]
for index, name in enumerate(names):
    print(f"{index}: {name}")

numbers = [1, 2, 3]
letters = ["a", "b", "c"]
for num, let in zip(numbers, letters):
    print(f"Number: {num}, Letter: {let}")

# 10. The `Any` and `Optional` Types


def display_value(value: Any) -> None:
    """Displays any type of value."""
    print(value)


display_value(10)
display_value("Hello")
display_value([1, 2, 3])


def find_item(items: List[str], item: str) -> Optional[int]:
    """Returns the index of the item if found, otherwise None."""
    try:
        return items.index(item)
    except ValueError:
        return None


index = find_item(["apple", "banana", "cherry"], "banana")
print(f"Index of 'banana': {index}")

index = find_item(["apple", "banana", "cherry"], "orange")
print(f"Index of 'orange': {index}")
