// access modifiers in ts
// just add `private` or `public`
class User {
  email: string;
  name: string;

  // is private can be accessed with in the class
  private readonly city: string;
  constructor(name: string, email: string, city: string) {
    this.name = name;
    this.email = email;
    this.city = city;
  }
}

// create an instance of User
let Vin = new User("Vidhan", "vin@gmail.com", "VZM");

// cannot access city
// cause it's private
// Vin.city = "VSP"

// second type of declaring classes in ts
class Admin {
  constructor(
    public email: string,
    public name: string,
    public city: string,
    public readonly role: "admin" | "learner"
  ) {
    this.email = email;
    this.name = name;
    this.role = role;
    this.city = city;
  }
}

// create an instance of `Admin`
let Red: Admin = {
  email: "red.admin@gmail.com",
  name: "red",
  city: "VZM",
  role: "admin",
};

// getters and setters in ts
class Course {
  public courseName: string;
  protected courseId: number;
  constructor(courseName: string, courseId: number, public price: number) {
    this.courseName = courseName;
    this.courseId = courseId;
    this.price = price;
  }

  // getter
  get getCourseId(): number {
    return this.courseId;
  }

  // setter
  // please don't keep any return type!
  // even keeping void gives you an error
  // reason - that's how ts is built (^_^)
  set setCourseId(courseId: number) {
    this.courseId = courseId;

    // throw error for an error encounter
    if (courseId <= 0) {
      throw new Error("Invalid");
    }
  }
}

let course = new Course("reactJs", 102, 299);

// use setter like this in ts
course.setCourseId = 2;

// use getter like this in ts
console.log(course.getCourseId);

// protected in ts
class SubUser extends Course {
  // cannot access the private here - same as other languages
  isFamily?: boolean;

  // now we can get the courseId here
  // but not outside the class!
  changeCourseId() {
    this.courseId = 2 + this.courseId;
  }
}

let subUser = new SubUser("nextJs", 132, 699);
console.log(subUser);

export {};
