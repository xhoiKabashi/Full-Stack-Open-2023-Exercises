/* eslint-disable react/prop-types */
const CountriesDetails = ({ countries, weather }) => {
  return (
    <div>
      {countries.map((country) => (
        <ul key={countries.name}>
          <h2>{country.name.common}</h2>
          <h4>Capita: {country.capital}</h4>
          <h4>Area: {country.area}</h4>
          <h4> Languages: </h4>
          <ul>
            {Object.keys(country.languages).map((languageCode) => (
              <li key={languageCode}>{country.languages[languageCode]}</li>
            ))}
          </ul>
          <img src={country.flags.png} alt="" />
          <h4>Weather in {weather.location.name}</h4>
          <h4>Temperature is {weather.current.temp_c} Celcuis</h4>
          <img src={weather.current.condition.icon} alt="" />
          <h4>{weather.current.condition.text} </h4>
          <h4> Wind {weather.current.wind_kph} KMP </h4>
        </ul>
      ))}
    </div>
  );
};

export default CountriesDetails;
