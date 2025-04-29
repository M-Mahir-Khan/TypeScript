// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array:


let ourTuple: [number,boolean,string];

ourTuple = [17,true,"Mahir"]


// Readonly Tuple
// A good practice is to make your tuple readonly.

// Tuples only have strongly defined types for the initial values:

const outReadonlyTuples : readonly [number,boolean,string] = [5,true,"Love Coding"]

// throws error as it is readonly.
// ourReadonlyTuple.push('Mahir');