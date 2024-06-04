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
