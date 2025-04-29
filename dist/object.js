"use strict";
const car = {
    type: "Toyota",
    model: 'Corolla',
    year: 2000
};
car.type = "Ford";
const car2 = {
    type: "Toyota"
};
car2.mileage = 2000;
const employee = {
    name: "Mahir",
    salary: 50000,
    getBonus(percent) {
        return (this.salary * percent) / 100;
    }
};
console.log(employee.getBonus(10));
