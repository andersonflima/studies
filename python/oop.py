# OOP in Python

# Class definition
class Animal:
    def __init__(self, name: str):
        self.name = name

    def speak(self) -> str:
        raise NotImplementedError("Subclasses must implement this method")

# Inheritance
class Dog(Animal):
    def speak(self) -> str:
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self) -> str:
        return f"{self.name} says Meow!"

# Polymorphism
def make_animal_speak(animal: Animal):
    print(animal.speak())

dog = Dog("Buddy")
cat = Cat("Whiskers")

make_animal_speak(dog)
make_animal_speak(cat)