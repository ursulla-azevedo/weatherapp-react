import React from "react";
import "./styles/mainforecast.css";

import lowesttemp from "./media/weather-elements_Temperature-low.svg";
import highesttemp from "./media/weather-elements_Temperature-high.svg";
import currentweatherimg from "./media/weather-elements_Sun-clouds.svg";

export default function MainForecast() {
  return (
    <div className="content">
      <h2>Lisbon, Portugal</h2>
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
              <span className="tempNow">23ºC</span>
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
              <span className="weather-status">Mostly sunny</span> <br />
              <img
                src={highesttemp}
                alt="Highest temperature"
                className="highest-temperature-today"
              />
              <span
                className="highest-temperature-number current-temperature"
                id="highestToday"
              ></span>
              <span className="unit1">°C</span>
              <img
                src={lowesttemp}
                alt="Lowest temperature"
                className="lowest-temperature-today"
              />
              <span
                className="lowest-temperature-number current-temperature"
                id="lowestToday"
              ></span>
              <span className="unit2">°C</span>
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
    </div>
  );
}
