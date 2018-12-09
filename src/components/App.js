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
import MonthCalendar from "./MonthCalendar"

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

    App.rawYearData = {};
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
    App.rawYearData[`${currentYear}`] = getDaysInCalendarMonthsFormat(getDaysOfYearFullFormatInLists(currentYear));
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
    const {year} = this.state;
    const fakeMonth = App.rawYearData["2018"][1];

    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth={1280}>
          <Header year={year} changeYear={this.handleChangeYear} />
          <Flex wrap={true} justify={"center"} align={"center"}>
            <MonthCalendar month={fakeMonth}/>
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
