import React from "react";
import Timer from "./Timer";
import { strechingIntervalMarks, waterIntervalMarks } from "../utils";
const Timers = () => {
  return (
    <>
      <Timer
        title="drink"
        valueLabelFormat={(val) => `${val} mins`}
        marks={waterIntervalMarks}
        min={15}
        max={120}
        initValue={30}
        step={15}
      />
      <Timer
        title="strech"
        valueLabelFormat={(val) => `${val} hrs`}
        marks={strechingIntervalMarks}
        min={0.5}
        max={4}
        initValue={2}
        step={0.5}
      />
    </>
  );
};

export default Timers;
