package main

// perform this code only after running the web_server

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strings"
)

func main() {
	fmt.Println("Welcome to web_requests_handling in go_lang")
	fmt.Println()

	// call the GET here
	PerformGetRequest()

	// call the POST here
	PerformPostJSONRequest()

	// call the PostForm here
	PerformPostFormRequest()

}

// Public GET request
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
	// mostly used by go dev's
	var responseStr strings.Builder

	byteCount, err := responseStr.Write(content)
	handleError(err)

	fmt.Println("The Byte count is: ", byteCount)
	fmt.Println("The content is: ", responseStr.String())
}

// Public POST request
func PerformPostJSONRequest() {
	const myUrl string = "http://localhost:3000/post"

	// fake JSON payload
	requestBody := strings.NewReader(`
		{
			"course": "Lets go with go_lang",
			"price": 0,
			"platform": "avr.in"
		}
	`)

	response, err := http.Post(myUrl, "application/json", requestBody)
	handleError(err)
	defer response.Body.Close()

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
}

// Public PostForm request
func PerformPostFormRequest() {
	const myUrl string = "http://localhost:3000/postForm"

	// form data
	data := url.Values{}
	data.Add("firstName", "vidhan")
	data.Add("lastName", "reddy")
	data.Add("email", "itsvidhanreddy@go.dev")

	// Post Form request => response
	response, err := http.PostForm(myUrl, data)
	handleError(err)

	defer response.Body.Close()

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
}

// private or default
func handleError(err error) {
	if err != nil {
		panic(err)
	}
}
