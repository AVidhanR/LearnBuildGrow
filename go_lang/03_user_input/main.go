package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	welcome := "Welcome to the pizza app\nPlease rate our pizza between 1 and 5"
	fmt.Println(welcome)

	fmt.Println("Enter the rating: ")
	reader := bufio.NewReader(os.Stdin)

	// input is read here V_V
	// comma ok || err err
	// the underscore part "stores" the errors
	input, _ := reader.ReadString('\n') // only single quotes!
	fmt.Println("Thanks for the rating, ", input)
}
