package main

import "fmt"

func main() {
	fmt.Println("Welcome to defer in go_lang");
	fmt.Println()

	// defer (-_-)
	// uses LIFO
	defer fmt.Println("World!");
	defer fmt.Println("One");
	defer fmt.Println("Two"); // after the myDefer()
	fmt.Println("Hello");
	// output: Hello Two One World!

	//defer function call
	myDefer(); // last in - first out
	// output: Hello 5 4 3 2 1 Two One World!
}

// defer (-_-)
// in functions
func myDefer() {
	for i:=1; i<6; i++ {
		defer fmt.Println(i);
	}
}