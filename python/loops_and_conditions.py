# loop_and_conditions.py

# Loops, Conditions, and Object (Dictionary) Manipulation in Python

# 1. For loop with range and else clause
for i in range(5):
    print(f"For loop iteration {i}")
else:
    print("For loop completed")

# Advanced: For loop with enumeration
fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits):
    print(f"Fruit {index + 1}: {fruit}")

# 2. While loop with break and continue
count = 0
while count < 5:
    if count == 3:
        count += 1
        continue  # Skip the rest of the loop for this iteration
    print(f"While loop iteration {count}")
    count += 1
else:
    print("While loop completed")

# 3. If/Else condition with Elif
num = 10
if num > 15:
    print("Number is greater than 15")
elif num > 5:
    print("Number is greater than 5 but less than or equal to 15")
else:
    print("Number is 5 or less")

# Advanced: Ternary (Conditional) Expression
result = "Greater than 5" if num > 5 else "5 or less"
print(result)


# 4. Function definition, call, and lambda functions
def greet(name):
    return f"Hello, {name}!"


print(greet("Alice"))

# Lambda function for quick, anonymous functions


def double(x): return x * 2


print(double(5))  # Output: 10


# Advanced: Function with variable-length arguments
def greet_all(*names):
    return [f"Hello, {name}!" for name in names]


print(greet_all("Alice", "Bob", "Charlie"))

# 5. List manipulation
my_list = [1, 2, 3]
my_list.append(4)  # Add element to the end
my_list.remove(2)  # Remove element by value
print(my_list)

# Advanced: List comprehension
squared_list = [x * x for x in my_list]
print(squared_list)  # Output: [1, 9, 16]

# 6. Dictionary (Object) manipulation
person = {"name": "Alice", "age": 30, "city": "New York"}

# Accessing values
print(person["name"])

# Adding a new key-value pair
person["email"] = "alice@example.com"

# Modifying an existing value
person["age"] = 31

# Removing a key-value pair
del person["city"]

print(person)

# Advanced: Dictionary comprehension and merging
person2 = {"country": "USA", "occupation": "Engineer"}
merged_person = {**person, **person2}
print(merged_person)

# Creating a new dictionary based on a condition
filtered_person = {k: v for k, v in merged_person.items() if k != "email"}
print(filtered_person)
