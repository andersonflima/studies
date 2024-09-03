# switch_case.py

# Switch Case Equivalent in Python (using match-case in Python 3.10+)


def switch_case_example(value):
    match value:
        case 1:
            return "Value is 1"
        case 2:
            return "Value is 2"
        case 3:
            return "Value is 3"
        case _:
            return "Value is something else"


print(switch_case_example(1))
print(switch_case_example(4))


# Advanced: Matching on Types and Structures
def match_type_example(value):
    match value:
        case int():
            return f"Value is an integer: {value}"
        case str():
            return f"Value is a string: '{value}'"
        case list():
            return f"Value is a list with length {len(value)}"
        case _:
            return "Unknown type"


print(match_type_example(42))
print(match_type_example("Hello"))
print(match_type_example([1, 2, 3]))


# Advanced: Matching on Data Structures with Destructuring
def match_data_structure(data):
    match data:
        case {"type": "point", "x": x, "y": y}:
            return f"Point with coordinates ({x}, {y})"
        case {"type": "circle", "radius": r}:
            return f"Circle with radius {r}"
        case _:
            return "Unknown shape"


print(match_data_structure({"type": "point", "x": 1, "y": 2}))
print(match_data_structure({"type": "circle", "radius": 5}))
print(match_data_structure({"type": "square", "side": 3}))


# Advanced: Matching with Guards (conditions)
def match_with_guards(value):
    match value:
        case x if x < 0:
            return "Negative number"
        case x if x == 0:
            return "Zero"
        case x if x > 0:
            return "Positive number"
        case _:
            return "Not a number"


print(match_with_guards(-10))
print(match_with_guards(0))
print(match_with_guards(10))


# Advanced: Matching with Sequences
def match_sequence_example(seq):
    match seq:
        case [x, y, z]:
            return f"Matched a list of three elements: {x}, {y}, {z}"
        case [x, y]:
            return f"Matched a list of two elements: {x}, {y}"
        case _:
            return "No match for the sequence"


print(match_sequence_example([1, 2, 3]))
print(match_sequence_example([1, 2]))
print(match_sequence_example([1, 2, 3, 4]))
