import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { Switch } from "@mui/material";
import Espresso from "../../images/whiteMug16.png";

const Header = ({ isOn, setIsOn }) => {
  return (
    <>
      <HeaderWrapper>
        <Title isOn={isOn} />
        <Switch
          checked={isOn}
          size="small"
          onChange={(e) => {
            setIsOn(e.target.checked);
            console.log("switch value: " + e.target.checked);
          }}
        ></Switch>
      </HeaderWrapper>
      {!isOn && (
        <InfoText>
          reminders are ready out-of-the-box with built-in sound when it's time to drink or strech. use sliders to
          adjust your desired intervals (default is water every 30 minutes, strech every 2 hours). If you find it useful
          you can buy me an espresso
          <a href="https://www.paypal.com/paypalme/gaviezri3" target="_blank" rel="noreferrer">
            <img src={Espresso} alt="espresso" style={{ marginLeft: "7px" }} />
          </a>
        </InfoText>
      )}
    </>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const InfoText = styled.p`
  color: rgb(191, 199, 213);
`;
