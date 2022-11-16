import React from "react";
import "./styles/mainforecast.css";

import AppDate from "./AppDate";
import TemperatureNow from "./TemperatureNow";

import lowesttemp from "./media/weather-elements_Temperature-low.svg";
import highesttemp from "./media/weather-elements_Temperature-high.svg";

import weatherSun from "./media/weather-elements_Sun.svg";
import weatherMoon from "./media/weather-elements_Moon.svg";
import weatherCloudsD from "./media/weather-elements_Sun-clouds.svg";
import weatherCloudsN from "./media/weather-elements_Moon-clouds.svg";
import weatherClouds from "./media/weather-elements_Clouds.svg";
import weatherCloudsMore from "./media/weather-elements_Clouds-more.svg";
import weatherRain from "./media/weather-elements_Rain.svg";
import weatherStorm from "./media/weather-elements_Storm.svg";
import weatherSnow from "./media/weather-elements_Snow.svg";
import weatherWind from "./media/weather-elements_Wind.svg";

export default function MainWeatherInfo(props) {
  let weatherImg = props.data.icon;
  let weatherTodayImgSrc = "";
  let weatherTodayImgAlt = "";

  if (weatherImg === "01d") {
    weatherTodayImgSrc = weatherSun;
    weatherTodayImgAlt = "Sun";
  } else if (weatherImg === "01n") {
    weatherTodayImgSrc = weatherMoon;
    weatherTodayImgAlt = "Moon";
  } else if (weatherImg === "02d") {
    weatherTodayImgSrc = weatherCloudsD;
    weatherTodayImgAlt = "Sun and clouds";
  } else if (weatherImg === "02n") {
    weatherTodayImgSrc = weatherCloudsN;
    weatherTodayImgAlt = "Moon and clouds";
  } else if (weatherImg === "03d" || weatherImg === "03n") {
    weatherTodayImgSrc = weatherClouds;
    weatherTodayImgAlt = "Clouds";
  } else if (weatherImg === "04d" || weatherImg === "04n") {
    weatherTodayImgSrc = weatherCloudsMore;
    weatherTodayImgAlt = "Heavy clouds";
  } else if (
    weatherImg === "09d" ||
    weatherImg === "09n" ||
    weatherImg === "10d" ||
    weatherImg === "10n"
  ) {
    weatherTodayImgSrc = weatherRain;
    weatherTodayImgAlt = "Rain";
  } else if (weatherImg === "11d" || weatherImg === "11n") {
    weatherTodayImgSrc = weatherStorm;
    weatherTodayImgAlt = "Storm";
  } else if (weatherImg === "13d" || weatherImg === "13n") {
    weatherTodayImgSrc = weatherSnow;
    weatherTodayImgAlt = "Snow";
  } else if (weatherImg === "50d" || weatherImg === "50n") {
    weatherTodayImgSrc = weatherWind;
    weatherTodayImgAlt = "Wind";
  }

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
            <TemperatureNow celsius={props.data.tempC} />
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
              src={weatherTodayImgSrc}
              alt={weatherTodayImgAlt}
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
