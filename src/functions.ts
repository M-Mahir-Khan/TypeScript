// Return Type
// The type of the value returned by the function can be explicitly defined.

function getTime() :number {
    return new Date().getTime()
}

console.log(getTime());


// Void Return Type
// The type void can be used to indicate a function doesn't return any value.

function printHello() : void {
    console.log("Hello");
}

printHello()


// Parameters
// Function parameters are typed with a similar syntax as variable declarations.

function multiply(a:number,b:number) : Number{
    return a * b
}

console.log(multiply(3,4));



// Optional Parameters
// By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.


function add(a:number, b:number , c?:number) :number{
    return a + b + (c || 0)
}

console.log(add(2,4));


// Default Parameters
// For parameters with default values, the default value goes after the type annotation:

function pow(value:number,exponent:number = 2) {
    return value ** exponent
}

console.log(pow(3));


// Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.


function divide({divident,divisor} : {divident:number, divisor: number}) : number{
    return divident / divisor
}

console.log(divide({divident:10,divisor:2}));


// Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.


function addFn(a:number,b:number, ...rest: number[]){
    return a + b + rest.reduce((p,c)=> p + c,0);
}

console.log(addFn(10,10,10,10,10)); // 50

// Type Alias
// Function types can be specified separately from functions with type aliases.

// These types are written similarly to arrow functions, read more about arrow functions here.

// Example
type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

