# Exception Handling in Python

def divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("Error: Cannot divide by zero.")
    except TypeError:
        print("Error: Invalid input type.")
    else:
        print(f"Result: {result}")
    finally:
        print("Execution completed.")

divide(10, 2)
divide(10, 0)
divide(10, 'a')
