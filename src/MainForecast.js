import React, { useState } from "react";
import axios from "axios";
import "./styles/mainforecast.css";

import lowesttemp from "./media/weather-elements_Temperature-low.svg";
import highesttemp from "./media/weather-elements_Temperature-high.svg";
import currentweatherimg from "./media/weather-elements_Sun-clouds.svg";

export default function MainForecast() {
  let [weather, setWeather] = useState({ ready: false });

  function showData(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      tempC: Math.round(response.data.main.temp),
      tempMax: Math.round(response.data.main.temp_max) + "°C",
      tempMin: Math.round(response.data.main.temp_min) + "°C",
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weather.ready) {
    return (
      <div className="content">
        <div className="header">
          <h1>Weather App</h1>

          <form action="change-city">
            <input
              type="text"
              placeholder="Change city here"
              className="search-input"
              id="search-input"
              autoComplete="off"
            />
          </form>
        </div>
        <h2>
          {weather.city}, {weather.country}
        </h2>
        <button className="current-location">Search current location</button>
        <br />
        <div className="container weather-today">
          <div className="row">
            <div className="col-6 block-weather-now">
              <div className="status-top highlight" id="dateToday">
                <strong>Friday</strong> <br />
                July 1st, 2022 | 09:00
              </div>
              <div className="temperature-data">
                <span className="tempNow">{weather.tempC}</span>
                <span className="tempUnit mainTemp">
                  <span className="cUnit notClickable" id="cUnit">
                    °C
                  </span>{" "}
                  |
                  <span href="#" className="fUnit clickable" id="fUnit">
                    °F
                  </span>
                </span>
              </div>
              <div className="current-weather-details">
                <span className="weather-status text-capitalize">
                  {weather.description}
                </span>{" "}
                <br />
                <img
                  src={highesttemp}
                  alt="Highest temperature"
                  className="highest-temperature-today"
                />
                <span
                  className="highest-temperature-number current-temperature"
                  id="highestToday"
                ></span>
                <span className="unit1">{weather.tempMax}</span>
                <img
                  src={lowesttemp}
                  alt="Lowest temperature"
                  className="lowest-temperature-today"
                />
                <span
                  className="lowest-temperature-number current-temperature"
                  id="lowestToday"
                ></span>
                <span className="unit2">{weather.tempMin}</span>
              </div>
            </div>
            <div className="col-6 current-weather-img-block">
              <img
                src={currentweatherimg}
                alt="Sun and clouds"
                className="current-weather-image"
              />
            </div>
          </div>
        </div>
        <div className="extras">
          <div className="more-info">
            <span className="extra-item">
              <i className="fa-solid fa-wind extras-icon"></i>
              <span className="extra-wind">Wind: {weather.wind} km/h</span>
            </span>
            |
            <span className="extra-item">
              <i className="fa-solid fa-droplet extras-icon"></i>
              <span className="extra-humidity">
                Humidity: {weather.humidity}%
              </span>
            </span>
          </div>
          <br />
        </div>
      </div>
    );
  } else {
    const apiKey = "ebe18902b827f1f3a74fe66d32a941fb";
    let city = "Lisbon";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showData);

    return "Loading...";
  }
}
