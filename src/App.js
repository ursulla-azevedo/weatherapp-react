import "./styles/styles.css";
import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import MainForecast from "./MainForecast";
import ExtraForecast from "./ExtraForecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <MainForecast />
      <h3>Daily forecast</h3>
      <ExtraForecast />
      <Footer />
    </div>
  );
}

export default App;
