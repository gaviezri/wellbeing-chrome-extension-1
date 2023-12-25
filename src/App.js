import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import Timers from "./components/Timers";
import Header from "./components/Header";

function App() {
  const isAppOnKey = "isOn";
  const storageValue = getStorageValueAsBoolean(localStorage.getItem(isAppOnKey));

  const [isOn, setIsOn] = useState(storageValue);

  useEffect(() => {
    localStorage.setItem(isAppOnKey, isOn);
  }, [isOn]);
  
  useEffect(() => {
    window.addEventListener("unload", () => {
      // ! removed 
      localStorage.setItem(isAppOnKey, isOn);
    });
  }, []);

  return (
    <div className="App">
      <Header isOn={isOn} setIsOn={setIsOn} />
      {isOn && <Timers />}
    </div>
  );
}

export default App;

function getStorageValueAsBoolean(value) {
  return value === "true";
}
