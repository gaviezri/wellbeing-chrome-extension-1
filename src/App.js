import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import React from "react";
import Timers from "./components/Timer/Timers";

function App() {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <Header isOn={isOn} setIsOn={setIsOn} />
      <Timers isOn={isOn} />
    </>
  );
}

export default App;
