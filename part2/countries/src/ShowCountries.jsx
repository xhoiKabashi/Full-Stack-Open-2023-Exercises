/* eslint-disable react/prop-types */
const ShowCountries = ({ showCountries, setCity, weather }) => {
  setCity(showCountries.capital);
  return (
    <div>
      <ul>
        <h2>{showCountries.name?.common}</h2>
        <h4>Capita: {showCountries?.capital}</h4>
        <h4>Area: {showCountries?.area}</h4>
        <ul>
          <h4> Languages: </h4>
          {Object.keys(showCountries.languages).map((languageCode) => (
            <li key={languageCode}>{showCountries.languages[languageCode]}</li>
          ))}
        </ul>
        <img src={showCountries.flags?.png} alt="" />
        <h4>Weather in {weather.location.name}</h4>
        <h4>Temperature is {weather.current.temp_c} Celcuis</h4>
        <img src={weather.current.condition.icon} alt="" />
        <h4>{weather.current.condition.text} </h4>
        <h4> Wind {weather.current.wind_kph} KMP </h4>
      </ul>
    </div>
  );
};

export default ShowCountries;
