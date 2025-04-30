// Type Aliases

type Student = {
    name:string;
    age:number,
    gender:string;
}


const studentDetails: Student = {
    name:"Mahir",
    age: 17,
    gender:"Male"
}

console.log(studentDetails.name);




type Person = {
    name:string,
    age:number
}

function greet(person:Person):string {
    return `Hello , ${person.name} your age is ${person.age}`
}

const person1:Person ={name:"Mahir", age:17}
console.log(greet(person1));
