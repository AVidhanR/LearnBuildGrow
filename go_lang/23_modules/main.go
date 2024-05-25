package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

/*
	here in order to run this run,

	$go build .

	$go run main.go
	* after running the above command go to http://localhost:4000/

	* tidy the mod file and also removes the unnecessary modules!
	$go mod tidy

	* to verify the mod file
	$go mod verify
*/

func main() {
	fmt.Println("Welcome to modules in go_lang")
	fmt.Println()

	// create a router
	router := mux.NewRouter()

	// only make sure to use the GET methods only
	router.HandleFunc("/", serverHome).Methods("GET")

	// if the given call fails it logs it out
	log.Fatal(http.ListenAndServe(":4000", router))
}

func serverHome(responseWrite http.ResponseWriter, request *http.Request) {
	responseWrite.Write([]byte("<h1>Welcome to go_lang</h1>"))
}

/*
	* to know what modules i'm using in my main.go
	$go list -m all

	* to know the all the versions of mux module from web
	$go list -m -versions github.com/gorilla/mux

	* to know the dependencies
	$go mod graph

	* to change the module name
	$go mod edit -module <new_module_name>

	* to get the vendor files - just like getting node_modules in nodeJs
	$go mod vendor

	* all the imported packages (vendor) are used from the web
	* in order to use the local vendor use the below command every time you run the main.go file
	$go run -mod=vendor main.go
*/
