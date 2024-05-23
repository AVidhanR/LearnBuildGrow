package main

import "fmt"

func main() {
	fmt.Println("Welcome to functions in go_lang");

	// function call
	greeter();
	fmt.Println();

	// adder() call
	result := adder(1, 2);
	fmt.Println("The result of adder(2 parameters only) function: ", result);
	fmt.Println();

	// give more number of parameters
	// proAdder() with 4 params can ignore the string result with an _ (underscore)
	result, _ = proAdder(1, 2, 3, 4);
	fmt.Println("The result of proAdder(4 parameters) function: ", result);
	fmt.Println();

	// proAdder() with 6 params with 2 return values
	proResult, extra := proAdder(1, 2, 3, 4, 5, 6);
	fmt.Println("The result of proAdder(6 parameters) function: ", proResult, " ", extra);

	/*
	 func() {
  		// Function body here
	}
	// anonymous function declaration in go
	*/
	// create an anonymous function in go_lang
	greet := func() string {
		return "Hello, World!";
	}
	greet();

	// anonymous function - immediate execution
	// cannot call it outside the scope
	func() {
		fmt.Println("Anonymous function - immediate execution");
	}()
}

// create a function (declaration)
func greeter() {
	fmt.Println("Hello from GO");
}

// funcTION SYNTAX
/* 
 func func_name(para1 dataType, para2 dataType, ...) (returnType1, returnType2,...) { 
    // function body
 }
*/
func adder(num1 int, num2 int) int {
	return (num1 + num2);
}


// function with unknown number of parameters
func proAdder(numbers...int) (int, string) {
	total := 0;
	for number := range numbers {
		total += number
	}
	return total, "Pro Adder is awesome!"
}