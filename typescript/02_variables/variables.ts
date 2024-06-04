/* create a variable
  syntax:
         let varName: type = value;
*/

// string
let greetings: string = "Hello Vin";

// number
// if it is obvious of using number
// no need to specify it! - ts can do it for you
// the way you use the methods
let myNum = 6.5;
myNum.toFixed();

// boolean
let isLoggedIn: boolean = false;

console.log(isLoggedIn);
console.log(myNum);
console.log(greetings.toUpperCase());

export {};
