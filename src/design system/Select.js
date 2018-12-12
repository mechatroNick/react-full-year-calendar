import React from "react";
import styled from "styled-components";
import { space, fontSize, width, color, style, textAlign } from "styled-system";

import theme from "./theme";
import Flex from "./Flex";
import Box from "./Box";

const SelectBase = styled.select`
  appearance:none;
  display: block;
  text-align: center;
  font-family: inherit;
  width: 100%;
  color: inherit;
  background-color: transparent;
  border-radius: ${props => props.theme.radii[props.radius]};
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.colors.gray};
  ${space} ${fontSize} &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.blue};
    box-shadow: 0 0 0 1px ${props => props.theme.colors.blue};
  }
`;

SelectBase.defaultProps = {
  theme: theme
};

const align = style("align");
const SelectMine = styled.select`
  display: block;
  text-align: center;
  ${space} ${width} ${color} ${align} ${textAlign} ${fontSize};
`;

SelectMine.defaultProps = {
  theme: theme
};

const Select = styled(props => <SelectMine {...props} />)``;

export default Select;
