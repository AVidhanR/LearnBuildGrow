/* 
    web_server for the directories
    21_
    
    // '$' used to denote that its a command to run in a terminal
    // don't type in the '$' too
    $npm init
    $npm install express
    $npm install nodemon
*/
// type: "module"
import express from "express";

// initialize the app
const app = express();

// port number can be anything!
const port = 3000;

// used...
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get requests
app.get("/", (req, res) => {
  res.status(200).send("Welcome to AVR web server ");
});
app.get("/get", (req, res) => {
  res.status(200).json({ message: "Hello from AVR web server" });
});

// post requests
app.post("/post", (req, res) => {
  res.status(200).send(JSON.stringify(req.body));
});

// use postman, form-encode
app.post("/postForm", (req, res) => {
  res.status(200).send(JSON.stringify(req.body));
});

// listening
app.listen(port, () => {
  console.log(`This app is listening from http://localhost:${port}`);
});
