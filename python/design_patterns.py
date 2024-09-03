# design_patterns.py

# Design Patterns in Python

# 1. Singleton Pattern
class Singleton:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super(Singleton, cls).__new__(cls)
        return cls._instance


# Example usage of Singleton
singleton1 = Singleton()
singleton2 = Singleton()
print("Singleton pattern:", singleton1 is singleton2)  # True


# 2. Factory Pattern
class Dog:
    def speak(self):
        return "Woof!"


class Cat:
    def speak(self):
        return "Meow!"


class AnimalFactory:
    @staticmethod
    def get_animal(animal_type):
        if animal_type == "dog":
            return Dog()
        elif animal_type == "cat":
            return Cat()


# Example usage of Factory
dog = AnimalFactory.get_animal("dog")
cat = AnimalFactory.get_animal("cat")
print("Factory pattern (Dog):", dog.speak())
print("Factory pattern (Cat):", cat.speak())


# 3. Observer Pattern
class Subject:
    def __init__(self):
        self._observers = []

    def attach(self, observer):
        if observer not in self._observers:
            self._observers.append(observer)

    def detach(self, observer):
        try:
            self._observers.remove(observer)
        except ValueError:
            pass

    def notify(self):
        for observer in self._observers:
            observer.update(self)


class ConcreteObserver:
    def update(self, subject):
        print(f"Observer: {subject} has been updated.")


# Example usage of Observer
subject = Subject()
observer1 = ConcreteObserver()
observer2 = ConcreteObserver()

subject.attach(observer1)
subject.attach(observer2)

subject.notify()


# 4. Strategy Pattern
class Strategy:
    def execute(self, data):
        raise NotImplementedError()


class ConcreteStrategyA(Strategy):
    def execute(self, data):
        print(f"Strategy A: {data}")


class ConcreteStrategyB(Strategy):
    def execute(self, data):
        print(f"Strategy B: {data}")


class Context:
    def __init__(self, strategy: Strategy):
        self._strategy = strategy

    def set_strategy(self, strategy: Strategy):
        self._strategy = strategy

    def execute_strategy(self, data):
        self._strategy.execute(data)


# Example usage of Strategy
context = Context(ConcreteStrategyA())
context.execute_strategy("Data for A")
context.set_strategy(ConcreteStrategyB())
context.execute_strategy("Data for B")


# 5. Decorator Pattern
class Coffee:
    def cost(self):
        return 5


class MilkDecorator:
    def __init__(self, coffee):
        self._coffee = coffee

    def cost(self):
        return self._coffee.cost() + 2


class SugarDecorator:
    def __init__(self, coffee):
        self._coffee = coffee

    def cost(self):
        return self._coffee.cost() + 1


# Example usage of Decorator
coffee = Coffee()
print("Base coffee cost:", coffee.cost())

milk_coffee = MilkDecorator(coffee)
print("Coffee with milk cost:", milk_coffee.cost())

sugar_milk_coffee = SugarDecorator(milk_coffee)
print("Coffee with milk and sugar cost:", sugar_milk_coffee.cost())
