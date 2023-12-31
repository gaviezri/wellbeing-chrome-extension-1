import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import React from "react";
import Timers from "./components/Timer/Timers";

function App() {
  const isAppOnKey = "isOn";
  const storageValue = getStorageValueAsBoolean(localStorage.getItem(isAppOnKey));

  const [isOn, setIsOn] = useState(storageValue);

  useEffect(() => {
    window.addEventListener("unload", () => {
      // ! removed
      localStorage.setItem(isAppOnKey, isOn);
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
