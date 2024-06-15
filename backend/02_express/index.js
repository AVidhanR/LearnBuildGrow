import "dotenv/config";
import logger from "./logger.js";
import morgan from "morgan";
import express from "express";

// create the app
const app = express();

// good practice to use env variables
// rather than direct value injection
const port = process.env.PORT || 4000;

app.use(express.json());
let teaData = [];
let nextID = 1;

// Define a string variable 'morganFormat' to specify the format of the log messages
// The format includes the HTTP method, URL, status code, and response time
const morganFormat = ":method :url :status :response-time ms";

// Use the 'morgan' middleware to log HTTP requests
// Pass the 'morganFormat' string as the first argument to specify the log format
// Pass an options object as the second argument to specify a custom stream for logging
// Define the 'stream' object with a 'write' method that will be called for each log message
// The 'write' method receives a single string argument 'message' containing the log message
// Construct a log object 'logObject' by splitting the 'message' string into an array
// Extract the method, url, status, and response time from the array and assign them to the 'logObject'
// Convert the 'logObject' to a JSON string using 'JSON.stringify()'
// Pass the JSON string to the 'logger.info()' method to log the message at the 'info' level
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

app.listen(port, () => {
  console.log(`Server running @ ${port}`);
});

//root
app.get("/", (req, res) => {
  res.send("This is Vin");
});

//sample login page
app.get("/login", (req, res) => {
  res.send("This is Login Page");
});

//add a new tea
app.post("/tea", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextID++, name, price };
  teaData.push(newTea);
  res.status(201).send(newTea);
});

//get all tea data
app.get("/tea", (req, res) => {
  res.send(teaData);
});

//get a tea with id
app.get("/tea/:id", (req, res) => {
  const tea = teaData.find((tea) => tea.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Tea not found");
  }
  res.status(202).send(tea);
});

//update tea with ID
app.put("/tea/:id", (req, res) => {
  const tea = teaData.find((tea) => tea.id === parseInt(req.params.id));
  if (!tea) {
    res.send(`Tea not found`);
  }
  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.status(200).send("Updated the tea data}");
});

//delete tea
app.delete("/tea/:id", (req, res) => {
  const index = teaData.findIndex((teaID) => teaID === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("Tea not found to delete");
  }
  teaData.splice(index, 1);
  res.status(204).send("deleted the tea ${index}");
});
