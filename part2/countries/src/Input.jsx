/* eslint-disable react/prop-types */
const Input = ({ search, handleSearch }) => {
  return (
    <input
      type="text"
      value={search}
      onChange={(event) => handleSearch(event)}
    />
  );
};

export default Input;
