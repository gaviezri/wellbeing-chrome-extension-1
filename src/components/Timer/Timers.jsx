import React from "react";
import { strechingIntervalMarks, waterIntervalMarks } from "../../utils";
import Timer from "./Timer";

const Timers = ({ isOn }) => {
  return (
    <>
      {isOn && (
        <Timer
          title="Water"
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
          marks={strechingIntervalMarks}
          min={0.5}
          max={4}
          initValue={2}
          step={0.5}
        />
      )}
    </>
  );
};

export default Timers;
