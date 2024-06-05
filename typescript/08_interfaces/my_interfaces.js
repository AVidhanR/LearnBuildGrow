// create an instance for User
// need to fill all the fields of the interface User
// cannot leave it empty! like this `{}`
var user = {
    dbId: 1,
    email: "vin@gmail.com",
    userId: 1,
    /*
      // can write like this too!
      startTrail: () => {
          return "";
      },
    */
    startTrail: function () {
        return "start trail!";
    },
    // no need to take as `couponName`
    // can make a reference - such as `name` here
    getCoupon: function (name) {
        console.log(name);
        return 2;
    },
    gitToken: 2123242424,
};
// create an admin role using `Admin`
var reddy = {
    dbId: 2,
    email: "red@gmail.com",
    userId: 2,
    /*
      // can write like this too!
      startTrail: () => {
          return "";
      },
    */
    startTrail: function () {
        return "start trail of Admin!";
    },
    // no need to take as `couponName`
    // can make a reference - such as `name` here
    getCoupon: function (name) {
        console.log(name);
        return 2;
    },
    gitToken: 2123242424,
    role: "admin",
};
