package main

import "fmt"

// can't use it here...
// noVar := 1000

// this is a constant available everywhere!
// it's like using a public variable
// In go_lang, constants are declared in PascalCase
const LoginToken = 3000

func main() {

	/*
		uint8       the set of all unsigned  8-bit integers (0 to 255)
		uint16      the set of all unsigned 16-bit integers (0 to 65535)
		uint32      the set of all unsigned 32-bit integers (0 to 4294967295)
		uint64      the set of all unsigned 64-bit integers (0 to 18446744073709551615)

		int8        the set of all signed  8-bit integers (-128 to 127)
		int16       the set of all signed 16-bit integers (-32768 to 32767)
		int32       the set of all signed 32-bit integers (-2147483648 to 2147483647)
		int64       the set of all signed 64-bit integers (-9223372036854775808 to 9223372036854775807)

		float32     the set of all IEEE-754 32-bit floating-point numbers
		float64     the set of all IEEE-754 64-bit floating-point numbers

		complex64   the set of all complex numbers with float32 real and imaginary parts
		complex128  the set of all complex numbers with float64 real and imaginary parts

		byte        alias for uint8
		rune        alias for int32
	*/

	// string type
	var username string = "Vidhan"
	fmt.Println(username)
	fmt.Printf("Variable type is: %T \n\n", username)

	// bool type
	var isLogged bool = true
	fmt.Println(isLogged)
	fmt.Printf("Variable type is: %T \n\n", isLogged)

	// unsigned 8-bit integer
	var smallValue uint8 = 255 // >255 cannot be taken you know the reason
	fmt.Println(smallValue)
	fmt.Printf("Variable type is: %T \n\n", smallValue)

	var smallFloat float64 = 255.3423525243343
	fmt.Println(smallFloat)
	fmt.Printf("Variable type is: %T \n\n", smallFloat)

	// default values and aliases
	var intVariable int
	fmt.Println(intVariable)
	fmt.Printf("Variable type is: %T \n\n", intVariable)

	var stringVariable string
	fmt.Println(stringVariable)
	fmt.Printf("Variable type is: %T \n\n", stringVariable)

	// implicit type assigning by lexer
	var implicitVar = "Vidhan Reddy A"
	fmt.Println(implicitVar)

	// no var style - only inside a method,
	// outside it is banned!
	userCount := 2000
	fmt.Println(userCount)
	fmt.Println("")
	fmt.Println(`This is a constant: `, LoginToken)
}
