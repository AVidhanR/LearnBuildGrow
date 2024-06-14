import express from "express";

const app = express();
const port = 3000;

app.use(express.json());
let teaData = [];
let nextID = 1;

app.listen(port, () => {
  console.log(`Serer running @ ${port}`);
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
