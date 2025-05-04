// Basic Class
class PersonClass {
    name: string;
    constructor(name:string){
        this.name = name;
    }

    greet() : void{
        console.log(`Hello , my name is ${this.name}`);
    }

}

const p1 = new PersonClass("Mahir");
p1.greet(); // Hello , my name is Mahir




// Access Modifiers

class CarClass {
    public model:string;
    private year : number;

    constructor(model:string,year:number){
        this.model = model;
        this.year = year;
    }

    getDetails():string{
        return `${this.model} - ${this.year}`
    }
}



// Inheritance

class Animal {
    makeSound(): void {
        console.log("Some sound");
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Woof!");
    }
}

const dog = new Dog();
dog.makeSound(); // From Animal
dog.bark(); // from Dog


// Interfaces — contract banane ke liye

interface User {
    name:string;
    age:number;
}

function showUser(user:User) : void {
    console.log(`${user.name} is ${user.age} yeaer old`);
}


// Class inplements interface

interface Animal {
    name:string;
    makeSound(): void;
}


class Cat implements Animal {
    name:string
    constructor(name:string){
        this.name = name;
    }
    makeSound() : void{
        console.log("Meow!");
        
    }
}



interface Employee {
    id:number;
    getSalary(): number;
}

class Manager implements Employee {
    id:number;

    constructor(id:number){
        this.id = id
    }

    getSalary(): number {
        return 50000
    }
}