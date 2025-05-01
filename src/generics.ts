// Without Generics:

function identity1(value: any): any {
  return value;
}
//  Problem: TypeScript kuch bhi allow kar dega. Safety nahi hai.


// With Generics

function identity<T>(value: T) : T {
    return value
}

let result1 = identity<string>("Hello")  // "Hello"
let result2 = identity<number>(34) // 34
// T ka matlab hota hai "koi bhi type jo baad me diya jaaye".


// Generics with Arrays
function printItems<T>(items:T[]) : void{
    items.forEach((item)=> console.log(item))
}

printItems<number>([1,2,3]);
printItems<string>(["a","b"]);