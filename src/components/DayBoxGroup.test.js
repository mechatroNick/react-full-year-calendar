import React from 'react';
import ReactDOM from 'react-dom';
import DayBoxGroup from './DayBoxGroup';

it('renders DayBoxGroup without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DayBoxGroup fullDate={"2018-11-15"} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
