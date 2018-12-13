import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import {
  theme,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text, Label, Select
} from "../design system";
import { TYPE_OF_CHANGE_YEAR, MONTHS_LIST, TODAY } from "../logic/constant";

import Header from "./Header";
import MonthCalendar from "./MonthCalendar"

import {
  getCurrentYear,
  getCurrentMonth,
  getCurrentDay,
  getCurrentDateMonthYear,
  getDaysOfYearFullFormatInLists,
  getDaysInCalendarMonthsFormat,
  collectEventRelatedToThisYear
} from "../logic/helper.js";
import { TYPE_OF_EVENTS } from "../logic/constant";
import Modal from "react-responsive-modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 0,
      eventStorage: {}
    };
    this.handleChangeYear = this.handleChangeYear.bind(this);

    App.rawYearData = {};
    App.organizedEvents = {};
  }

  /**
   * Initiate the App, getting the current date
   * Populate skeleton for the calendar view
   */
  componentWillMount() {
    const currentDateMonthYear = getCurrentDateMonthYear();
    const initEventObj = {};
    initEventObj[`${currentDateMonthYear}`] = [TODAY];
    const currentYear = parseInt(getCurrentYear());
    App.rawYearData[`${currentYear}`] = getDaysInCalendarMonthsFormat(getDaysOfYearFullFormatInLists(currentYear));
    App.organizedEvents = collectEventRelatedToThisYear(initEventObj, currentYear);
    this.setState({
      year: currentYear,
      eventStorage: initEventObj
    });
  }


  /**
   * Button clicks, +1 or -1 year according to button id
   * Populate skeleton for a year that has not been visited before
   * Reuse skeleton for a year that has been visited
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
    if(!App.rawYearData.hasOwnProperty(`${newYear}`)){
      App.rawYearData[`${newYear}`] = getDaysInCalendarMonthsFormat(getDaysOfYearFullFormatInLists(newYear));
    }
    this.setState({
      year: newYear
    });
  }

  render() {
    const {year, eventStorage} = this.state;
    const yearSkeletonData = App.rawYearData[year];
    const relevantEvents = App.organizedEvents;

    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth={1280}>
          <Header year={year} changeYear={this.handleChangeYear} />
          <Flex wrap={true} justify={"center"} align={"center"}>
            {yearSkeletonData.map((monthSkeleton,index) => {
              return (
                <MonthCalendar
                  key={MONTHS_LIST[index]}
                  month={MONTHS_LIST[index]}
                  monthEvents={relevantEvents[index]}
                  monthSkeleton={monthSkeleton}
                />
              );
            })}
          </Flex>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
