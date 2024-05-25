package main

import (
	"fmt"
	"sort"
)

func main() {
	fmt.Println("Welcome to slices in go_lang")

	// create a slice
	var fruitList = []string{"Tomato", "Apple", "Peaches"}
	fmt.Printf("The type of fruitList is %T\n", fruitList)

	// update the slice or add items into the slice
	fruitList = append(fruitList, "Mango", "Banana")
	fmt.Println("After appending two values ", fruitList)

	// 2nd method-s
	// leaves the index '0' and gives from 1 to the end
	fmt.Println("fruitList[1:] ", append(fruitList[1:]))

	// sub-way
	fmt.Println("fruitList[1:3] ", append(fruitList[1:3]))

	// sub-way
	fmt.Println("fruitList[:3] ", append(fruitList[:3]))

	// create a slice using make()
	highScore := make([]int, 4)
	highScore[0] = 10
	highScore[1] = 40
	highScore[2] = 30
	highScore[3] = 20

	// we can add like this
	highScore = append(highScore, 50, 60, 70)
	fmt.Println("The dynamic slice ", highScore)

	// sort a slice - this is not achieved in arrays
	sort.Ints(highScore)

	// sorted the slice? - check it like below
	fmt.Println("Is the slice sorted? ", sort.IntsAreSorted(highScore))

	fmt.Println("The sorted slice is ", highScore)

	// sorted the slice? - check it like below
	fmt.Println("Is the slice sorted? ", sort.IntsAreSorted(highScore))

	/*
		Remove an element from a slice
	*/
	// can create like this!
	courses := []string{"ruby", "react", "vue", "javascript", "java", "python", "nodeJs"}
	fmt.Println("The courses ", courses)
	index := 2

	// removes "vue" and appends the two individual slices into one
	courses = append(courses[:index], courses[index+1:]...)
	fmt.Println("After removing \"vue\" ", courses)
}
