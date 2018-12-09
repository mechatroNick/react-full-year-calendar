import React, { Fragment } from "react";
import { Box, Flex, Heading } from "../deign system";

const DayBox = props => {
  const { id, date } = props;
  return (
    <Fragment>
      <Box my={1} width={1 / 70}></Box>
      <Box my={1} width={8 / 70} key={id}>
        {date}
      </Box>
      <Box my={1} width={1 / 70}></Box>
    </Fragment>
  );
};

const MonthCalendar = props => {
  const { id, month} = props;
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
        <Box my={1} bg={"blue"} color={'white'} width={1 / 7}>M</Box>
        <Box my={1} bg={"blue"} color={'white'} width={1 / 7}>T</Box>
        <Box my={1} bg={"blue"} color={'white'} width={1 / 7}>W</Box>
        <Box my={1} bg={"blue"} color={'white'} width={1 / 7}>T</Box>
        <Box my={1} bg={"blue"} color={'white'} width={1 / 7}>F</Box>
        <Box my={1} bg={"lightBlue"} color={'white'} width={1 / 7}>S</Box>
        <Box my={1} bg={"lightBlue"} color={'white'} width={1 / 7}>S</Box>
        {month.map(date => {
          if (date === "empty") {
            return (<Box my={1} color={'white'} width={1 / 7}>*</Box>);
          } else {
            return (<DayBox id={date} key={date} date={parseInt(date.substring(8, 10))}/>);
          }
        })}
      </Flex>
      <Box width={[0.1, 0.025, 1 / 54]} />
    </Fragment>
  );
};

export default MonthCalendar;
