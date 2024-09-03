# data_manipulation.py

# Advanced Data Manipulation in Python

# 1. Map, Filter, Reduce
from functools import reduce
numbers = [1, 2, 3, 4, 5]

# Using map to square each number
squared = list(map(lambda x: x**2, numbers))
print("Squared:", squared)

# Using filter to extract even numbers
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print("Even numbers:", even_numbers)

# Using reduce to calculate the product of all numbers

product = reduce(lambda x, y: x * y, numbers)
print("Product:", product)

# 2. Destructuring and Spread Operator (Python equivalent)
# Destructuring a list into variables
a, b, *rest = numbers
print("a:", a, "b:", b, "rest:", rest)

# Using the spread operator to extend a list
extended_numbers = [0, *numbers, 6]
print("Extended numbers:", extended_numbers)

# 3. List Comprehensions with Conditions
# Create a list of squares of even numbers only
even_squares = [x**2 for x in numbers if x % 2 == 0]
print("Even squares:", even_squares)

# Create a list of tuples (number, square) for odd numbers
odd_squares_tuples = [(x, x**2) for x in numbers if x % 2 != 0]
print("Odd squares as tuples:", odd_squares_tuples)

# 4. Dictionary Comprehensions
# Create a dictionary from a list of tuples
squared_dict = {x: x**2 for x in numbers}
print("Squared dictionary:", squared_dict)

# Create a dictionary where keys are numbers and values indicate if they are even or odd
parity_dict = {x: ("even" if x % 2 == 0 else "odd") for x in numbers}
print("Parity dictionary:", parity_dict)

# 5. Manipulating Nested Data Structures
# List of dictionaries
people = [
    {"name": "Alice", "age": 30, "city": "New York"},
    {"name": "Bob", "age": 25, "city": "San Francisco"},
    {"name": "Charlie", "age": 35, "city": "Los Angeles"},
]

# Extract names of people older than 30
names_above_30 = [person["name"] for person in people if person["age"] > 30]
print("Names of people above 30:", names_above_30)

# Create a dictionary of people's names and their cities
name_city_dict = {person["name"]: person["city"] for person in people}
print("Name-City dictionary:", name_city_dict)

# 6. Working with Sets
# Create a set of unique squares
unique_squares = {x**2 for x in [1, 2, 2, 3, 4, 4, 5]}
print("Unique squares set:", unique_squares)

# Set operations: union, intersection, difference
set_a = {1, 2, 3}
set_b = {3, 4, 5}

union_set = set_a | set_b
intersection_set = set_a & set_b
difference_set = set_a - set_b

print("Union:", union_set)
print("Intersection:", intersection_set)
print("Difference:", difference_set)
