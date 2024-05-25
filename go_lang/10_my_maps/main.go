package main

import "fmt"

func main() {
	fmt.Println("Welcome to maps in go_lang")

	// create a map using make()
	progLangs := make(map[string]string)

	// add the key-value pairs
	progLangs["JS"] = "javascript"
	progLangs["PY"] = "python"
	progLangs["CPP"] = "C++"
	progLangs["RB"] = "ruby"

	fmt.Println("The languages ", progLangs)
	fmt.Println("The value of JS ", progLangs["JS"])

	// delete an element in maps
	// can do same in slices
	delete(progLangs, "RB")
	fmt.Println("The languages ", progLangs)

	// for loop in go for maps
	for key, value := range progLangs {
		fmt.Printf("For key %v, Value %v\n", key, value)
	}

	// lets ignore the keys by placing '_'
	for _, value := range progLangs {
		fmt.Printf("For key v, Value %v\n", value)
	}

}
