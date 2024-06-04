// create a type object in ts
type User = {
  name: string;
  email: string;
  isPaid: boolean;
};

// (>_<)
// fun fact we can use string as STRING by having the following,
type STRING = string;

const createUser = (user: User): User => {
  return user;
};

// call it!
console.log(
  createUser({
    name: "Vin",
    email: "Vin@gmail.com",
    isPaid: true,
  })
);

// readonly in ts
type readOnlyUser = {
  readonly _id: string;
  name: string;
  email: string;
  isPaid: boolean;
  creditCardDetails?: number;
};

let myUser: readOnlyUser = {
  _id: "1",
  name: "Vin",
  email: "vidhan@gmail.com",
  isPaid: true,
};

// can alter it!
myUser.email = "reddy@dev.in";
// try changing _id
// myUser._id = 2;

// create a complex type object
type cardNumber = {
  cardNum: string;
};

type cardDate = {
  date: string;
};

// just an example - never use this in real life projects!
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

const newCard: cardDetails = {
  cardNum: "234512341334",
  date: "22/2/24",
  cvv: 643,
};
console.log(newCard);

export {};
