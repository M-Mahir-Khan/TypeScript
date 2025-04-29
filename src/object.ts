// Object

const car : {type:string,model:string, year:number} = {
    type:"Toyota",
    model:'Corolla',
    year:2000
}



// Type Inference
// TypeScript can infer the types of properties based on their values.

car.type = "Ford" // no error
// car.type = 2  // Error: Type 'number' is not assignable to type 'string'.



// Optional Properties
// Optional properties are properties that don't have to be defined in the object definition.

// Example with an optional property
const car2: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
car2.mileage = 2000;




// More Example of Number
const employee :{
    name:string,
    salary:number,
    getBonus:(  percent:number) => number
} ={
    name:"Mahir",
    salary:50_000,
    getBonus(percent){
        return (this.salary * percent ) / 100;
    }
}

console.log(employee.getBonus(10));
