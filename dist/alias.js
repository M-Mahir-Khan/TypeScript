"use strict";
const studentDetails = {
    name: "Mahir",
    age: 17,
    gender: "Male"
};
console.log(studentDetails.name);
function greet(person) {
    return `Hello , ${person.name} your age is ${person.age}`;
}
const person1 = { name: "Mahir", age: 17 };
console.log(greet(person1));
