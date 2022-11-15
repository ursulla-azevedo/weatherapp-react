import "./styles/styles.css";
import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import MainForecast from "./MainForecast";
import Extras from "./Extras";
import Footer from "./Footer";

const apiKey = "b53f6bd5a46cab6958ad3d105cf50f94";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=${apiKey}&units=metric`;

function showData(response) {
  console.log(response.data);
}

function App() {
  axios.get(apiUrl).then(showData);
  return (
    <div className="App">
      <Header />
      <MainForecast />
      <Extras />
      <Footer />
    </div>
  );
}

export default App;
