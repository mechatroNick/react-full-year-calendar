import React, { Fragment } from "react";
import { Box, Button, Flex, Heading } from "../deign system";
import {TYPE_OF_CHANGE_YEAR} from  "../logic/constant"
import PropTypes from "prop-types";

const Header = props => {
  return (
    <Fragment>
      <Flex wrap={true} justify={"center"} align={"center"}>
        <Box width={1 / 5} my={3} textAlign={"center"}>
          <Button id={TYPE_OF_CHANGE_YEAR.TO_PREVIOUS_YEAR} radius={5} onClick={props.changeYear}>
            Prev
          </Button>
        </Box>
        <Box width={3 / 5} textAlign={"center"}>
          <Heading.h1>{props.year}</Heading.h1>
        </Box>
        <Box width={1 / 5} my={3} textAlign={"center"}>
          <Button id={TYPE_OF_CHANGE_YEAR.TO_NEXT_YEAR} radius={5} onClick={props.changeYear}>
            Next
          </Button>
        </Box>
      </Flex>
    </Fragment>
  );
};

Header.propTypes = {
  year: PropTypes.number.isRequired,
  changeYear: PropTypes.func.isRequired
};

export default Header;
