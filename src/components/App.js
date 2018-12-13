import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { TYPE_OF_EVENTS, TYPE_OF_CHANGE_YEAR, MONTHS_LIST } from "../logic/constant";

import {
  theme,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text, Label, Select
} from "../design system";
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


class App extends Component {
  constructor(props) {
    super(props);

    const currentYear = parseInt(getCurrentYear());
    const currentDateMonthYear = getCurrentDateMonthYear();
    const today = [TYPE_OF_EVENTS.TODAY_DATE];
    let initEventObj = {};
    initEventObj[`${currentDateMonthYear}`] = today;

    this.state = {
      year: currentYear,
      eventStorage: initEventObj
    };
    this.handleChangeYear = this.handleChangeYear.bind(this);

    App.rawYearData = {};
    App.rawYearData[`${currentYear}`] = getDaysInCalendarMonthsFormat(getDaysOfYearFullFormatInLists(currentYear));
    App.organizedEvents = collectEventRelatedToThisYear(initEventObj, currentYear);
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
