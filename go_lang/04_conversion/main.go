package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv" // new package - to convert
	"strings" // new package - for now used to remove spaces in input o_o
)

func main() {

	// same code as in 03_user_input/main.go
	fmt.Println("Welcome to the pizza app")
	fmt.Println("Please rate our pizza between 1 and 5")
	reader := bufio.NewReader(os.Stdin)
	input, _ := reader.ReadString('\n')
	fmt.Println("Thanks for the rating, ", input)

	// convert string to float64
	numberRating, err := strconv.ParseFloat(strings.TrimSpace(input), 64)

	// error handling
	if err != nil {
		fmt.Println(err)
	} else {
		// no errors? display it!
		fmt.Println(numberRating)
	}

}
