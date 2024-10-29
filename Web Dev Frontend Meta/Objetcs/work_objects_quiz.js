// Task 1: Code a Person class
// Code a Person class, with three parameters in the constructor: name, age, and energy.

// Set the default parameters in the Person class as follows:
// name = "Tom" age = 20 energy = 100

// Code two methods in the Person class. Name those methods sleep() and doSomethingFun().

// The sleep() method should take the existing energy level and increase it by 10.

// The doSomethingFun() method should take the existing energy level and decrease it by 10.

// Task 2: Code a Worker class
// Code a sub-class, inheriting from the Person class, and name it Worker.

// The Worker class has two additional parameters in the constructor:

// xp (for "experience points")
// hourlyWage.
// These properties are set to the following default values:

// xp = 0

// hourlyWage = 10
// The Worker class has all the paramerters and methods of its super-class.

// Additionally, it has the goToWork() method, which, whenever it's run, increases the value of the xp property by 10.

// Task 3: Code a intern object
// Inside the intern function instantiate the Worker class to code a new intern object.

// The intern should have the following characteristics:

// name: Bob

// age: 21

// energy: 110

// xp: 0

// hourlyWage: 10
// Run the goToWork() method on the intern object. Then return the intern object.

// Task 4: Code a manager object
// Inside the manager function instantiate the Worker class to code a new manager object.

// The manager object should have the following characteristics:

// name: Alice

// age: 30

// energy: 120

// xp: 100

// hourlyWage: 30
// Run the doSomethingFun() method on the manager object. Then return the manager object.

// Nice work!

// Task 1: Code a Person class
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep() {
    this.energy += 10;
  }
  doSomethingFun() {
    this.energy -= 10;
  }
}
// Task 2: Code a Worker class
class Worker extends Person {
  constructor(xp = 0, hourlyWage = 10, name, age, energy) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  goToWork() {
    this.xp += 10;
  }
}

// Task 3: Code an intern object, run methods
function intern() {
  var intern = new Worker(0, 10, "Bob", 21, 110);
  intern.goToWork();
  return intern;
}

// Task 4: Code a manager object, methods
function manager() {
  var manager = new Worker(100, 30, "Alice", 30, 120);
  manager.doSomethingFun();
  return manager;
}
