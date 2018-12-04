import React from 'react';
import styled from 'styled-components'

const ParagraphText = styled.p`
  font-size: calc(10px + 2vmin);
  color: ${(props) => props.theme.textColor};
`

export default ParagraphText;