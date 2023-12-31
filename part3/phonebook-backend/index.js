const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PhoneBook = require("./modules/phoneBook");
const config = require("./utils/config");
const logger = require("./utils/logger");

const app = express();

// USE ERRORS MIDLEWARE
const errorHandler = (error, request, response, next) => {
  logger.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Get HI
app.get("/", (request, response) => {
  response.send(`<h1></h1>`);
});

// Get all data
app.get("/api/persons", (request, response, next) => {
  PhoneBook.find({})
    .then((phoneBook) => {
      if (phoneBook) {
        response.json(phoneBook);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

// Get only one data
app.get("/api/persons/:id", (request, response, next) => {
  PhoneBook.findById(request.params.id)
    .then((phoneBook) => {
      if (phoneBook) {
        response.json(phoneBook);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});
// Delete data

app.delete("/api/persons/:id", (request, response) => {
  const deletedID = request.params.id;

  PhoneBook.findByIdAndDelete(deletedID)
    .then((deletedPerson) => {
      if (!deletedPerson) {
        return response.status(404).json({
          error: "Person not found",
        });
      }

      console.log(`Deleted person with ID: ${deletedID}`);
      response.status(204).end();
    })
    .catch((error) => {
      logger.error("Error deleting person:", error);
      response.status(500).json({
        error: "Internal server error",
      });
    });
});

app.post("/api/persons", (request, response, next) => {
  const data = request.body;

  if (!data.name || !data.number) {
    return response.status(400).json({
      error: "Add data",
    });
  }

  PhoneBook.findOne({ name: data.name })
    .then((existingName) => {
      if (existingName) {
        // Update the number for the existing name
        return PhoneBook.findOneAndUpdate(
          { name: data.name },
          { number: data.number },
          { new: true }
        );
      } else {
        // Create a new entry
        const phoneBook = new PhoneBook({
          name: data.name,
          number: data.number,
        });
        return phoneBook.save();
      }
    })
    .then((updatedNote) => {
      if (updatedNote) {
        logger.info("Updated", updatedNote);
        response.json(updatedNote);
      } else {
        logger.info(`Added ${data.name} number ${data.number} to phonebook`);
        response.json({ message: "New entry added" });
      }
    })
    .catch((error) => next(error));
});

// USE ERRORS MIDLEWARE
app.use(unknownEndpoint);
app.use(errorHandler);

// eslint-disable-next-line no-undef

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
