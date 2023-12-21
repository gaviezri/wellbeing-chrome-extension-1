import React from "react";
import styled from "styled-components";
export default function Header() {
  return (
    <>
      <H2Centered>Reminder Intervals</H2Centered>
    </>
  );
}

const H2Centered = styled.h2`
  text-align: center;
  color: #004080;
`;
