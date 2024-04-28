import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [data, setData] = useState(false);

  function SearchCity(event) {
    event.preventDefault();

    let apiKey = "210d99196a88b9257ed8cb3535a0a0c5";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(ShowWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function ShowWeather(response) {
    setData(true);
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  let form = (
    <div className="form">
      <form onSubmit={SearchCity}>
        <input
          className="search-city"
          type="search"
          placeholder="Search a city..."
          autoComplete="off"
          onChange={updateCity}
        />
        <input className="search-button" type="submit" value="Search" />
      </form>
    </div>
  );

  if (data) {
    return (
      <div className="weather-container">
        {form}
        <div className="weather-details">
          <p>City: {weather.name}</p>
          <p>Temperature: {Math.round(weather.temperature)} °C</p>
          <p>Description: {weather.description}</p>
          <p>Humidity: {weather.humidity} %</p>
          <p>Wind: {weather.wind} km/h</p>

          <img src={weather.icon} alt={weather.description} />
        </div>
        <hr></hr>
      </div>
    );
  } else {
    return form;
  }
}

export default App;
