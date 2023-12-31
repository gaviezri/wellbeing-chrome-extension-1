import React from "react";
import styled from "styled-components";
import { useState } from "react";
import CustomSlider from "../Slider/CustomSlider";

export default function Timer({ title, initValue, ...props }) {
  const [slilderValue, setslilderValue] = useState(initValue);
  return (
    <TimerContainer>
      <TopWrapper>
        <Label>{title}</Label>
        <Label>TIME</Label>
      </TopWrapper>
      <CustomSlider
        aria-label={title}
        defaultValue={initValue}
        {...props}
        onChange={(e, newValue) => {
          setslilderValue(newValue);
        }}
      />
    </TimerContainer>
  );
}

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Label = styled.label`
  text-align: center;
  color: #3188de;
`;
