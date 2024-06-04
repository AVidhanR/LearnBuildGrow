"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createUser = function (user) {
    return user;
};
// call it!
console.log(createUser({
    name: "Vin",
    email: "Vin@gmail.com",
    isPaid: true,
}));
var myUser = {
    _id: "1",
    name: "Vin",
    email: "vidhan@gmail.com",
    isPaid: true,
};
// can alter it!
myUser.email = "reddy@dev.in";
var newCard = {
    cardNum: "234512341334",
    date: "22/2/24",
    cvv: 643,
};
console.log(newCard);
