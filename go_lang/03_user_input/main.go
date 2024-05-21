package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	welcome := "Welcome to User Input"
	fmt.Println(welcome)

	fmt.Println("Enter the rating: ")
	reader := bufio.NewReader(os.Stdin)

	// input is read here V_V 
	// comma ok || err err
	// the underscore part "stores" the errors
	input, _ := reader.ReadString('\n') // only single quotes!
	fmt.Println("Thanks for the rating...", input)
}