package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("Welcome to time study of go_lang")

	// get the current time
	presentTime := time.Now()
	fmt.Println(presentTime)

	// fixed format values in the Format()
	fmt.Println(presentTime.Format("01-02-2006 15:04:05  Monday"))

	// create a date! just normal date lol
	createdDate := time.Date(2023, time.August, 24, 8, 16, 0, 0, time.UTC)
	fmt.Println(createdDate)

	// format the createdDate
	fmt.Println(createdDate.Format("01-02-2006 15:04:05 Monday"))

	/*
		- Check the GOOS
		- Prepare various builds for different OSs
		- Example for MACOS, linux and windows respectively.
			- $GOOS="darwin" go build
		 	- $GOOS="linux" go build
			- $GOOD="windows" go build
	*/
}
