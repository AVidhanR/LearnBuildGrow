package main

import "fmt"

func main() {
	fmt.Println("Welcome to loops in go_lang");

	// create a slice
	days := []string{"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}
	fmt.Println(days)
	fmt.Println();

	// for loop
	// no pre-increment operator
	for i:=0; i<len(days); i++ {
		fmt.Println(days[i]);
	}
	fmt.Println();

	// for loops using range
	for i := range days {
		fmt.Println(days[i]);
	}
	fmt.Println();

	// for each loop
	for index, day := range days {
		fmt.Printf("The index id %v and value is %v\n", index, day);
	}
	fmt.Println();

	// for each loop with ignore
	for _, day := range days {
		fmt.Printf("No index o_o needed only value %v\n", day);
	}
	fmt.Println();

	// control statements
	rogueValue := 1
	for ; rogueValue<10; rogueValue++ {

		// continue
		if rogueValue == 3 {
			continue;
		}

		// goto demonstration
		if rogueValue == 4 {
			goto avr;
		}
		
		// break
		if rogueValue == 5 {
			break;
		}

		fmt.Println(rogueValue);
	}

	// goto statement
	avr:
		fmt.Println("Jumping at avr statement on rogueValue: 2");
}