import React from 'react';
import ReactDOM from 'react-dom';
import MonthCalendar from './MonthCalendar';
import {MONTHS_LIST} from "../logic/constant";
import { getDaysInCalendarMonthsFormat, getDaysOfYearFullFormatInLists } from "../logic/helper";

it('renders MonthCalendar without crashing', () => {
  const div = document.createElement('div');
  //expecting November
  const monthIndex = 10;
  const year = 2018;
  const month = MONTHS_LIST[monthIndex];
  const yearSkeletonData = getDaysInCalendarMonthsFormat(
    getDaysOfYearFullFormatInLists(year));
  const monthSkeleton = yearSkeletonData[monthIndex];
  ReactDOM.render(
    <MonthCalendar
      month={month}
      monthSkeleton={monthSkeleton}
      monthEvents={{}}
    />
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
