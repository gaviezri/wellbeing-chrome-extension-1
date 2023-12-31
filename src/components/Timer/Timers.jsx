import React from 'react';

const Timers = ({isOn}) => {
    return (
        <>
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
        </>
    );
};

export default Timers;