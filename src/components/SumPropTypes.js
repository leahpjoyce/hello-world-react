import React from 'react';
import PropTypes from 'prop-types';

function Sum(props) {
    return (
      <h1>{props.a} + {props.b} = {props.a + props.b}</h1>
    );
}

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;

//index.js create-react-App
import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom'
import Sum from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  //change string a to number to remove console error
  <Sum a={'a'} b={2}/>,
  document.getElementById('root')
);
registerServiceWorker();
