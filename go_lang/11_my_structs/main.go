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

	// print individually using '.' operator
	fmt.Printf("Name is %v, Age is %v\n", vidhan.Name, vidhan.Age);	
}

// create a struct outside the main() function
type User struct {
	Name string
	Email string
	Status bool
	Age int
}