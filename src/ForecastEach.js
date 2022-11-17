import React from "react";

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

export default function ForecastEach(props) {
  let weatherImg = props.data.weather[0].icon;
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

  function day() {
    let date = new Date(props.data.dt * 1000);

    let weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let weekDay = weekDays[date.getDay()];
    let day = date.getDate();

    if (day < 10) {
      day = `0${day}`;
    }

    let months = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    let month = months[date.getMonth()];

    return (
      <div>
        <div className="forecast-date main">{weekDay}</div>
        <div className="forecast-date">
          {day}/{month}
        </div>
      </div>
    );
  }

  return (
    <div>
      {day()}
      <img
        src={weatherTodayImgSrc}
        alt={weatherTodayImgAlt}
        className="future-forecast-image"
      />
      <br />
      <img
        src={highesttemp}
        alt="Highest temperature"
        className="highest-temperature-forecast"
      />
      <span className="highest-temperature-number forecast-temperature">
        {Math.round(props.data.temp.max)}°C
      </span>
      <br />
      <img
        src={lowesttemp}
        alt="Lowest temperature"
        className="lowest-temperature-forecast"
      />
      <span className="lowest-temperature-number forecast-temperature">
        {Math.round(props.data.temp.min)}°C
      </span>
    </div>
  );
}
