import React from "react";
import styled from "styled-components";

export default function Title({ isOn }) {
  let title = isOn ? "intervals" : "health assistant";

  return (
    <>
      <H2Centered>{title}</H2Centered>
    </>
  );
}

const H2Centered = styled.h3`
  text-align: left;
  color: #004080;
`;
