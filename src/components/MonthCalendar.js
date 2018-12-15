import React, { Fragment, PureComponent } from "react";
import { Box, Flex, Heading } from "../design system";
import DaysOfWeekIndicator from "./DaysOfWeekIndicator";
import DayBoxGroup from "./DayBoxGroup";
import NoSelectBox from "./NoSelectBox";
import PropTypes from "prop-types";
import {MONTHS_LIST} from "../logic/constant"

class MonthCalendar extends PureComponent {
  render() {
    const {
      month,
      monthSkeleton,
      monthEvents,
      handleUpdateAppStorageOnSpecialEvent
    } = this.props;
    return (
      <Fragment>
        <Box width={[0.1, 0.025, 1 / 54]} />
        <Flex
          width={[0.8, 0.45, 16 / 54]}
          color={"Black"}
          wrap={true}
          textAlign={"center"}
          align={"center"}
        >
          <Box width={1}>
            <Heading.h3>{month}</Heading.h3>
          </Box>
          <DaysOfWeekIndicator />
          {monthSkeleton.map((fullDate, index) => {
            if (fullDate === "empty") {
              return (
                <NoSelectBox
                  key={index}
                  py={[1, 2, 2, 3]}
                  my={1}
                  color={"white"}
                  bg={"transparent"}
                  width={1 / 7}
                >
                  *
                </NoSelectBox>
              );
            } else {
              return (
                <DayBoxGroup
                  key={fullDate}
                  fullDate={fullDate}
                  date={parseInt(fullDate.substring(8, 10))}
                  month={parseInt(fullDate.substring(5, 7))}
                  year={parseInt(fullDate.substring(0, 4))}
                  eventList={monthEvents[fullDate]}
                  onChangeSpecialEvent={handleUpdateAppStorageOnSpecialEvent}
                />
              );
            }
          })}
        </Flex>
        <Box width={[0.1, 0.025, 1 / 54]} />
      </Fragment>
    );
  }
}

MonthCalendar.propTypes = {
  month: PropTypes.PropTypes.oneOf(MONTHS_LIST).isRequired,
  monthSkeleton: PropTypes.arrayOf(PropTypes.string).isRequired,
  monthEvents: PropTypes.object.isRequired,
  handleUpdateAppStorageOnSpecialEvent: PropTypes.func
};

export default MonthCalendar;
