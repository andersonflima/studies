# json_object_manipulation.py

# Object (Dictionary) and JSON Manipulation in Python

import json

# 1. Dictionary Manipulation
person = {"name": "Alice", "age": 30, "city": "New York"}

# Accessing values
print("Name:", person["name"])

# Adding a new key-value pair
person["email"] = "alice@example.com"

# Modifying an existing value
person["age"] = 31

# Removing a key-value pair
del person["city"]

print("Updated person:", person)

# 2. Convert Dictionary to JSON
person_json = json.dumps(person, indent=4)
print("Person as JSON:")
print(person_json)

# 3. Convert JSON to Dictionary
person_dict = json.loads(person_json)
print("Person as Dictionary:", person_dict)

# 4. Handling Nested Dictionaries
nested_person = {
    "name": "Alice",
    "age": 30,
    "address": {"street": "123 Main St", "city": "New York", "zip": "10001"},
    "email": "alice@example.com",
}

# Accessing nested values
print("City:", nested_person["address"]["city"])

# Modifying a nested value
nested_person["address"]["zip"] = "10002"
print("Updated nested person:", nested_person)

# Convert nested dictionary to JSON
nested_person_json = json.dumps(nested_person, indent=4)
print("Nested person as JSON:")
print(nested_person_json)

# 5. JSON with Lists
person_with_hobbies = {
    "name": "Alice",
    "age": 30,
    "hobbies": ["reading", "cycling", "hiking"],
}

# Accessing list elements
print("First hobby:", person_with_hobbies["hobbies"][0])

# Adding an item to the list
person_with_hobbies["hobbies"].append("painting")

# Convert to JSON
person_with_hobbies_json = json.dumps(person_with_hobbies, indent=4)
print("Person with hobbies as JSON:")
print(person_with_hobbies_json)

# 6. Error Handling in JSON Operations
# Handling JSON decoding errors
invalid_json = '{"name": "Alice", "age": 30, "city": "New York"'
try:
    person_invalid = json.loads(invalid_json)
except json.JSONDecodeError as e:
    print("JSON decode error:", e)

# 7. Merging Dictionaries
additional_info = {"occupation": "Engineer", "hobbies": ["reading", "cycling"]}

# Merge two dictionaries (Python 3.9+)
merged_person = person | additional_info
print("Merged person:", merged_person)

# Merge dictionaries for earlier Python versions
merged_person_legacy = {**person, **additional_info}
print("Merged person (legacy):", merged_person_legacy)

# 8. Pretty Printing JSON
# Convert dictionary to pretty-printed JSON
pretty_json = json.dumps(person, indent=4, sort_keys=True)
print("Pretty-printed JSON:")
print(pretty_json)
