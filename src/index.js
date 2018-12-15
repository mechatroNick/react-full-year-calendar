import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader'
import {font} from './design system/theme'

WebFont.load({
  google: {
    families: [`Montserrat:400,700`, 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers:ß http://bit.ly/CRA-PWA
serviceWorker.unregister();
