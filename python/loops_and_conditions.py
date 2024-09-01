# Loops, Conditions, and Object (Dictionary) Manipulation in Python

# For loop
for i in range(5):
    print(f"For loop iteration {i}")

# While loop
count = 0
while count < 5:
    print(f"While loop iteration {count}")
    count += 1

# If/Else condition
num = 10
if num > 5:
    print("Number is greater than 5")
else:
    print("Number is 5 or less")

# Function definition and call
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))

# List manipulation
my_list = [1, 2, 3]
my_list.append(4)
my_list.remove(2)
print(my_list)

# Dictionary (Object) manipulation
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

# Accessing values
print(person["name"])

# Adding a new key-value pair
person["email"] = "alice@example.com"

# Modifying an existing value
person["age"] = 31

# Removing a key-value pair
del person["city"]

print(person)
