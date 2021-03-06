import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import {
  TYPE_OF_EVENTS,
  TYPE_OF_CHANGE_YEAR,
  MONTHS_LIST
} from "../logic/constant";

import { theme, Container, Flex } from "../design system";
import Header from "./Header";
import MonthCalendar from "./MonthCalendar";

import {
  getCurrentYear,
  getCurrentDateMonthYear,
  getDaysOfYearFullFormatInLists,
  getDaysInCalendarMonthsFormat,
  collectEventRelatedToThisYear
} from "../logic/helper.js";

class App extends Component {
  /**
   * Initiate states of the app
   * Use the current year
   * Find the date of today and highlight
   * @param props
   */
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
    App.rawYearData[`${currentYear}`] = getDaysInCalendarMonthsFormat(
      getDaysOfYearFullFormatInLists(currentYear)
    );
    App.organizedEvents = collectEventRelatedToThisYear(
      initEventObj,
      currentYear
    );
    this.updateAppStorageOnSpecialEvent = this.updateAppStorageOnSpecialEvent.bind(
      this
    );
  }

  /**
   * Button clicks, +1 or -1 year according to button id
   * Populate skeleton for a year that has not been visited before
   * Reuse skeleton for a year that has been visited
   * @param event: button click events from inside <Header /> (Next/Prev)
   */
  handleChangeYear(event) {
    const action = event.target.id;
    let newYear = this.state.year;
    const {eventStorage} = this.state;
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
    if (!App.rawYearData.hasOwnProperty(`${newYear}`)) {
      App.rawYearData[`${newYear}`] = getDaysInCalendarMonthsFormat(
        getDaysOfYearFullFormatInLists(newYear)
      );
    }
    App.organizedEvents = collectEventRelatedToThisYear(eventStorage, newYear);
    this.setState({
      year: newYear,
      eventStorage: eventStorage
    });
  }

  /**
   * When event typed belong to each day is selected
   * The state of this top level app needs to change accordingly
   * @param event: button click events from inside <MonthCalendar /> and <DayBoxGroup />
   */
  updateAppStorageOnSpecialEvent(event) {
    let { date, name } = event.target;
    let { eventStorage, year } = this.state;
    let currentEventList = [];
    let newEventList = [];
    if (eventStorage.hasOwnProperty(date)) {
      currentEventList = eventStorage[date];
      let indexToday = currentEventList.indexOf(TYPE_OF_EVENTS.TODAY_DATE);
      if (indexToday !== -1) {
        switch (name) {
          case TYPE_OF_EVENTS.HOLIDAY:
          case TYPE_OF_EVENTS.BUSY:
          case TYPE_OF_EVENTS.BIRTHDAY:
          case TYPE_OF_EVENTS.ANNIVERSARY:
            newEventList.push(TYPE_OF_EVENTS.TODAY_DATE, name);
            eventStorage[date] = newEventList;
            break;
          case TYPE_OF_EVENTS.NOTHING_SPECIAL:
            newEventList.push(TYPE_OF_EVENTS.TODAY_DATE);
            eventStorage[date] = newEventList;
            break;
          default:
            break;
        }
      } else {
        switch (name) {
          case TYPE_OF_EVENTS.HOLIDAY:
          case TYPE_OF_EVENTS.BUSY:
          case TYPE_OF_EVENTS.BIRTHDAY:
          case TYPE_OF_EVENTS.ANNIVERSARY:
            newEventList.push(name);
            eventStorage[date] = newEventList;
            break;
          case TYPE_OF_EVENTS.NOTHING_SPECIAL:
            delete eventStorage[`${date}`];
            break;
          default:
            break;
        }
      }
    } else {
      switch (name) {
        case TYPE_OF_EVENTS.HOLIDAY:
        case TYPE_OF_EVENTS.BUSY:
        case TYPE_OF_EVENTS.BIRTHDAY:
        case TYPE_OF_EVENTS.ANNIVERSARY:
          newEventList.push(name);
          eventStorage[date] = newEventList;
          break;
        case TYPE_OF_EVENTS.NOTHING_SPECIAL:
        default:
          break;
      }
    }
    App.organizedEvents = collectEventRelatedToThisYear(eventStorage, year);
    this.setState({ eventStorage: eventStorage });
  }

  render() {
    const { year } = this.state;
    const yearSkeletonData = App.rawYearData[year];
    const relevantEvents = App.organizedEvents;

    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth={1280}>
          <Header year={year} changeYear={this.handleChangeYear} />
          <Flex wrap={"wrap"} justify={"center"} align={"center"}>
            {yearSkeletonData.map((monthSkeleton, index) => {
              return (
                <MonthCalendar
                  key={MONTHS_LIST[index]}
                  month={MONTHS_LIST[index]}
                  monthEvents={relevantEvents[index]}
                  monthSkeleton={monthSkeleton}
                  handleUpdateAppStorageOnSpecialEvent={
                    this.updateAppStorageOnSpecialEvent
                  }
                />
              );
            })}
          </Flex>
          <Header year={year} changeYear={this.handleChangeYear} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
