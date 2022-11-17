import React, { useState } from "react";
import axios from "axios";
import "./styles/extraforecast.css";

import ForecastEach from "./ForecastEach";

export default function ExtraForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);

    return (
      <div className="ExtraForecast">
        <div className="container weather-forecast">
          <div className="row">
            <div className="col forecast-content bg-1">
              <ForecastEach data={forecast.daily[1]} />
            </div>
            <div className="col forecast-content bg-2">
              <ForecastEach data={forecast.daily[2]} />
            </div>
            <div className="col forecast-content bg-1">
              <ForecastEach data={forecast.daily[3]} />
            </div>
            <div className="col forecast-content bg-2">
              <ForecastEach data={forecast.daily[4]} />
            </div>
            <div className="col forecast-content bg-1">
              <ForecastEach data={forecast.daily[5]} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;

    const apiKey = "e3d1e11199319910b13b3e33fec22de5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
