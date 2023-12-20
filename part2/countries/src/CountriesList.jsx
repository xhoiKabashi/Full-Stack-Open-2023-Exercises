/* eslint-disable react/prop-types */
const CountriesList = ({ notifications, countries, handleShow }) => {
  return (
    <div>
      {notifications > 10 ? (
        <h3>Too many matches, specify another filter</h3>
      ) : (
        <ul>
          {countries.map((country) => (
            <li key={country.name.common}>
              {country.name.common}
              <button onClick={() => handleShow(country)}>Show</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountriesList;
