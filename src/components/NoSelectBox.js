import styled from "styled-components";
import { Box } from "../design system";

const NoSelectBox = styled(Box)`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
`;

NoSelectBox.defaultProps = {
  py: [1, 2, 3],
  my: 1,
  bg: "red",
  color: "white",
  width: 1 / 7,
  bold: true
};

export default NoSelectBox;
