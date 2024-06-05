// create an union in ts
// union with types number,string and boolean
let score: number | string | boolean = 33;
console.log("score as number: ", score);

// valid
score = "This is Vidhan";
console.log("score as string", score);

// valid
score = true;
console.log("score as boolean: ", score);

// lets create our own union
type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

// can be an admin or user
let Vidhan: User | Admin = { name: "Vin", id: 1 };

// its totally fine in typescript
Vidhan = { userName: "Reddy", id: 2 };

const getDBId = (id: string | number) => {
  // cannot do this!
  // id.toUpperCase();
  // without verification of what type it is!

  if (typeof id === "string") {
    console.log(`${id.toUpperCase()} is a string!`);
  } else {
    console.log(`${id.toFixed() + 2} is number!`);
  }
  console.log(`DB id is: ${id}`);
};

// can pass string
getDBId("vidhan_123");

// can pass number
getDBId(1);

// using union in arrays
// here, the array below can be either string[] or number[]
// but not both - only here
let array: number[] | string[] = ["1", "2", "3"];
console.log(`The array with type string: %{array}`);

// change to type number[]
array = [1, 2, 3];
console.log(`The array with type number: %{array}`);

// use both types in one array
// using `()` in wrapping up the union as an array `[]`
let compositeArray: (number | string)[] = [1, 2, "3", "4"];
console.log(`The array with multiple types: ${compositeArray}`);

/*
    BAD PRACTICE GUYS! DON'T USE THIS!
    let anyArray: any[] = [1, 2, "3", "4", true];
*/

// literal type of assignment
let seatAllotment: "window" | "side";

// give error for below code,
// seatAllotment = "crew"
