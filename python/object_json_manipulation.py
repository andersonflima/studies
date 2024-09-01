# Object (Dictionary) and JSON Manipulation in Python

import json

# Dictionary Manipulation
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

# Convert dictionary to JSON
person_json = json.dumps(person)
print(person_json)

# Convert JSON to dictionary
person_dict = json.loads(person_json)
print(person_dict)
