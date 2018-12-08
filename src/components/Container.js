import styled from "styled-components";
import Box from "./Box.js";
import PropTypes from "prop-types";

const maxWidth = props =>
  props.maxWidth
    ? { maxWidth: `${props.maxWidth}px` }
    : { maxWidth: props.theme.maxContainerWidth };

const Container = styled(Box)`
  max-width: ${props => props.maxWidth}px;
`;

Container.displayName = "Container";

Container.propTypes = {
  maxWidth: PropTypes.number
};

Container.defaultProps = {
  maxWidth: maxWidth,
  mx: "auto"
};

export default Container;
