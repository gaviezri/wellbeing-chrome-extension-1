import { useState } from "react";
import Timer from "./Timer";
import styled from "styled-components";
import { waterConfig, strechConfig } from "../Slider/config";

const Timers = ({ isOn }) => {
  return (
    <TimersWrapper>
      {isOn && <Timer title="Water" {...waterConfig} />}
      {isOn && <Timer title="Streching" {...strechConfig} />}
    </TimersWrapper>
  );
};

export default Timers;

const TimersWrapper = styled.div`
  width: 85%;
`;
