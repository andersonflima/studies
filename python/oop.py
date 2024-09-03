# oop.py

# OOP in Python

# Class definition with Encapsulation
from abc import ABC, abstractmethod


class Animal:
    def __init__(self, name: str, species: str):
        self.name = name
        self._species = species  # Protected attribute

    def speak(self) -> str:
        raise NotImplementedError("Subclasses must implement this method")

    def get_species(self) -> str:
        """Public method to access the protected _species attribute."""
        return self._species

    def _private_method(self):
        """Private method (by convention, not enforced)."""
        return "This is a private method"


# Inheritance and Method Overriding
class Dog(Animal):
    def __init__(self, name: str, breed: str):
        super().__init__(name, "Dog")
        self.breed = breed

    def speak(self) -> str:
        return f"{self.name} says Woof!"

    def get_breed(self) -> str:
        """Public method to access the breed."""
        return self.breed


class Cat(Animal):
    def __init__(self, name: str, color: str):
        super().__init__(name, "Cat")
        self.color = color

    def speak(self) -> str:
        return f"{self.name} says Meow!"

    def get_color(self) -> str:
        """Public method to access the color."""
        return self.color


# Polymorphism
def make_animal_speak(animal: Animal):
    print(animal.speak())


dog = Dog("Buddy", "Golden Retriever")
cat = Cat("Whiskers", "Black")

make_animal_speak(dog)
make_animal_speak(cat)

# Abstract Base Classes


class Vehicle(ABC):
    def __init__(self, make: str, model: str):
        self.make = make
        self.model = model

    @abstractmethod
    def drive(self):
        """Abstract method that must be implemented by subclasses."""
        pass


class Car(Vehicle):
    def drive(self):
        return f"Driving a car: {self.make} {self.model}"


class Motorcycle(Vehicle):
    def drive(self):
        return f"Riding a motorcycle: {self.make} {self.model}"


car = Car("Toyota", "Corolla")
motorcycle = Motorcycle("Harley", "Davidson")

print(car.drive())
print(motorcycle.drive())


# Class Methods and Static Methods
class MathOperations:
    def __init__(self, value: int):
        self.value = value

    @classmethod
    def from_string(cls, value_str: str):
        """Alternative constructor using a class method."""
        return cls(int(value_str))

    @staticmethod
    def add(x: int, y: int) -> int:
        """Static method for adding two numbers."""
        return x + y


operation = MathOperations.from_string("10")
print(operation.value)  # 10
print(MathOperations.add(5, 3))  # 8


# Encapsulation and Property Decorators
class BankAccount:
    def __init__(self, balance: float):
        self._balance = balance

    @property
    def balance(self) -> float:
        """Property decorator for the balance."""
        return self._balance

    @balance.setter
    def balance(self, amount: float) -> None:
        if amount < 0:
            raise ValueError("Balance cannot be negative")
        self._balance = amount

    def deposit(self, amount: float) -> None:
        if amount > 0:
            self._balance += amount

    def withdraw(self, amount: float) -> None:
        if 0 < amount <= self._balance:
            self._balance -= amount
        else:
            raise ValueError("Invalid withdraw amount")


account = BankAccount(1000)
print(account.balance)  # 1000

account.deposit(500)
print(account.balance)  # 1500

account.withdraw(200)
print(account.balance)  # 1300

# Attempting to set a negative balance (will raise an exception)
try:
    account.balance = -100
except ValueError as e:
    print(e)
