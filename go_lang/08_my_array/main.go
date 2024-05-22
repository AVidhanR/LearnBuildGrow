package main

import "fmt"

func main() {
	fmt.Println("Welcome to arrays in go_lang")

	// mention the array size explicitly! 
	// don't forget it!
	var fruitList [4]string;
	fruitList[0] = "Peach"
	fruitList[1] = "Tomato"
	fruitList[2] = "Apple"

	// print the array
	fmt.Println("Fruits List: ", fruitList)
	// give the length of array
	fmt.Println("Fruits List Length: ", len(fruitList))

	// initialize it during the declaration
	var vegList = [5]string{"Potato", "Beans", "Onions"};
	fmt.Println("Vegetable List: ", vegList);
	fmt.Println("Vegetable List length: ", len(vegList));
}