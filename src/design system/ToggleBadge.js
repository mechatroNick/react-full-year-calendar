import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme as themeGet, space, fontSize, propTypes } from "styled-system";
import theme from "./theme";

const ToggleBadge = styled.button`
  width: 100%;
  border-radius: ${props => props.theme.radius};
  border: 0;
  display: ${props => props.display};
  font-weight: ${props => props.theme.bold};
  font-family: inherit;
  cursor: pointer;
  background-color: ${props =>
    props.selected ? props.theme.colors[props.bg] : props.unSelectedBg};
  color: ${props => props.theme.colors[props.color]};
  ${space} ${fontSize};
  &:hover {
    background-color: ${props => props.theme.colors[props.bg]};
  }
`;

ToggleBadge.displayName = "ToggleBadge";

ToggleBadge.propTypes = {
  selected: PropTypes.bool,
  ...propTypes.space,
  ...propTypes.fontSize,
  ...propTypes.color,
  display: PropTypes.oneOf(["inline-block", "block", "inline"])
};

ToggleBadge.defaultProps = {
  selected: false,
  px: 2,
  py: 1,
  mx: 1,
  my: 1,
  fontSize: 0,
  theme: theme,
  color: "blue",
  bg: "lightBlue",
  unSelectedBg: "transparent",
  display: "inline-block"
};

export default ToggleBadge;