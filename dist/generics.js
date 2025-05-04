"use strict";
function identity1(value) {
    return value;
}
function identity(value) {
    return value;
}
let result1 = identity("Hello");
let result2 = identity(34);
function printItems(items) {
    items.forEach((item) => console.log(item));
}
printItems([1, 2, 3]);
printItems(["a", "b"]);
