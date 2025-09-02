// Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:

enum CardinalDirection{
    North,
    East,
    South,
    West
}


let currentDirection = CardinalDirection.North;
console.log(currentDirection); // 0


// Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:

// Example
enum CardinalDirections {
  North = 1,
  East,
  South,
  West
}

console.log(CardinalDirections.North);  // 1

console.log(CardinalDirections.West); // 4

// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically:


enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

console.log(StatusCodes.NotFound);  // 404

console.log(StatusCodes.Success); //200


// String Enums
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.

// Example
// enum CardinalDirections {
//   North = 'North',
//   East = "East",
//   South = "South",
//   West = "West"
// };
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);
