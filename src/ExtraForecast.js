import React from "react";
import "./styles/extraforecast.css";

import lowesttemp from "./media/weather-elements_Temperature-low.svg";
import highesttemp from "./media/weather-elements_Temperature-high.svg";
import weatherimg from "./media/weather-elements_Sun.svg";

export default function ExtraForecast() {
  return (
    <div className="ExtraForecast">
      <div class="container weather-forecast">
        <div className="row">
          <div class="col forecast-content bg-1">
            <div class="forecast-date main">Mon</div>
            <div class="forecast-date">01/01</div>
            <img src={weatherimg} alt="Weather" class="future-forecast-image" />
            <br />
            <img
              src={highesttemp}
              alt="Highest temperature"
              class="highest-temperature-forecast"
            />
            <span class="highest-temperature-number forecast-temperature">
              12°C
            </span>
            <br />
            <img
              src={lowesttemp}
              alt="Lowest temperature"
              class="lowest-temperature-forecast"
            />
            <span class="lowest-temperature-number forecast-temperature">
              8°C
            </span>
          </div>
          <div class="col forecast-content bg-2">
            <div class="forecast-date main">Tue</div>
            <div class="forecast-date">02/01</div>
            <img src={weatherimg} alt="Weather" class="future-forecast-image" />
            <br />
            <img
              src={highesttemp}
              alt="Highest temperature"
              class="highest-temperature-forecast"
            />
            <span class="highest-temperature-number forecast-temperature">
              12°C
            </span>
            <br />
            <img
              src={lowesttemp}
              alt="Lowest temperature"
              class="lowest-temperature-forecast"
            />
            <span class="lowest-temperature-number forecast-temperature">
              8°C
            </span>
          </div>
          <div class="col forecast-content bg-1">
            <div class="forecast-date main">Wed</div>
            <div class="forecast-date">03/01</div>
            <img src={weatherimg} alt="Weather" class="future-forecast-image" />
            <br />
            <img
              src={highesttemp}
              alt="Highest temperature"
              class="highest-temperature-forecast"
            />
            <span class="highest-temperature-number forecast-temperature">
              12°C
            </span>
            <br />
            <img
              src={lowesttemp}
              alt="Lowest temperature"
              class="lowest-temperature-forecast"
            />
            <span class="lowest-temperature-number forecast-temperature">
              8°C
            </span>
          </div>
          <div class="col forecast-content bg-2">
            <div class="forecast-date main">Thu</div>
            <div class="forecast-date">04/01</div>
            <img src={weatherimg} alt="Weather" class="future-forecast-image" />
            <br />
            <img
              src={highesttemp}
              alt="Highest temperature"
              class="highest-temperature-forecast"
            />
            <span class="highest-temperature-number forecast-temperature">
              12°C
            </span>
            <br />
            <img
              src={lowesttemp}
              alt="Lowest temperature"
              class="lowest-temperature-forecast"
            />
            <span class="lowest-temperature-number forecast-temperature">
              8°C
            </span>
          </div>
          <div class="col forecast-content bg-1">
            <div class="forecast-date main">Fri</div>
            <div class="forecast-date">05/01</div>
            <img src={weatherimg} alt="Weather" class="future-forecast-image" />
            <br />
            <img
              src={highesttemp}
              alt="Highest temperature"
              class="highest-temperature-forecast"
            />
            <span class="highest-temperature-number forecast-temperature">
              12°C
            </span>
            <br />
            <img
              src={lowesttemp}
              alt="Lowest temperature"
              class="lowest-temperature-forecast"
            />
            <span class="lowest-temperature-number forecast-temperature">
              8°C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
