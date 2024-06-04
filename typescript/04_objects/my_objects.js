"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
  name: "Vin",
  email: "vin@gmail.com",
  isOnline: true,
};
var newUser = {
  name: "Vin",
  isPaid: false,
  email: "vin@gmail.com",
};
//  uses Object as a parameter
function createUser(_a) {
  var _b = _a.name,
    name = _b === void 0 ? "" : _b,
    _c = _a.isPaid,
    isPaid = _c === void 0 ? false : _c;
  console.log(name, "\n", isPaid);
}
// make return type as an object
function createCourse() {
  return { name: "typescript", price: 399 };
}
createUser({ name: "Vidhan", isPaid: true });
createUser(newUser);
console.log(createCourse());
