/* eslint-disable react/prop-types */
// Filter.js

const Filter = ({ persons, search, text, handelingDelete }) => {
  const filtered = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h4>{text}</h4>
      {filtered.map((person) => (
        <p key={person.name}>
          {person.name} : {person.number}
          <button onClick={() => handelingDelete(person.id)}>Delete</button>
        </p>
      ))}
    </>
  );
};

export default Filter;
