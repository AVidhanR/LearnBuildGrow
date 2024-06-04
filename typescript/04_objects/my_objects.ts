const User = {
  name: "Vin",
  email: "vin@gmail.com",
  isOnline: true,
};

let newUser = {
  name: "Vin",
  isPaid: false,
  email: "vin@gmail.com",
};

//  uses Object as a parameter
function createUser({ name = "", isPaid = false }) {
  console.log(name, "\n", isPaid);
}

// make return type as an object
function createCourse(): { name: string; price: number } {
  return { name: "typescript", price: 399 };
}

createUser({ name: "Vidhan", isPaid: true });
createUser(newUser);
console.log(createCourse());

export {};
