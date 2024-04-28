import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="weather-app">
      <App />
      <p className="foot">
        Open-source code on{" "}
        <a href="https://github.com/DulcePy/weather-react">GitHub</a>, by Dulce
        Figueredo
      </p>
    </div>
  </React.StrictMode>
);

reportWebVitals();
