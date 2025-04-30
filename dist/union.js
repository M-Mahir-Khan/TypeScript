"use strict";
function printStatusCode(code) {
    console.log(`My status code is ${code}`);
}
printStatusCode(404);
printStatusCode('404');
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kgToLbs(10));
console.log(kgToLbs('10'));
let data;
data = "Hello";
data = 200;
console.log(data);
let vehicle;
vehicle = { brand: "Toyota", speed: 120 };
vehicle = { brand: "Honda", gears: 6 };
console.log(vehicle);
