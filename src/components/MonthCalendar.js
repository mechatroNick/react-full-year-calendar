import React, { Fragment } from "react";
import { Box, Flex, Text } from "../deign system";

const DayBox = props => {
  const { key, date } = props;
  return (
    <Fragment>
      <Box width={1 / 70}></Box>
      <Box width={8 / 70} key={key}>
        {date}
      </Box>
      <Box width={1 / 70}></Box>
    </Fragment>
  );
};

const MonthCalendar = props => {
  const { month, key } = props;
  return (
    <Fragment>
      <Box width={[0.1, 0.025, 1 / 54]} />
      <Flex
        width={[0.8, 0.45, 16 / 54]}
        color={"Black"}
        my={3}
        wrap={true}
        textAlign={"center"}
        align={"center"}
      >
        <Box width={1}>
          <Text key={key} bg={'gray'} color={'black'}>{key}</Text>
        </Box>

        <Box bg={"blue"} color={'white'} width={1 / 7}>M</Box>
        <Box bg={"blue"} color={'white'} width={1 / 7}>T</Box>
        <Box bg={"blue"} color={'white'} width={1 / 7}>W</Box>
        <Box bg={"blue"} color={'white'} width={1 / 7}>T</Box>
        <Box bg={"blue"} color={'white'} width={1 / 7}>F</Box>
        <Box bg={"lightBlue"} color={'white'} width={1 / 7}>S</Box>
        <Box bg={"lightBlue"} color={'white'} width={1 / 7}>S</Box>
        {month.map(date => {
          if (date === "empty") {
            return (<Box color={'white'} width={1 / 7}>*</Box>);
          } else {
            return (<DayBox key={date} date={parseInt(date.substring(8, 10))}/>);
          }
        })}
      </Flex>
      <Box width={[0.1, 0.025, 1 / 54]} />
    </Fragment>
  );
};

export default MonthCalendar;
