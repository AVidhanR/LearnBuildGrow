// create a tuple in ts
let user: [string, number, boolean];

// order is very important
// can't assign un-orderly
user = ["Vidhan", 501, true];

// use case - for colors!
let rgb: [number, number, number] = [255, 256, 111];

// can make a type - tuple
type User = [string, number];

let newUser: User = ["Vidhan", 1];

// can't do this!
// newUser.push(true);
newUser.push("Vidhan", "Reddy");
console.log("Can do this (V_V) => ", newUser);
