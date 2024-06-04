// create a function
/*
    syntax:
        function funcName(param1: type, param2: type,...): type {
            return typeSpecific
        }
*/
// can return number only!
var addTwo = function (num) {
    return 2 + num;
};
// will return string only!
var getUpperCase = function (str) {
    return str.toUpperCase();
};
// cannot return anything!
var errorReport = function (errorMsg) {
    console.log(errorMsg);
};
// for handling errors in ts
function handleErrors(msg) {
    throw new Error(msg);
}
// can add default values to parameters directly!
var signUpForm = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    return "Name: ".concat(name, "\nEmail: ").concat(email, "\nPaid? ").concat(isPaid);
};
// lets check the map() function for strings
var heroes = ["Thor", "Iron man", "Superman"];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
// for numbers
var rollNumbers = [1, 2, 3];
rollNumbers.map(function (num) {
    return "hero is ".concat(num);
});
console.log(signUpForm("Vin", "Vin@gmail.com", true));
console.log(signUpForm("Vidhan", "Vinnu@gmail.com"));
console.log(getUpperCase("Vin"));
console.log(addTwo(20));
errorReport("Exception");
