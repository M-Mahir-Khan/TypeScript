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