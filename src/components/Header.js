import React, { Fragment } from "react";
import { Box, Button, Flex, Heading } from "../design system";
import { TYPE_OF_CHANGE_YEAR } from "../logic/constant";
import PropTypes from "prop-types";

const Header = props => {
  const { year, changeYear } = props;
  return (
    <Fragment>
      <Flex wrap={"wrap"} justify={"center"} align={"center"}>
        <Box fontSize={[2, 3, 4, 4]} width={[1 / 3, 1/4, 1 / 5]} my={[3, 3, 4, 4]} textAlign={"center"}>
          <Button

            id={TYPE_OF_CHANGE_YEAR.TO_PREVIOUS_YEAR}
            radius={5}
            onClick={changeYear}
          >
            Prev
          </Button>
        </Box>
        <Box width={[1 / 3, 2/4, 3 / 5]} textAlign={"center"}>
          <Heading.h1>{year}</Heading.h1>
        </Box>
        <Box fontSize={[2, 3, 4, 4]} width={[1 / 3, 1/4, 1 / 5]} my={[3, 3, 4, 4]} textAlign={"center"}>
          <Button

            id={TYPE_OF_CHANGE_YEAR.TO_NEXT_YEAR}
            radius={5}
            onClick={changeYear}
          >
            Next
          </Button>
        </Box>
      </Flex>
    </Fragment>
  );
};

Header.propTypes = {
  year: PropTypes.number.isRequired,
  changeYear: PropTypes.func
};

export default Header;
