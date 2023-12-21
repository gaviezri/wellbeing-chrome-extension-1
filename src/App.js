import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import React from "react";
import { StrechingIntervalMarks, waterIntervalMarks, getEpochTime } from "./utils";
import Timer from "./components/Timer";
import { Switch } from "@mui/material";

function App() {
  const [launchTimeEpoch, setLaunchTimeEpoch] = useState(getEpochTime());
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="App">
      <Switch
        size="small"
        onChange={(e) => {
          setIsOn(e.target.checked);
        }}
      ></Switch>
      <Header />
      {isOn && (
        <Timer
          title="Water"
          time0={launchTimeEpoch}
          setTime0={() => {setLaunchTimeEpoch(getEpochTime())}}
          getAriaValueText={(value) => `${value} m`}
          marks={waterIntervalMarks}
          min={15}
          max={120}
          initValue={30}
          step={15}
        />
      )}
      {isOn && (
        <Timer
          title="Streching"
          onChange={() => {}}
          getAriaValueText={(value) => `${value} h`}
          marks={StrechingIntervalMarks}
          min={0.5}
          max={4}
          initValue={2}
          step={0.5}
        />
      )}
    </div>
  );
}

export default App;
