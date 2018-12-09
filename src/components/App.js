import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import {
  theme,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text
} from "../deign system";
import { TYPE_OF_CHANGE_YEAR } from "../logic/constant";

import Header from "./Header";

import {
  getCurrentYear,
  getCurrentMonth,
  getCurrentDateMonthYear,
  getDaysOfYearFullFormatInLists,
  getDaysInCalendarMonthsFormat
} from "../logic/helper.js";
import { TYPE_OF_EVENTS } from "../logic/constant";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 0,
      eventObj: {}
    };
    this.handleChangeYear = this.handleChangeYear.bind(this);
  }

  /**
   * Initiate the App, getting the current date
   * Populate the calendar view
   */
  componentWillMount() {
    const currentDateMonthYear = getCurrentDateMonthYear();
    const initEventObj = {};
    initEventObj[`${currentDateMonthYear}`] = TYPE_OF_EVENTS.TODAY;
    const currentYear = parseInt(getCurrentYear());
    this.setState({
      year: currentYear,
      eventObj: initEventObj
    });
    console.log(getDaysOfYearFullFormatInLists(2018));
    console.log(
      getDaysInCalendarMonthsFormat(getDaysOfYearFullFormatInLists(2018))
    );
  }

  /**
   * Button clicks, +1 or -1 year according to button id
   * @param event: button click events
   */
  handleChangeYear(event) {
    const action = event.target.id;
    let newYear = this.state.year;
    switch (action) {
      case TYPE_OF_CHANGE_YEAR.TO_PREVIOUS_YEAR:
        newYear -= 1;
        break;
      case TYPE_OF_CHANGE_YEAR.TO_NEXT_YEAR:
        newYear += 1;
        break;
      default:
        break;
    }
    this.setState({
      year: newYear
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth={1280}>
          <Header year={this.state.year} changeYear={this.handleChangeYear} />
          <Flex wrap={true} justify={"center"} align={"center"}>
            <Box width={[0.1, 0.025, 1 / 54]} />
            <Flex
              width={[0.8, 0.45, 16 / 54]}
              color={"Black"}
              my={3}
              wrap={true}
              textAlign={"center"}
            >
              <Box width={1}>
                <Heading.h3>{getCurrentMonth()}</Heading.h3>
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
