# File Handling in Python

# Writing to a file
with open('example.txt', 'w') as file:
    file.write('Hello, world!\n')

# Reading from a file
with open('example.txt', 'r') as file:
    content = file.read()
    print(content)

# Working with CSV files
import csv

with open('data.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Name', 'Age', 'City'])
    writer.writerow(['Alice', '30', 'New York'])
    writer.writerow(['Bob', '25', 'Los Angeles'])

with open('data.csv', 'r') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        print(row)
