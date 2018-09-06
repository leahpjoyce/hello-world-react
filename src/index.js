import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom'
import Sum from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  //change string a to number to remove console error
  <Sum a={2} b={2}/>,
  document.getElementById('root')
);
registerServiceWorker();
