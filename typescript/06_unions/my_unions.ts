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
