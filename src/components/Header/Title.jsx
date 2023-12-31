import React from "react";
import styled from "styled-components";
import { getRandInt } from "../../utils";

export default function Title({ isOn }) {
  const titles = ["aquaman!", "drinky drinky", "water is life", "to you, from you", "hydrate!"];
  let titleText = isOn ? "intervals" : titles[getRandInt(0, titles.length)];

  return <Wrapper>{titleText}</Wrapper>;
}

const Wrapper = styled.h3`
  text-align: left;
  color: #004080;
  margin-right: 5px;
`;
