import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-testing-library'
import App from './App';

it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render App using react-testing-library', () => {
  render(<App />);
})
