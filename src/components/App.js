import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import {
  theme,
  Box,
  Container,
  Flex,
  Heading,
  Text
} from '../deign system'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth={1280}>
          <Flex wrap={true} justify="center" align="center">
            <Box width={[0.1, 0.025, 1 / 54]} />
            <Flex
              width={[0.8, 0.45, 16 / 54]}
              color={"Black"}
              my={3}
              wrap={true}
              textAlign={"center"}
            >
              <Box width={1} >
                <Heading.h3>
                  January
                </Heading.h3>
              </Box>

              <Box width={1 / 7}>M</Box>
              <Box width={1 / 7}>T</Box>
              <Box width={1 / 7}>W</Box>
              <Box width={1 / 7}>T</Box>
              <Box width={1 / 7}>F</Box>
              <Box width={1 / 7}>S</Box>
              <Box width={1 / 7}>S</Box>
              <Box width={1 / 7}> </Box>
              <Box width={1 / 7}>1</Box>
              <Box width={1 / 7}>2</Box>
              <Box width={1 / 7}>3</Box>
              <Box width={1 / 7}>4</Box>
              <Box width={1 / 7}>5</Box>
              <Box width={1 / 7}>6</Box>
              <Box width={1 / 7}>7</Box>
              <Box width={1 / 7}>8</Box>
              <Box width={1 / 7}>9</Box>
              <Box width={1 / 7}>10</Box>
              <Box width={1 / 7}>11</Box>
              <Box width={1 / 7}>12</Box>
              <Box width={1 / 7}>13</Box>
            </Flex>
            <Box width={[0.1, 0.025, 1 / 54]} />
            <Flex
              width={[1, 1 / 2, 1 / 3]}
              color={"white"}
              bg={"lightGreen"}
              my={3}
            >
              Aye
            </Flex>
            <Flex
              width={[1, 1 / 2, 1 / 3]}
              color={"white"}
              bg={"lightBlue"}
              my={3}
            >
              Aye
            </Flex>
            <Flex
              width={[1, 1 / 2, 1 / 3]}
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
