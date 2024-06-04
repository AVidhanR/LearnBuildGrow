// create a function
/*
    syntax:
        function funcName(param1: type, param2: type,...): type {
            return typeSpecific
        }
*/

// can return number only!
const addTwo = (num: number): number => {
  return 2 + num;
};

// will return string only!
const getUpperCase = (str: string): string => {
  return str.toUpperCase();
};

// cannot return anything!
const errorReport = (errorMsg: string): void => {
  console.log(errorMsg);
};

// for handling errors in ts
function handleErrors(msg: string): never {
  throw new Error(msg);
}

// can add default values to parameters directly!
const signUpForm = (
  name: string,
  email: string,
  isPaid: boolean = true
): string => {
  return `Name: ${name}\nEmail: ${email}\nPaid? ${isPaid}`;
};

// lets check the map() function for strings
let heroes = ["Thor", "Iron man", "Superman"];
heroes.map((hero) => {
  return `hero is ${hero}`;
});

// for numbers
let rollNumbers = [1, 2, 3];
rollNumbers.map((num): string => {
  return `hero is ${num}`;
});

console.log(signUpForm("Vin", "Vin@gmail.com", true));
console.log(signUpForm("Vidhan", "Vinnu@gmail.com"));
console.log(getUpperCase("Vin"));
console.log(addTwo(20));
errorReport("Exception");
