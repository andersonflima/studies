# exception_handling.py

# Exception Handling in Python

# 1. Basic Exception Handling
from contextlib import contextmanager


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


# Example usage of basic exception handling
divide(10, 2)
divide(10, 0)
divide(10, "a")


# 2. Custom Exceptions
class CustomError(Exception):
    """Base class for other exceptions"""

    pass


class NegativeValueError(CustomError):
    """Raised when the input value is negative"""

    pass


def check_positive(value):
    if value < 0:
        raise NegativeValueError("Negative value is not allowed.")
    else:
        print(f"Value is positive: {value}")


# Example usage of custom exception
try:
    check_positive(10)
    check_positive(-5)
except NegativeValueError as e:
    print(e)


# 3. Handling Multiple Exceptions in One Block
def multiple_exceptions(a, b):
    try:
        result = a / b
    except (ZeroDivisionError, TypeError) as e:
        print(f"Error: {e}")
    else:
        print(f"Result: {result}")
    finally:
        print("Execution completed.")


# Example usage of multiple exception handling
multiple_exceptions(10, 2)
multiple_exceptions(10, 0)
multiple_exceptions(10, "b")


# 4. Raising Exceptions
def raise_exception_example(value):
    if not isinstance(value, int):
        raise TypeError("Only integers are allowed.")
    if value < 0:
        raise ValueError("Negative integers are not allowed.")
    print(f"Value is: {value}")


# Example usage of raising exceptions
try:
    raise_exception_example(10)
    raise_exception_example(-5)
    raise_exception_example("10")
except (TypeError, ValueError) as e:
    print(f"Caught an exception: {e}")


# 5. Using `finally` for Cleanup Actions
def file_handling_example(filename):
    try:
        file = open(filename, "r")
        data = file.read()
        print(data)
    except FileNotFoundError:
        print(f"Error: {filename} not found.")
    finally:
        if "file" in locals():
            file.close()
            print(f"File {filename} closed.")


# Example usage of finally for cleanup
file_handling_example("example.txt")
file_handling_example("non_existent.txt")

# 6. Context Managers and Exception Handling


@contextmanager
def managed_resource(resource):
    try:
        print(f"Acquiring resource: {resource}")
        yield resource
    except Exception as e:
        print(f"Error while using resource: {e}")
    finally:
        print(f"Releasing resource: {resource}")


# Example usage of context manager with exception handling
with managed_resource("ResourceName") as res:
    print(f"Using {res}")
    raise ValueError("An error occurred while using the resource.")
