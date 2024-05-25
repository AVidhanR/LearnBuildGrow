package main

import (
	"encoding/json"
	"fmt"
)

type course struct {
	Name     string   `json:"Course Name"` // alias
	Price    int      // leave it be
	Platform string   `json:"Website"`        // alias
	Password string   `json:"-"`              // don't wanna show it!
	Tags     []string `json:"tags,omitempty"` // if nil => omit
}

func main() {
	fmt.Println("Welcome to JSON in go_lang")

	// call the encoder here
	EncodeJSON()

	// call the decoder here
	DecodeJSON()
}

// Public json encoder
func EncodeJSON() {

	// JSON data
	myCourses := []course{
		{
			"ReactJs BootCamp",
			299,
			"avrlearn.in",
			"abc123",
			[]string{"web-dev", "js"},
		},
		{
			"MERN BootCamp",
			399,
			"avrlearn.in",
			"def123",
			[]string{"web-dev", "full stack"},
		},
		{
			"Angular BootCamp",
			199,
			"avrlearn.in",
			"ghi123",
			nil,
		},
	}

	// package this data as JSON data
	finalJSON, err := json.MarshalIndent(myCourses, "", "  ") // prefix
	handleError(err)

	fmt.Printf("%s\n", finalJSON)
}

// Public json decoder
func DecodeJSON() {

	// sample json data
	jsonData := []byte(`
		{
			"Course Name": "ReactJs BootCamp",
			"Price": 299,
			"Website": "avrlearn.in",
			"tags": [
				"web-dev",
				"js"
			]
  		}
	`)

	var myCourse course

	validateJSON := json.Valid(jsonData)

	if validateJSON {
		fmt.Println("JSON is Valid")
		fmt.Println()

		// un marshall it
		json.Unmarshal(jsonData, &myCourse)
		fmt.Printf("%#v\n", myCourse)
	} else {
		fmt.Println("JSON was not valid")
	}
	fmt.Println()

	// in some cases,
	// you want to add data to key value
	var myOnlineData map[string]interface{}
	json.Unmarshal(jsonData, &myOnlineData)
	fmt.Printf("%#v\n", myOnlineData)

	// iterate through the JSON data
	for key, value := range myOnlineData {
		fmt.Printf("The Key is %v and Value is %v and the type is %T\n", key, value, value)
	}
}

// default or private
func handleError(err error) {
	if err != nil {
		panic(err)
	}
}
