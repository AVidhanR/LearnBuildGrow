package main

import (
	"fmt"
	"net/url"
)

// just an example url - it doesn't exist!
const myUrl string = "http://localhost:3000/go_lang/20_handling_url/main.html/learn?course=reactjs&user=vidhan&paymentid=sdfgsagi"

func main() {
	fmt.Println("Welcome to handling_urls in go_lang")
	fmt.Println()

	// url parsing
	result, _ := url.Parse(myUrl)

	// scheme: http (here)
	fmt.Println(result.Scheme)

	// host: 127.0.0.1:3000
	fmt.Println(result.Host)

	// path: /go_lang/20_handling_url/main.html
	fmt.Println(result.Path)

	// port: 3000
	fmt.Println(result.Port())

	// raw query: course=reactjs
	fmt.Println(result.RawQuery)
	fmt.Println()
	// stores the query in key-value pairs
	queryParameters := result.Query()
	fmt.Printf("The type of queryParameters (returned by result.Query()): %T\n", queryParameters)

	// can print it individually if you know the key
	fmt.Println(queryParameters["course"])
	fmt.Println()

	// iterate through to get all the params
	for parameter := range queryParameters {
		fmt.Println("Parameter is: ", parameter)
		fmt.Println("Parameter value is: ", queryParameters[parameter])
		fmt.Println()
	}

	// construct an url
	// follow the link
	partsOfUrl := &url.URL{
		Scheme:  "http",
		Host:    "localhost:3000",
		Path:    "/go_lang/20_handling_url/main.html",
		RawPath: "",
	}

	// partsOfUrl is a ref so cannot use string() function
	// instead use String() method, it works!
	fmt.Println(partsOfUrl.String())
}
