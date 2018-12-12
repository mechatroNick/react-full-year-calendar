import React, { Fragment, Component } from "react";
import { Box, Flex, Heading, Text, Select, Label } from "../design system";
import styled from "styled-components";

import Modal from "react-responsive-modal";

const NoSelectBox = styled(Box)`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
`;

const DayBox = styled(Box)`
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.radii[3]};
  border-color: ${props => props.theme.colors.gray};
  cursor: pointer;
  font-weight: ${props =>
    props.bold ? { fontWeight: props.theme.bold } : null};
`;

const DaysOfWeekIndicator = () => {
  return (
    <Fragment>
      <NoSelectBox
        py={[1, 2, 3]}
        my={1}
        bg={"blue"}
        color={"white"}
        width={1 / 7}
      >
        <Text bold>M</Text>
      </NoSelectBox>
      <NoSelectBox
        py={[1, 2, 3]}
        my={1}
        bg={"blue"}
        color={"white"}
        width={1 / 7}
      >
        <Text bold>T</Text>
      </NoSelectBox>
      <NoSelectBox
        py={[1, 2, 3]}
        my={1}
        bg={"blue"}
        color={"white"}
        width={1 / 7}
      >
        <Text bold>W</Text>
      </NoSelectBox>
      <NoSelectBox
        py={[1, 2, 3]}
        my={1}
        bg={"blue"}
        color={"white"}
        width={1 / 7}
      >
        <Text bold>T</Text>
      </NoSelectBox>
      <NoSelectBox
        py={[1, 2, 3]}
        my={1}
        bg={"blue"}
        color={"white"}
        width={1 / 7}
      >
        <Text bold>F</Text>
      </NoSelectBox>
      <NoSelectBox
        py={[1, 2, 3]}
        my={1}
        bg={"lightBlue"}
        color={"white"}
        width={1 / 7}
      >
        <Text bold>S</Text>
      </NoSelectBox>
      <NoSelectBox
        py={[1, 2, 3]}
        my={1}
        bg={"lightBlue"}
        color={"white"}
        width={1 / 7}
      >
        <Text bold>S</Text>
      </NoSelectBox>
    </Fragment>
  );
};

class DayBoxGroup extends Component {
  state = {
    showModal: false
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { fullDate, date, month, year, eventToday } = this.props;
    const { showModal } = this.state;
    if (eventToday) {
      console.log(date)
      console.log(eventToday);
    }
    return (
      <Fragment>
        <NoSelectBox my={1} width={1 / 70} />
        <DayBox
          py={[1, 2, 2, 3]}
          my={1}
          width={8 / 70}
          key={fullDate}
          onClick={this.handleOpenModal}
        >
          {date}
        </DayBox>
        <Modal open={showModal} onClose={this.handleCloseModal} center>
          <Text mt={[4]} textAlign={"center"}>Which special day is it?</Text>
          <Text my={[2]} textAlign={"center"}>{fullDate}</Text>
          <Select
            name={fullDate}
            align={"center"}
            width={1}
            fontSize={[2,3,4,4]}
          >
            <option>Nothing special</option>
            <option>Holiday</option>
            <option>Busy</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </Select>
        </Modal>
        <NoSelectBox my={1} width={1 / 70} />
      </Fragment>
    );
  }
}

const MonthCalendar = props => {
  const { month, monthSkeleton, monthEvents } = props;
  return (
    <Fragment>
      <NoSelectBox width={[0.1, 0.025, 1 / 54]} />
      <Flex
        width={[0.8, 0.45, 16 / 54]}
        color={"Black"}
        wrap={true}
        textAlign={"center"}
        align={"center"}
      >
        <NoSelectBox width={1}>
          <Heading.h3>{month}</Heading.h3>
        </NoSelectBox>
        <DaysOfWeekIndicator />
        {monthSkeleton.map(date => {
          if (date === "empty") {
            return (
              <NoSelectBox
                py={[1, 2, 2, 3]}
                my={1}
                color={"white"}
                width={1 / 7}
              >
                *
              </NoSelectBox>
            );
          } else {
            return (
              <DayBoxGroup
                key={date}
                fullDate={date}
                date={parseInt(date.substring(8, 10))}
                month={parseInt(date.substring(5, 7))}
                year={parseInt(date.substring(0, 4))}
                eventToday={monthEvents[date]}
              />
            );
          }
        })}
      </Flex>
      <Box width={[0.1, 0.025, 1 / 54]} />
    </Fragment>
  );
};

export default MonthCalendar;
