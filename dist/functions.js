"use strict";
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
function printHello() {
    console.log("Hello");
}
printHello();
function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 4));
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(2, 4));
function pow(value, exponent = 2) {
    return value ** exponent;
}
console.log(pow(3));
function divide({ divident, divisor }) {
    return divident / divisor;
}
console.log(divide({ divident: 10, divisor: 2 }));
function addFn(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(addFn(10, 10, 10, 10, 10));
const negateFunction = (value) => value * -1;
