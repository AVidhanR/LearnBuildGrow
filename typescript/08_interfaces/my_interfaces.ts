// create an interface
interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // define a method in this interface (1st method)
  // startTrail: () => string;

  // second method - it's better to use this - more understandable
  startTrail(): string;

  // `?` it helps! - no need give the Id cause its having a `?`
  getCoupon(couponName: string, Id?: number): number;
}

// create an instance for User
// need to fill all the fields of the interface User
// cannot leave it empty! like this `{}`
let user: User = {
  dbId: 1,
  email: "vin@gmail.com",
  userId: 1,
  /*
    // can write like this too!
    startTrail: () => {
        return "";
    },
  */
  startTrail() {
    return "start trail!";
  },

  // no need to take as `couponName`
  // can make a reference - such as `name` here
  getCoupon(name: "Vin") {
    console.log(name);
    return 2;
  },
  gitToken: 2123242424,
};

/**
 * PART TWO
 */
// add more fields just like this
// reopening of interface... (V.V)
interface User {
  gitToken: number;
}

interface Another {
  canDoThis?: string;
}

// can use inheritance in interface concept
// can inherit more than one!
interface Admin extends User, Another {
  role: "admin" | "learner";
}

// create an admin role using `Admin`
let reddy: Admin = {
  dbId: 2,
  email: "red@gmail.com",
  userId: 2,
  /*
    // can write like this too!
    startTrail: () => {
        return "";
    },
  */
  startTrail() {
    return "start trail of Admin!";
  },

  // no need to take as `couponName`
  // can make a reference - such as `name` here
  getCoupon(name: "Red") {
    console.log(name);
    return 2;
  },
  gitToken: 2123242424,
  role: "admin",
};
