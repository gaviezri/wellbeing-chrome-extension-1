import React from "react";
import styled from "styled-components";
import Slider from "@mui/material/Slider";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        mark: {
          backgroundColor: "#368ce2",
        },
        markLabel: {
          color: "#368ce2",
        },
      },
    },
  },
});

export default function Timer({ title, initValue, ...props }) {
  let Identifier = title + "Interval";

  if (localStorage.getItem(Identifier) === null) {
    localStorage.setItem(Identifier, initValue);
  }

  return (
    <TimerContainer>
      <TopWrapper>
        <Label>{title}</Label>
        <Label>15:00</Label>
      </TopWrapper>
      <ThemeProvider theme={theme}>
        <Slider
          valueLabelDisplay="auto"
          size="small"
          aria-label={title}
          defaultValue={localStorage.getItem(Identifier) ?? initValue}
          {...props}
          onChange={(e, newValue) => {
            localStorage.setItem(Identifier, newValue);
          }}
          style={{ marginLeft: "20px", marginRight: "20px" }}
        />
      </ThemeProvider>
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
  margin: 5px;
`;
