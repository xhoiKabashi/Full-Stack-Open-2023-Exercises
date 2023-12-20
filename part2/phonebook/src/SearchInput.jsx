/* eslint-disable react/prop-types */
const SearchInput = ({ search, handleSearch, text }) => {
  return (
    <>
      <h4>{text}:</h4>
      <input
        type="text"
        value={search}
        onChange={(event) => handleSearch(event)}
      />
    </>
  );
};

export default SearchInput;
