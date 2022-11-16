import React from "react";

import AppDate from "./AppDate";

import lowesttemp from "./media/weather-elements_Temperature-low.svg";
import highesttemp from "./media/weather-elements_Temperature-high.svg";
import currentweatherimg from "./media/weather-elements_Sun-clouds.svg";

export default function MainWeatherInfo(props) {
  return (
    <div>
      <h2>
        {props.data.city}, {props.data.country}
      </h2>
      <button className="current-location">Search current location</button>
      <br />
      <div className="container weather-today">
        <div className="row">
          <div className="col-6 block-weather-now">
            <div className="status-top highlight" id="dateToday">
              <AppDate date={props.data.date} />
            </div>
            <div className="temperature-data">
              <span className="tempNow">{props.data.tempC}</span>
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
                {props.data.description}
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
              <span className="unit1">{props.data.tempMax}</span>
              <img
                src={lowesttemp}
                alt="Lowest temperature"
                className="lowest-temperature-today"
              />
              <span
                className="lowest-temperature-number current-temperature"
                id="lowestToday"
              ></span>
              <span className="unit2">{props.data.tempMin}</span>
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
            <span className="extra-wind">Wind: {props.data.wind} km/h</span>
          </span>
          |
          <span className="extra-item">
            <i className="fa-solid fa-droplet extras-icon"></i>
            <span className="extra-humidity">
              Humidity: {props.data.humidity}%
            </span>
          </span>
        </div>
        <br />
      </div>
    </div>
  );
}
