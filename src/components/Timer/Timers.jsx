import { useState } from "react";
import Timer from "./Timer";
import styled from "styled-components";
import { waterConfig, strechConfig } from "../Slider/config";

const Timers = ({ isOn }) => {
  const [waterInterval, setWaterInterval] = useState(30);
  const [strechInterval, setStrechInterval] = useState(2);

  let finalWaterConfig = { ...waterConfig, initInterval: waterInterval };
  let finalStrechConfig = { ...strechConfig, initInterval: strechInterval };

  return (
    <TimersWrapper>
      {isOn && <Timer title="Water" {...finalWaterConfig} />}
      {isOn && <Timer title="Streching" {...finalStrechConfig} />}
    </TimersWrapper>
  );
};

export default Timers;

const TimersWrapper = styled.div`
  width: 85%;
`;
