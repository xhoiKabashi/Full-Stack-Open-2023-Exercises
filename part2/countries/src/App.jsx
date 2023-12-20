import { useEffect, useState } from "react";
import axios from "axios";
import ShowCountries from "./ShowCountries";
import CountriesDetails from "./CountriesDetails";
import CountriesList from "./CountriesList";
import Input from "./Input";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [notifications, setNotifications] = useState(0);
  const [showCountries, setShowCountries] = useState("");
  const [city, setCity] = useState("Tirana");
  const [weather, setWeather] = useState("");

  const api_key = import.meta.env.VITE_SOME_KEY;

  const weatherApi = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`;

  useEffect(() => {
    axios.get(weatherApi).then((response) => {
      const data = response.data;
      setWeather(data);
    });
  }, [weatherApi]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setShowCountries("");
  };

  const handleShow = (country) => {
    setShowCountries(country);
  };

  useEffect(() => {
    // Check if the search term is at least two characters long
    if (search.length >= 2) {
      axios
        .get(`https://restcountries.com/v3.1/name/${search}`)
        .then((response) => {
          const data = response.data;

          // Set the total number of matches directly
          setNotifications(data.length);

          setCountries(data);
          setCity(data[0].capital[0]);
        })
        .catch((error) => {
          console.error("Error fetching data", error);
          setCountries([]);
          setNotifications(0); // Reset notifications on error
          setCity("");
        });
    } else {
      // Clear countries when search term is less than two characters
      setCountries([]);
      setNotifications(0); // Reset notifications when search term is too short
    }
  }, [search]);

  return (
    <>
      <Input search={search} handleSearch={handleSearch} />
      {notifications > 1 ? (
        <CountriesList
          notifications={notifications}
          countries={countries}
          handleShow={handleShow}
        />
      ) : (
        <CountriesDetails countries={countries} weather={weather} />
      )}
      {showCountries && (
        <ShowCountries
          showCountries={showCountries}
          setCity={setCity}
          weather={weather}
        />
      )}
    </>
  );
};

export default App;
