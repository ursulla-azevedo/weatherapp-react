import React, { useState } from "react";
import axios from "axios";
import "./styles/mainforecast.css";

import MainWeatherInfo from "./MainWeatherInfo";

export default function MainForecast(props) {
  let [weather, setWeather] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function showData(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      tempC: Math.round(response.data.main.temp),
      tempMax: Math.round(response.data.main.temp_max) + "°C",
      tempMin: Math.round(response.data.main.temp_min) + "°C",
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "ebe18902b827f1f3a74fe66d32a941fb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="content">
        <div className="header">
          <h1>Weather App</h1>

          <form action="change-city" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Change city here"
              className="search-input"
              id="search-input"
              autoComplete="off"
              onChange={handleCityChange}
            />
          </form>
        </div>
        <MainWeatherInfo data={weather} />
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
