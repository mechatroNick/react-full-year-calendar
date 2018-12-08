import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Flex from "./Flex.js";
import Box from "./Box.js";
import Container from "./Container.js";
import Grid from "./Grid.js";
import theme from "../theme.js";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth={1280} >
          <Flex wrap={true}>
            <Flex
              width={[1, 1 / 2, 1 / 3, 1 / 4]}
              color={"Black"}
              my={3}
              wrap={true}
              alignItems="center"
            >
              <Box width={1}>January</Box>
              <Box width={1 / 7}>Mon</Box>
              <Box width={1 / 7}>Tue</Box>
              <Box width={1 / 7}>Wed</Box>
              <Box width={1 / 7}>Thu</Box>
              <Box width={1 / 7}>Fri</Box>
              <Box width={1 / 7}>Sat</Box>
              <Box width={1 / 7}>Sun</Box>
              <Box width={1 / 7} />
              <Box width={1 / 7}>1</Box>
              <Box width={1 / 7}>2</Box>
              <Box width={1 / 7}>3</Box>
              <Box width={1 / 7}>4</Box>
              <Box width={1 / 7}>5</Box>
              <Box width={1 / 7}>6</Box>
            </Flex>
            <Flex
              width={[1, 1 / 2, 1 / 3, 1 / 4]}
              color={"white"}
              bg={"lightGreen"}
              my={3}
            >
              Aye
            </Flex>
            <Flex
              width={[1, 1 / 2, 1 / 3, 1 / 4]}
              color={"white"}
              bg={"lightBlue"}
              my={3}
            >
              Aye
            </Flex>
            <Flex
              width={[1, 1 / 2, 1 / 3, 1 / 4]}
              color={"white"}
              bg={"lightBlue"}
              my={3}
            >
              Aye
            </Flex>
          </Flex>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
