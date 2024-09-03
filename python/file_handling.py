# file_handling.py

# File Handling in Python

# 1. Writing to a file
import os
with open("example.txt", "w") as file:
    file.write("Hello, world!\n")

# 2. Reading from a file
with open("example.txt", "r") as file:
    content = file.read()
    print("File content:")
    print(content)

# 3. Appending to a file
with open("example.txt", "a") as file:
    file.write("Appending a new line.\n")

# Reading the updated file
with open("example.txt", "r") as file:
    updated_content = file.read()
    print("Updated file content:")
    print(updated_content)

# 4. Working with CSV files
import csv

# Writing to a CSV file
with open("data.csv", "w", newline="") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["Name", "Age", "City"])
    writer.writerow(["Alice", "30", "New York"])
    writer.writerow(["Bob", "25", "Los Angeles"])

# Reading from a CSV file
with open("data.csv", "r") as csvfile:
    reader = csv.reader(csvfile)
    print("CSV file content:")
    for row in reader:
        print(row)

# 5. Working with JSON files
import json

# Writing a dictionary to a JSON file
person = {"name": "Alice", "age": 30, "city": "New York"}

with open("person.json", "w") as jsonfile:
    json.dump(person, jsonfile, indent=4)

# Reading from a JSON file
with open("person.json", "r") as jsonfile:
    person_data = json.load(jsonfile)
    print("JSON file content:")
    print(person_data)

# 6. Error Handling in File Operations
try:
    with open("non_existent_file.txt", "r") as file:
        content = file.read()
except FileNotFoundError as e:
    print("Error: File not found:", e)

# 7. Working with File Paths

# Get the current working directory
current_dir = os.getcwd()
print("Current directory:", current_dir)

# List files in the current directory
files = os.listdir(current_dir)
print("Files in current directory:", files)

# Check if a file exists
file_exists = os.path.exists("example.txt")
print("'example.txt' exists:", file_exists)

# Delete a file (be careful with this operation)
if os.path.exists("example.txt"):
    os.remove("example.txt")
    print("'example.txt' has been deleted.")
