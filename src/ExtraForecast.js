import React from "react";
import "./styles/extraforecast.css";

import lowesttemp from "./media/weather-elements_Temperature-low.svg";
import highesttemp from "./media/weather-elements_Temperature-high.svg";
import weatherimg from "./media/weather-elements_Sun.svg";

export default function ExtraForecast() {
  return (
    <div className="ExtraForecast">
      <div className="container weather-forecast">
        <div className="row">
          <div className="col forecast-content bg-1">
            <div className="forecast-date main">Mon</div>
            <div className="forecast-date">01/01</div>
            <img
              src={weatherimg}
              alt="Weather"
              className="future-forecast-image"
            />
            <br />
            <img
              src={highesttemp}
              alt="Highest temperature"
              className="highest-temperature-forecast"
            />
            <span className="highest-temperature-number forecast-temperature">
              12°C
            </span>
            <br />
            <img
              src={lowesttemp}
              alt="Lowest temperature"
              className="lowest-temperature-forecast"
            />
            <span className="lowest-temperature-number forecast-temperature">
              8°C
            </span>
          </div>
          <div className="col forecast-content bg-2">
            <div className="forecast-date main">Tue</div>
            <div className="forecast-date">02/01</div>
            <img
              src={weatherimg}
              alt="Weather"
              className="future-forecast-image"
            />
            <br />
            <img
              src={highesttemp}
              alt="Highest temperature"
              className="highest-temperature-forecast"
            />
            <span className="highest-temperature-number forecast-temperature">
              12°C
            </span>
            <br />
            <img
              src={lowesttemp}
              alt="Lowest temperature"
              className="lowest-temperature-forecast"
            />
            <span className="lowest-temperature-number forecast-temperature">
              8°C
            </span>
          </div>
          <div className="col forecast-content bg-1">
            <div className="forecast-date main">Wed</div>
            <div className="forecast-date">03/01</div>
            <img
              src={weatherimg}
              alt="Weather"
              className="future-forecast-image"
            />
            <br />
            <img
              src={highesttemp}
              alt="Highest temperature"
              className="highest-temperature-forecast"
            />
            <span className="highest-temperature-number forecast-temperature">
              12°C
            </span>
            <br />
            <img
              src={lowesttemp}
              alt="Lowest temperature"
              className="lowest-temperature-forecast"
            />
            <span className="lowest-temperature-number forecast-temperature">
              8°C
            </span>
          </div>
          <div className="col forecast-content bg-2">
            <div className="forecast-date main">Thu</div>
            <div className="forecast-date">04/01</div>
            <img
              src={weatherimg}
              alt="Weather"
              className="future-forecast-image"
            />
            <br />
            <img
              src={highesttemp}
              alt="Highest temperature"
              className="highest-temperature-forecast"
            />
            <span className="highest-temperature-number forecast-temperature">
              12°C
            </span>
            <br />
            <img
              src={lowesttemp}
              alt="Lowest temperature"
              className="lowest-temperature-forecast"
            />
            <span className="lowest-temperature-number forecast-temperature">
              8°C
            </span>
          </div>
          <div className="col forecast-content bg-1">
            <div className="forecast-date main">Fri</div>
            <div className="forecast-date">05/01</div>
            <img
              src={weatherimg}
              alt="Weather"
              className="future-forecast-image"
            />
            <br />
            <img
              src={highesttemp}
              alt="Highest temperature"
              className="highest-temperature-forecast"
            />
            <span className="highest-temperature-number forecast-temperature">
              12°C
            </span>
            <br />
            <img
              src={lowesttemp}
              alt="Lowest temperature"
              className="lowest-temperature-forecast"
            />
            <span className="lowest-temperature-number forecast-temperature">
              8°C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
