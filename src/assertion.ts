// Type Assertion

let value: any = "Hello TypeScript";
// TypeScript ko nahi pata ki ye string hai.
// Par hume pata hai — to hum assert karenge:

let len = (value as string).length;

console.log(length);


let value2: any = "Hello";
console.log(value.length); // ❌ warning aayegi agar strict mode on ho