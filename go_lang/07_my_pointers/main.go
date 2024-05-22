package main

import "fmt"

func main() {
	fmt.Println("Welcome to Pointers in go_lang");

	// creating a pointer
	// var ptr *int;
	// default value: <nil>
	// fmt.Println(ptr);
	
	myNum := 20
	var ptr = &myNum
	fmt.Println("The address of the ptr",ptr);
	fmt.Println("The pointing value is ", *ptr);

	// can change the pointer and it reflects on the main var
	*ptr += 2;
	fmt.Println("New value ", myNum)
}