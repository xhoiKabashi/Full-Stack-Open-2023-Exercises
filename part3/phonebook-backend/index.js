const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
app.use(morgan("dev"));

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
  {
    id: 5,
    name: "Xhoi Kabashi",
    number: "39-23-6423122",
  },
];

// Get HI
app.get("/", (request, response) => {
  response.send(`<h1>Hey</h1>`);
});

// Get all data
app.get("/api/persons", (request, response) => {
  response.json(persons);
});

// Get only one data
app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);

  const person = persons.find((p) => p.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).json({ error: "Person not found" });
  }
});
// Delete data

app.delete("/api/persons/:id", (request, response) => {
  const deletedID = Number(request.params.id);

  persons = persons.filter((p) => p.id !== deletedID);
  response.status(204).end();
});

// Create Data
const randomID = Math.floor(Math.random() * 1000000);

app.post("/api/persons", (request, response) => {
  const data = request.body;
  if (!data.name || !data.number) {
    return response.status(400).json({
      error: "Add data",
    });
  }

  const nameExists = persons.find((person) => person.name === data.name);
  const numberExists = persons.find((person) => person.number === data.number);
  if (nameExists) {
    return response.status(400).json({
      error: "Name  already exists",
    });
  }
  if (numberExists) {
    return response.status(400).json({
      error: "Number  already exists",
    });
  }

  const person = {
    id: randomID,
    name: data.name,
    number: data.number,
  };

  persons = persons.concat(person);
  console.log(data);
  response.json(person);
});

// Get info
app.get("/info", (request, response) => {
  const todayDate = new Date();

  response.send(`<h3>This page have info for 2 persons</h3> ${todayDate}`);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
