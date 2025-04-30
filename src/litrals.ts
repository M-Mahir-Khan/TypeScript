// Litrals 

let number: 50 | 100 | 200;
number = 50;
// number = 39 // this gives error

console.log(number);


let isActive: true | false
isActive = true;
isActive = false;

// isActive = "Yes" // error


function getStatus(status: "success" | "error" | "pending"){
    console.log(`Status is ${status}`);
    
}

getStatus("success");
getStatus("pending");
// getStatus("failed") // error