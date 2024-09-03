# basic.py

# 1. Variable Definition and Usage
# Variables are defined by simply assigning a value to a name
# Python is dynamically typed, so the type is inferred based on the value

# Integer variables
a = 10
b = 5

# Float variables
x = 3.5
y = 2.0

# String variables
greeting = "Hello"
name = "World"

# List variables (ordered and mutable)
numbers = [1, 2, 3, 4, 5]
names = ["Alice", "Bob", "Charlie"]

# 2. Basic Operations with Variables
# Sum
sum_ab = a + b  # 15
sum_xy = x + y  # 5.5

# Subtraction
sub_ab = a - b  # 5
sub_xy = x - y  # 1.5

# Multiplication
mul_ab = a * b  # 50
mul_xy = x * y  # 7.0

# Division
div_ab = a / b  # 2.0
div_xy = x / y  # 1.75

# Modulus (remainder)
mod_ab = a % b  # 0

# Floor Division (integer division)
floor_div_ab = a // b  # 2

# Exponentiation
exp_ab = a**b  # 100000

# 3. Working with Lists
# Accessing list elements by index
first_number = numbers[0]  # 1
second_name = names[1]  # "Bob"

# Modifying list elements
numbers[0] = 10  # Now numbers is [10, 2, 3, 4, 5]

# Adding elements to a list
numbers.append(6)  # Now numbers is [10, 2, 3, 4, 5, 6]

# Removing elements from a list
numbers.pop()  # Removes the last element, now numbers is [10, 2, 3, 4, 5]

# Slicing a list
sub_list = numbers[1:4]  # [2, 3, 4]

# List comprehension (creating a new list with a pattern)
squares = [num * num for num in numbers]  # [100, 4, 9, 16, 25]

# 4. Functions and Passing Variables as Arguments


def add(a, b):
    """Returns the sum of a and b"""
    return a + b


def multiply(a, b):
    """Returns the product of a and b"""
    return a * b


# Using the functions
result_add = add(3, 4)  # 7
result_mul = multiply(3, 4)  # 12

# Passing lists to functions


def sum_list(numbers):
    """Returns the sum of all elements in the list"""
    return sum(numbers)


total = sum_list([1, 2, 3, 4, 5])  # 15

# 5. Additional Examples
# String concatenation
full_greeting = greeting + ", " + name + "!"  # "Hello, World!"

# Checking variable types
type_of_a = type(a)  # <class 'int'>
type_of_x = type(x)  # <class 'float'>

# Using type conversions
a_float = float(a)  # Converts integer a to float, now 10.0
x_int = int(x)  # Converts float x to integer, now 3

# Boolean operations
is_equal = a == b  # False
is_greater = a > b  # True

# Conditional Statements
if a > b:
    print("a is greater than b")
elif a < b:
    print("a is less than b")
else:
    print("a and b are equal")

# Loops
# For loop to iterate over a list
for num in numbers:
    print(num)  # Prints each number in the list

# While loop
counter = 0
while counter < 5:
    print(counter)
    counter += 1

# 6. Python Objects and Methods
# Everything in Python is an object, including integers, strings, and functions
# Objects have methods that perform actions on them

# Example with strings
upper_greeting = greeting.upper()  # "HELLO"
lower_name = name.lower()  # "world"

# Example with lists
reversed_numbers = numbers[::-1]  # Reverses the list: [5, 4, 3, 2, 10]

# Example with dictionaries (key-value pairs)
person = {"name": "Alice", "age": 30, "city": "Wonderland"}

# Accessing dictionary values
person_name = person["name"]  # "Alice"
person_age = person["age"]  # 30

# Adding a new key-value pair to the dictionary
person["email"] = "alice@example.com"

# Printing the dictionary
print(person)
