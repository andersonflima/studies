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
