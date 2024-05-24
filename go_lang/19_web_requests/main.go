package main

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
)

// this is important make sure to open it before you are running this file.
const url = "http://127.0.0.1:3000/go_lang/19_web_requests/main.html"

func main() {
	fmt.Println("Welcome to web_requests in go_lang")
	fmt.Println()
	// HTTP - GET in go_lang
	response, err := http.Get(url)
	handleError(err)

	// don't forget to close it guys!
	defer response.Body.Close()

	// output: *http.Response
	fmt.Printf("Response is of type: %T\n", response)

	/*
		ioutil.ReadAll() is deprecated
		data bytes, err := ioutil.ReadAll(response.Body)
	*/

	// create a buffer to store the response body
	buffer := bytes.NewBuffer(nil)

	// copy the response body to the buffer
	n, err := io.Copy(buffer, response.Body)
	handleError(err)

	databytes := buffer.Bytes()

	fmt.Println("data in the web page: ", string(databytes), "number of characters: ", n)
}

func handleError(err error) {
	if err != nil {
		panic(err)
	}
}
