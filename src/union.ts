// Union | (OR)
// Using the | we are saying our parameter is a string or number:

function printStatusCode(code:number | string){
    console.log(`My status code is ${code}`);
    
}

printStatusCode(404);
printStatusCode('404');



function kgToLbs(weight : string | number): number {
    // Narrowing
    if(typeof weight === "number"){
        return weight * 2.2
    }else{
        return parseInt(weight) * 2.2
    }
}

console.log(kgToLbs(10));
console.log(kgToLbs('10'));


let data: string | number;

data = "Hello";
data = 200;
// data = true; error
console.log(data);


type Car = {brand:string; speed:number};
type Bike = {brand:string;gears:number};


let vehicle: Car | Bike;
vehicle = { brand: "Toyota", speed: 120 }; // ✅ Allowed (Car type)
vehicle = { brand: "Honda", gears: 6 };   // ✅ Allowed (Bike type)
// vehicle = { brand: "Ford", color: "Red" }; // ❌ Error (color property allowed nahi)
console.log(vehicle);