import "./App.css";
import React, { useState } from "react";
import axios from "axios";

const apiKey = "b53f6bd5a46cab6958ad3d105cf50f94";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=${apiKey}&units=metric`;

function showData(response) {
  console.log(response.data);
}

function App() {
  axios.get(apiUrl).then(showData);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello!</h1>
      </header>
    </div>
  );
}

export default App;
