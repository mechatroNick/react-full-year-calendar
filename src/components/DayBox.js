import React from "react";
import styled from "styled-components";
import { eventColors } from "../logic/constant";
import { Box } from "../design system";

const DayBox = styled(Box)`
  background-color: ${props => eventColors.dayBoxBg[props.specialEvent]};
  color: ${props => eventColors.color[props.specialEvent]};
  border-radius: ${props => props.theme.radii[3]};
  box-shadow: ${props => props.theme.boxShadows[2]};
  cursor: pointer;
  font-weight: ${props =>
    props.bold ? { fontWeight: props.theme.bold } : null};
`;

export default DayBox;
