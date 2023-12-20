import React from "react";
import styled from "styled-components";
import Slider from "@mui/material/Slider";

export default function Interval({ title, onChange, ...props }) {
const [slilderValue, setslilderValue] = useState(props.value)

  return (
    <IntervalWrapper>
      <Label>{title}</Label>
      <Slider aria-label={title} {...props} onChange={()=>{}} />
    </IntervalWrapper>
  );
}

const IntervalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Label = styled.label`
    text-align: center;
`;
