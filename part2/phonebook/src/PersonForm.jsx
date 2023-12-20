/* eslint-disable react/prop-types */
const PersonForm = ({
  addNewName,
  handleAddingName,
  handleAddingNumber,
  newName,
  newNumber,
}) => {
  return (
    <form onSubmit={addNewName}>
      <h3>Add Name and Number</h3>
      <div>
        Name:
        <input onChange={handleAddingName} value={newName} required />
        <div>
          number:{" "}
          <input onChange={handleAddingNumber} value={newNumber} required />
        </div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
