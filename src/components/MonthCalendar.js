import React, { Fragment, PureComponent } from "react";
import { Box, Flex, Heading } from "../design system";
import DaysOfWeekIndicator from './DaysOfWeekIndicator'
import DayBoxGroup from './DayBoxGroup'

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
          {monthSkeleton.map(fullDate => {
            if (fullDate === "empty") {
              return (
                <Box py={[1, 2, 2, 3]} my={1} color={"white"} width={1 / 7}>
                  *
                </Box>
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

export default MonthCalendar;
