package main

import (
	"fmt"
	"net/http"
)

// this might defer for you guys - make sure replace the link with yours
const url = "http://127.0.0.1:3000/go_lang/19_web_requests/main.html"

func main() {
	fmt.Println("Welcome to web_requests in go_lang")
	fmt.Println()
	// HTTP - GET in go_lang
	response, err := http.Get(url)
	handleError(err)

	// don't forget to close it guys!
	defer response.Body.Close()

	fmt.Printf("Response is of type: %T\n", response)
}

func handleError(err error) {
	if err != nil {
		panic(err)
	}
}
