import React from "react";
import "./styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <h1>Weather App</h1>

      <form action="change-city">
        <input
          type="text"
          placeholder="Change city here"
          className="search-input"
          id="search-input"
          autocomplete="off"
        />
      </form>
    </div>
  );
}
