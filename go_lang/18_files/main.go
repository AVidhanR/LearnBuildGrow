package main

import (
	"fmt"
	"io"
	"os"
)

func main() {
	fmt.Println("Welcome to files in go_lang");

	// some content into the file
	content := "This needs to go in a file - avidhanr.io"

	// create a new file using 'os' package
	file, err := os.Create("./vin.txt");

	// if errors handle them
	checkNilError(err);

	// returns the length of file
	length, err := io.WriteString(file, content);

	// if errors handle them
	checkNilError(err);

	fmt.Println("The length is: ", length);

	// close the file
	defer file.Close();

	// call the readFile()
	readFile("./vin.txt");
}

func readFile(fileName string) {

	// deprecated
	// _, err := ioutil.ReadFile(fileName);

	// use this instead
	data, err := os.ReadFile(fileName)
	checkNilError(err);

	// get the data itself - need to use string()
	// or else we get a series of numbers (>_<)
	fmt.Println("The data in the file: ", string(data));
}

// this is used many times,
// so made it a function
func checkNilError(err error) {
	if err != nil {
		panic(err);
	}
}