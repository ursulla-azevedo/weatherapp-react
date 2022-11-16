import React, { useState } from "react";

export default function TemperatureNow(props) {
  let [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="temperature-data">
        <span className="tempNow">{props.celsius}</span>
        <span className="tempUnit mainTemp">
          <a href="/" className="cUnit notClickable" id="cUnit">
            °C
          </a>{" "}
          |
          <a
            href="/"
            className="fUnit clickable"
            id="fUnit"
            onClick={convertToFahrenheit}
          >
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let tempF = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="temperature-data">
        <span className="tempNow">{tempF}</span>
        <span className="tempUnit mainTemp">
          <a
            href="/"
            className="cUnit clickable"
            id="cUnit"
            onClick={convertToCelsius}
          >
            °C
          </a>{" "}
          |
          <a href="/" className="fUnit notClickable" id="fUnit">
            °F
          </a>
        </span>
      </div>
    );
  }
}
