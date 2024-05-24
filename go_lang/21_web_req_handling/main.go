package main

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
	"strings"
)

func main() {
	fmt.Println("Welcome to web_requests_handling in go_lang")
	fmt.Println()

	// call it here
	PerformGetRequest()
}

// Public
func PerformGetRequest() {
	const myUrl string = "http://localhost:3000/get"

	// get the response from server
	response, err := http.Get(myUrl)
	handleError(err)

	defer response.Body.Close()

	fmt.Println("Status code: ", response.StatusCode)
	fmt.Println("Content length: ", response.ContentLength)

	/*
		ioutil.ReadAll() is deprecated
		data bytes, err := ioutil.ReadAll(response.Body)
	*/

	// create a buffer to store the response body
	buffer := bytes.NewBuffer(nil)

	// copy the response body to the buffer
	n, err := io.Copy(buffer, response.Body)
	handleError(err)

	content := buffer.Bytes()

	fmt.Println("data in the web page: ", string(content), "\nnumber of characters: ", n)

	fmt.Println()
	// 2nd way of doing the same thing as above
	// mostly used by go devs
	var responseStr strings.Builder

	byteCount, err := responseStr.Write(content)
	handleError(err)

	fmt.Println("The Byte count is: ", byteCount)
	fmt.Println("The content is: ", responseStr.String())
}

// private or default
func handleError(err error) {
	if err != nil {
		panic(err)
	}
}
