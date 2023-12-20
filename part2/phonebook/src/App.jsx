// App.js
import { useEffect, useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import SearchInput from "./SearchInput";
import apiService from "./services/api";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [addOrUpdateTrigger, setAddOrUpdateTrigger] = useState(0);
  const [deleteTrigger, setDeleteTrigger] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [color, setColor] = useState("green");

  useEffect(() => {
    apiService.getAll().then((response) => {
      const data = response.data;
      setPersons(data);
    });
  }, [addOrUpdateTrigger, deleteTrigger]);

  const handleAddingName = (event) => {
    setNewName(event.target.value);
  };

  const handleAddingNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const addNewName = async (event) => {
    event.preventDefault();

    try {
      const existingPerson = persons.find((person) => person.name === newName);

      if (existingPerson) {
        const confirmUpdate = window.confirm(
          `${newName} is already in the phonebook. Do you want to update the phone number?`
        );

        if (!confirmUpdate) {
          return;
        }

        const updatedPerson = { ...existingPerson, number: newNumber };

        await apiService.update(existingPerson.id, updatedPerson);
        setErrorMessage(`Contact updated successfully`);
      } else {
        const newPerson = { name: newName, number: newNumber };
        await apiService.create(newPerson);
        setErrorMessage(`Contact ${newPerson.name} added successfully`);
      }

      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);

      setNewName("");
      setNewNumber("");
      setAddOrUpdateTrigger(addOrUpdateTrigger + 1); // Trigger useEffect
    } catch (error) {
      setColor("red");
      setErrorMessage(`Operation failed contact does not exist`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
    }
  };

  const handelingDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        await apiService.deletePerson(id);
        setDeleteTrigger(deleteTrigger + 1); // Increment deleteTrigger to trigger useEffect

        setErrorMessage("Contact deleted successfully");
        setTimeout(() => {
          setErrorMessage(null);
        }, 2000);
      } catch (error) {
        setColor("red");
        console.error("Operation failed contact does not exist");

        setErrorMessage("Operation failed");
        setTimeout(() => {
          setErrorMessage(null);
        }, 2000);
      }
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} color={color} />

      <SearchInput search={search} handleSearch={handleSearch} text="Search" />
      <PersonForm
        addNewName={addNewName}
        handleAddingName={handleAddingName}
        handleAddingNumber={handleAddingNumber}
        newName={newName}
        newNumber={newNumber}
      />

      <Filter
        handelingDelete={handelingDelete}
        persons={persons}
        search={search}
        text="Contact Numbers:"
      />
    </div>
  );
};

export default App;
