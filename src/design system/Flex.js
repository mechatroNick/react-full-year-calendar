import styled from "styled-components";
import {
  alignSelf,
  alignItems,
  justifyContent,
  flexDirection,
  flex,
  propTypes
} from "styled-system";
import Box from "./Box";
import PropTypes from "prop-types";

const wrap = props => (props.wrap==="wrap" ? { flexWrap: "wrap" } : null);

const Flex = styled(Box)`
  display: flex;
  ${alignSelf} ${alignItems} ${justifyContent} ${wrap} ${flexDirection} ${flex};
`;

Flex.propTypes = {
  wrap: PropTypes.oneOf(["wrap","none"]),
  ...propTypes.alignSelf,
  ...propTypes.alignItems,
  ...propTypes.justifyContent,
  ...propTypes.flexDirection,
  ...propTypes.flex
};

Flex.displayName = "Flex";

export default Flex;
