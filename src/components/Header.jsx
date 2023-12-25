import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { Switch } from "@mui/material";

const Header = ({isOn, setIsOn}) => {
  return (
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
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
