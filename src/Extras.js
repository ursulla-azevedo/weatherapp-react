import React from "react";
import "./styles/extras.css";

export default function Extras() {
  return (
    <div className="extras">
      <div className="more-info">
        <span className="extra-item">
          <i className="fa-solid fa-wind extras-icon"></i>
          <span className="extra-wind">Wind: 23 km/h</span>
        </span>
        |
        <span className="extra-item">
          <i className="fa-solid fa-droplet extras-icon"></i>
          <span className="extra-humidity">Humidity: 63%</span>
        </span>
      </div>
      <br />
    </div>
  );
}
