"use strict";
class PersonClass {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello , my name is ${this.name}`);
    }
}
const p1 = new PersonClass("Mahir");
p1.greet();
class CarClass {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    getDetails() {
        return `${this.model} - ${this.year}`;
    }
}
class Animal {
    makeSound() {
        console.log("Some sound");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}
const dog = new Dog();
dog.makeSound();
dog.bark();
function showUser(user) {
    console.log(`${user.name} is ${user.age} yeaer old`);
}
class Cat {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Meow!");
    }
}
class Manager {
    constructor(id) {
        this.id = id;
    }
    getSalary() {
        return 50000;
    }
}
