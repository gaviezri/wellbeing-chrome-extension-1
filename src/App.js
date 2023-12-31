import "./css/App.css";
import Header from "./components/Header/Header";
import { useState } from "react";
import React from "react";
import Timers from "./components/Timer/Timers";
import CONSTANTS from "./constants";

function App() {
  const storageValue = getStorageValueAsBoolean(localStorage.getItem(CONSTANTS.isAppOnKey));
  const [isOn, setIsOn] = useState(storageValue);

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
