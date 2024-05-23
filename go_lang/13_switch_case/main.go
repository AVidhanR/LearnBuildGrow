package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	fmt.Println("Welcome to switch_case in go_lang");

	// rand.Seed(time.Now().UnixNano()) deprecated

	// new way of using rand
	source := rand.NewSource(time.Now().UnixNano())
	rng := rand.New(source)
	diceNumber := rng.Intn(6) + 1
	fmt.Println("Value ", diceNumber);

	switch diceNumber {
	case 1: fmt.Println("Dice value is 1 and you can open");
	case 2: 
		fmt.Println("You can move 2 spots");

		// its like opposite to break but only want to execute the next one
		fallthrough; 

	case 3: 
		fmt.Println("You can move 3 spots");
	case 4: 
		fmt.Println("You can move 4 spots");
	case 5: 
		fmt.Println("You can move 5 spots");
	case 6: 
		fmt.Println("You can move 6 spots and roll again");
	default: 
		fmt.Println("What was that!?");
	}
}