import React, { Component } from 'react';
import styled from 'styled-components';
import Box from './Box.js'

const Grid = styled(Box)`
  display: grid;
  grid-gap: ${({ theme }) => theme.space[2]}px;
  > div {
    box-shadow: ${({ theme }) => theme.boxShadows[3]};
    border-radius: ${({ theme }) => theme.radius};
  }
  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: ${props => props["two-columns"] === "true" ? "repeat(2, 1fr)" : "repeat(1, 1fr)"} ;
    grid-gap: ${({ theme }) => theme.space[4]}px;
  }
`;

export default Grid;