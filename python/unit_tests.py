# unit_test.py

# Unit Testing in Python with pytest

# Install pytest with `pip install pytest`

# Functions to be tested
import pytest


def add(a, b):
    return a + b


def subtract(a, b):
    return a - b


def multiply(a, b):
    return a * b


def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero!")
    return a / b


# Test Functions
def test_add():
    assert add(1, 2) == 3
    assert add(-1, 1) == 0
    assert add(0, 0) == 0


def test_subtract():
    assert subtract(2, 1) == 1
    assert subtract(2, 2) == 0


def test_multiply():
    assert multiply(2, 3) == 6
    assert multiply(-1, 5) == -5
    assert multiply(0, 100) == 0


def test_divide():
    assert divide(10, 2) == 5
    assert divide(3, 2) == 1.5
    with pytest.raises(ValueError):
        divide(10, 0)


# Parameterized Tests


@pytest.mark.parametrize(
    "a, b, expected",
    [
        (1, 2, 3),
        (-1, -1, -2),
        (0, 5, 5),
        (3, 7, 10),
    ],
)
def test_add_parametrized(a, b, expected):
    assert add(a, b) == expected


@pytest.mark.parametrize(
    "a, b, expected",
    [
        (2, 1, 1),
        (10, 5, 5),
        (0, 0, 0),
    ],
)
def test_subtract_parametrized(a, b, expected):
    assert subtract(a, b) == expected


# Using Fixtures
@pytest.fixture
def sample_data():
    """Sample data for testing."""
    return {"numbers": [1, 2, 3, 4, 5], "name": "pytest"}


def test_sample_data(sample_data):
    assert sum(sample_data["numbers"]) == 15
    assert sample_data["name"] == "pytest"


# Run the tests with `pytest <filename>.py`
