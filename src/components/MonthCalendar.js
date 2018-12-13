import React, { Fragment, Component } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Select,
  ToggleBadge
} from "../design system";
import styled from "styled-components";

import Modal from "react-responsive-modal";
import { TYPE_OF_EVENTS } from "../logic/constant";

export const eventColors = {
  dayBoxBg: {
    [TYPE_OF_EVENTS.NOTHING_SPECIAL]:"lightGray",
    [TYPE_OF_EVENTS.HOLIDAY]:"green",
    [TYPE_OF_EVENTS.BUSY]:"red",
    [TYPE_OF_EVENTS.BIRTHDAY]:"orange",
    [TYPE_OF_EVENTS.ANNIVERSARY]:"purple"
  },
  color: {
    [TYPE_OF_EVENTS.NOTHING_SPECIAL]:"black",
    [TYPE_OF_EVENTS.HOLIDAY]:"white",
    [TYPE_OF_EVENTS.BUSY]:"white",
    [TYPE_OF_EVENTS.BIRTHDAY]:"white",
    [TYPE_OF_EVENTS.ANNIVERSARY]:"white"
  }
};

const NoSelectBox = styled(Box)`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
`;

NoSelectBox.defaultProps = {
  py: [1, 2, 3],
  my: 1,
  bg: "blue",
  color: "white",
  width: 1 / 7,
  bold: true
};

const DayBox = styled(Box)`
  background-color: ${props => eventColors.dayBoxBg[props.specialEvent]};
  color: ${props => eventColors.color[props.specialEvent]};
  border-radius: ${props => props.theme.radii[3]};
  box-shadow: ${props => props.theme.boxShadows[2]};
  cursor: pointer;
  font-weight: ${props =>
    props.bold ? { fontWeight: props.theme.bold } : null};
`;

const DaysOfWeekIndicator = () => {
  return (
    <Fragment>
      <NoSelectBox>
        <Text bold fontSize={[2, 2, 2, 3]}>
          M
        </Text>
      </NoSelectBox>
      <NoSelectBox>
        <Text bold fontSize={[2, 2, 2, 3]}>
          T
        </Text>
      </NoSelectBox>
      <NoSelectBox>
        <Text bold fontSize={[2, 2, 2, 3]}>
          W
        </Text>
      </NoSelectBox>
      <NoSelectBox>
        <Text bold fontSize={[2, 2, 2, 3]}>
          T
        </Text>
      </NoSelectBox>
      <NoSelectBox>
        <Text bold fontSize={[2, 2, 2, 3]}>
          F
        </Text>
      </NoSelectBox>
      <NoSelectBox bg={"lightBlue"}>
        <Text bold fontSize={[2, 2, 2, 3]}>
          S
        </Text>
      </NoSelectBox>
      <NoSelectBox bg={"lightBlue"}>
        <Text bold fontSize={[2, 2, 2, 3]}>
          S
        </Text>
      </NoSelectBox>
    </Fragment>
  );
};

class DayBoxGroup extends Component {
  state = {
    showModal: false,
    date: undefined,
    month: undefined,
    year: undefined,
    today: false,
    specialEvent: TYPE_OF_EVENTS.NOTHING_SPECIAL
  };

