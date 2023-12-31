import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";

const CustomSlider = (props) => {
  const [interval, setInterval] = useState(localStorage.getItem(props.storageKey) ?? props.initInterval);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Slider
          valueLabelDisplay="auto"
          size="small"
          value={interval}
          {...props}
          onChange={(e) => {
            setInterval(e.target.value);
            localStorage.setItem(props.storageKey, e.target.value);
          }}
        />
      </ThemeProvider>
    </>
  );
};

export default CustomSlider;
