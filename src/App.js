import "./App.css";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import React from "react";
import Timers from "./components/Timer/Timers";
import CONSTANTS from "./constants";

function App() {

  const storageValue = getStorageValueAsBoolean(localStorage.getItem(CONSTANTS.isAppOnKey));

  const [isOn, setIsOn] = useState(storageValue);

  useEffect(() => {
    window.addEventListener("unload", () => {
      // ! removed
      localStorage.setItem(CONSTANTS.isAppOnKey, isOn);
      console.log("app-on set to" + isOn);
    });
  }, []);

  return (
    <div className="App">
      <Header isOn={isOn} setIsOn={setIsOn} />
      <Timers isOn={isOn} />
    </div>
  );
}

export default App;

function getStorageValueAsBoolean(value) {
  return value === "true";
}
