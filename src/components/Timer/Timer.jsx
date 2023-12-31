import { useState } from "react";
import styled from "styled-components";
import CustomSlider from "../Slider/CustomSlider";

export default function Timer({ title, ...props }) {
  return (
    <TimerContainer>
      <TopWrapper>
        <Label>{title}</Label>
        <Label>TIME</Label>
      </TopWrapper>
      <CustomSlider {...props} />
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
