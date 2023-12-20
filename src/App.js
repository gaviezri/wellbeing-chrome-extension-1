import "./App.css";
import Header from "./components/Header/Header";
import { useState } from "react";
import React from "react";
import { StrechingIntervalMarks, waterIntervalMarks, getEpochTime } from "./utils";
import Interval from "./components/Interval/Interval";

function App() {
  const [launchTimeEpoch, setLaunchTimeEpoch] = useState(getEpochTime());

  return (
    <div className="App">
      <Header />
      <Interval
        title="Water"
        onChange={() => {}}
        getAriaValueText={(value) => `${value} m`}
        marks={waterIntervalMarks}
        min={15}
        max={120}
        value={30}
        step={15}
      />
      <Interval
        title="Streching"
        onChange={() => {}}
        getAriaValueText={(value) => `${value} h`}
        marks={StrechingIntervalMarks}
        min={0.5}
        max={4}
        value={2}
        step={0.5}
      />
    </div>
  );
}

export default App;
