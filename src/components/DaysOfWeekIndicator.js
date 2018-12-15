import React, { Fragment } from "react";
import NoSelectBox from "./NoSelectBox";
import { Text } from "../design system";

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

export default DaysOfWeekIndicator;
