package main

import "fmt"

func main() {

	// no inheritance, no super or parent
	fmt.Println("Welcome to structs in go_lang");

	// create an instance of struct User
	vidhan := User{"A Vidhan", "vidhan@go.dev", true, 20}
	fmt.Println(vidhan);

	// print the struct instance in-detail
	fmt.Printf("vidhan details %+v\n", vidhan);

	// print components if struct 'User'
	// individually using '.' operator
	fmt.Printf("Name is %v, Age is %v\n", vidhan.Name, vidhan.Age);	

	// call the method with the struct instance
	vidhan.GetStatus();
	vidhan.NewMail();

	// in order take this effect we use pointers
	fmt.Printf("The mail changed? %v", vidhan.Email);
}

// create a struct outside the main() function
type User struct {
	Name string
	Email string
	Status bool
	Age int
}

// if you want to export anything make sure it is in PascalCase 
// if you don't want to then, use camelCase
// create a method
func (usr User) GetStatus() {
	fmt.Println("Is user active: ", usr.Status);
}

// this does not change the actual data!
// use pointers!
func (usr User) NewMail() {
	usr.Email = "test@go.dev"
	fmt.Println("Email of this user is: ", usr.Email);
}