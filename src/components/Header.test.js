import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

it('renders Header without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header year={2018} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
