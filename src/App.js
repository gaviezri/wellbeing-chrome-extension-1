import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import React from "react";
import { StrechingIntervalMarks, waterIntervalMarks, getEpochTime } from "./utils";
import Timer from "./components/Timer/Timer";
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
     
    </div>
  );
}

export default App;