  componentWillMount() {
    const { fullDate, eventList } = this.props;
    const date = parseInt(fullDate.substring(8, 10));
    const month = parseInt(fullDate.substring(5, 7));
    const year = parseInt(fullDate.substring(0, 4));
    let initialState = { date: date, month: month, year: year };

    if (eventList) {
      let indexToday = eventList.indexOf(TYPE_OF_EVENTS.TODAY_DATE);
      if (indexToday !== -1) {
        initialState = { ...initialState, today: true };
        console.log(eventList);
      }

      if (eventList.length > 1) {
        console.log(eventList);
        initialState = { ...initialState, specialEvent: eventList[1] };
      }
    }

    this.setState(initialState);
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleChangeTypeOfSpecialEvent = event => {
    const newSpecialEvent = event.target.name;
    const currentSpecialEvent = this.state.specialEvent;
    if(newSpecialEvent !== currentSpecialEvent){
      this.setState({ specialEvent: newSpecialEvent });
    }
  };

  render() {
    const { fullDate } = this.props;
    const { showModal, today, date, month, year, specialEvent } = this.state;

    return (
      <Fragment>
        <Box my={1} width={1 / 70} />
        <DayBox
          py={[1, 2, 2, 3]}
          my={1}
          width={8 / 70}
          key={fullDate}
          onClick={this.handleOpenModal}
          specialEvent={specialEvent}
        >
          <Text bold={today === true} underline={today === true}>
            {date}
          </Text>
        </DayBox>
        <Box my={1} width={1 / 70} />
        <Modal open={showModal} onClose={this.handleCloseModal} center>
          <Text mt={[4]} textAlign={"center"}>
            Which special day is it?
          </Text>
          <Text my={[2]} textAlign={"center"}>
            {date + "/" + month + "/" + year}
          </Text>
          <ToggleBadge
            name={TYPE_OF_EVENTS.NOTHING_SPECIAL}
            selected={specialEvent === TYPE_OF_EVENTS.NOTHING_SPECIAL}
            bold={specialEvent === TYPE_OF_EVENTS.NOTHING_SPECIAL}
            color={"white"}
            unSelectedColor={"black"}
            bg={"darkGray"}
            unSelectedBg={"borderGray"}
            display={"block"}
            fontSize={[2, 2, 3, 3]}
            onClick={this.handleChangeTypeOfSpecialEvent}
          >
            Nothing special
          </ToggleBadge>
          <ToggleBadge
            name={TYPE_OF_EVENTS.HOLIDAY}
            selected={specialEvent === TYPE_OF_EVENTS.HOLIDAY}
            bold={specialEvent === TYPE_OF_EVENTS.HOLIDAY}
            color={"white"}
            unSelectedColor={"black"}
            bg={"darkGreen"}
            unSelectedBg={"lightGreen"}
            display={"block"}
            fontSize={[2, 2, 3, 3]}
            onClick={this.handleChangeTypeOfSpecialEvent}
          >
            Holiday
          </ToggleBadge>
          <ToggleBadge
            name={TYPE_OF_EVENTS.BUSY}
            selected={specialEvent === TYPE_OF_EVENTS.BUSY}
            bold={specialEvent === TYPE_OF_EVENTS.BUSY}
            color={"white"}
            unSelectedColor={"black"}
            bg={"darkRed"}
            unSelectedBg={"lightRed"}
            display={"block"}
            fontSize={[2, 2, 3, 3]}
            onClick={this.handleChangeTypeOfSpecialEvent}
          >
            Busy
          </ToggleBadge>
          <ToggleBadge
            name={TYPE_OF_EVENTS.BIRTHDAY}
            selected={specialEvent === TYPE_OF_EVENTS.BIRTHDAY}
            bold={specialEvent === TYPE_OF_EVENTS.BIRTHDAY}
            color={"white"}
            unSelectedColor={"black"}
            bg={"darkOrange"}
            unSelectedBg={"lightOrange"}
            display={"block"}
            fontSize={[2, 2, 3, 3]}
            onClick={this.handleChangeTypeOfSpecialEvent}
          >
            Birthday
          </ToggleBadge>
          <ToggleBadge
            name={TYPE_OF_EVENTS.ANNIVERSARY}
            selected={specialEvent === TYPE_OF_EVENTS.ANNIVERSARY}
            bold={specialEvent === TYPE_OF_EVENTS.ANNIVERSARY}
            color={"white"}
            unSelectedColor={"black"}
            bg={"darkPurple"}
            unSelectedBg={"lightPurple"}
            display={"block"}
            fontSize={[2, 2, 3, 3]}
            onClick={this.handleChangeTypeOfSpecialEvent}
          >
            Anniversary
          </ToggleBadge>
        </Modal>
      </Fragment>
    );
  }
}

const MonthCalendar = props => {
  const { month, monthSkeleton, monthEvents } = props;
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
