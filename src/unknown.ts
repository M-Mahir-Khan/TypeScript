let val: unknown = "hello";
// console.log(val.toUpperCase()); // Error


if(typeof val === "string"){
    console.log(val.toUpperCase());    
}

// unknown me TypeScript bolta hai:
// “Pehle check karo, fir kaam karo.”

// Jabki any sab kuch allow kar deta hai — chahe galat ho.