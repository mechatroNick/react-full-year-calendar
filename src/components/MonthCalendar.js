import React, { Fragment } from "react";
import { Box, Flex, Heading, Text, Select } from "../deign system";
import styled from "styled-components";

const DayBox = styled(Box)`
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.radii[3]};
  border-color: ${props => props.theme.colors.gray};
`;

const DayBoxGroup = props => {
  const { id, date } = props;
  return (
    <Fragment>
      <Box my={1} width={1 / 70} />
      <DayBox py={[1, 2, 2, 3]} my={1} width={8 / 70} key={id}>
        {date}
      </DayBox>
      <Box my={1} width={1 / 70} />
    </Fragment>
  );
};

const MonthCalendar = props => {
  const { id, month } = props;
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
          <Heading.h3>{id}</Heading.h3>
        </Box>
        <Box py={[1, 2, 3]} my={1} bg={"blue"} color={"white"} width={1 / 7}>
          <Text bold>M</Text>
        </Box>
        <Box py={[1, 2, 3]} my={1} bg={"blue"} color={"white"} width={1 / 7}>
          <Text bold>T</Text>
        </Box>
        <Box py={[1, 2, 3]} my={1} bg={"blue"} color={"white"} width={1 / 7}>
          <Text bold>W</Text>
        </Box>
        <Box py={[1, 2, 3]} my={1} bg={"blue"} color={"white"} width={1 / 7}>
          <Text bold>T</Text>
        </Box>
        <Box py={[1, 2, 3]} my={1} bg={"blue"} color={"white"} width={1 / 7}>
          <Text bold>F</Text>
        </Box>
        <Box
          py={[1, 2, 3]}
          my={1}
          bg={"lightBlue"}
          color={"white"}
          width={1 / 7}
        >
          <Text bold>S</Text>
        </Box>
        <Box
          py={[1, 2, 3]}
          my={1}
          bg={"lightBlue"}
          color={"white"}
          width={1 / 7}
        >
          <Text bold>S</Text>
        </Box>
        {month.map(date => {
          if (date === "empty") {
            return (
              <Box my={1} color={"white"} width={1 / 7}>
                *
              </Box>
            );
          } else {
            return (
              <DayBoxGroup
                id={date}
                key={date}
                date={parseInt(date.substring(8, 10))}
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
