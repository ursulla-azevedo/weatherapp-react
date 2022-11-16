import "./styles/styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import MainForecast from "./MainForecast";
import ExtraForecast from "./ExtraForecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <MainForecast defaultCity="Lisbon" />
      <h3>Daily forecast</h3>
      <ExtraForecast />
      <Footer />
    </div>
  );
}

export default App;
