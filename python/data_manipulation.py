# Advanced Data Manipulation in Python

# Map, Filter, Reduce
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
from functools import reduce
product = reduce(lambda x, y: x * y, numbers)

print("Squared:", squared)
print("Even numbers:", even_numbers)
print("Product:", product)

# Destructuring and Spread Operator (Python equivalent)
a, b, *rest = numbers
print("a:", a, "b:", b, "rest:", rest)

extended_numbers = [0, *numbers, 6]
print("Extended numbers:", extended_numbers)
