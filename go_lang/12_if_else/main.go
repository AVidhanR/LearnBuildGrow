package main

import "fmt"

func main() {
	fmt.Println("Welcome to if-else in go_lang");

	// initiate variables
	loginCount := 23
	var result = ""

	// if-else in go
	// should not move the curly braces to next line
	if loginCount < 10 { 
		result = "Regular user"
	} else if loginCount > 10 {
		result = "Watchout"
	} else {
		result = "Exactly 10 login count"
	}
	fmt.Println(result);

	// check for multiple conditions in if-else
	// can assign variables on the go in if-else
	if num := 3; num < 10 {
		fmt.Println("num is less than 10");
	} else {
		fmt.Println("num is greater than 10");
	}
}