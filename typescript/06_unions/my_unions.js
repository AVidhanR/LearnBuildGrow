// create an union in ts
// union with types number,string and boolean
var score = 33;
console.log("score as number: ", score);
// valid
score = "This is Vidhan";
console.log("score as string", score);
// valid
score = true;
console.log("score as boolean: ", score);
// can be an admin or user
var Vidhan = { name: "Vin", id: 1 };
// its totally fine in typescript
Vidhan = { userName: "Reddy", id: 2 };
var getDBId = function (id) {
  // cannot do this!
  // id.toUpperCase();
  // without verification of what type it is!
  if (typeof id === "string") {
    console.log("".concat(id.toUpperCase(), " is a string!"));
  } else {
    console.log("".concat(id.toFixed() + 2, " is number!"));
  }
  console.log("DB id is: ".concat(id));
};
// can pass string
getDBId("vidhan_123");
// can pass number
getDBId(1);
// using union in arrays
// here, the array below can be either string[] or number[]
// but not both - only here
var array = ["1", "2", "3"];
console.log("The array with type string: %{array}");
// change to type number[]
array = [1, 2, 3];
console.log("The array with type number: %{array}");
// use both types in one array
// using `()` in wrapping up the union as an array `[]`
var compositeArray = [1, 2, "3", "4"];
console.log("The array with multiple types: ".concat(compositeArray));
/*
    BAD PRACTICE GUYS! DON'T USE THIS!
    let anyArray: any[] = [1, 2, "3", "4", true];
*/
// literal type of assignment
var seatAllotment;
// give error for below code,
// seatAllotment = "crew"

export {};
