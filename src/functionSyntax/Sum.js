import React from 'react';

function Sum(props) {
    return (
      <h1>{props.a} + {props.b} = {props.a + props.b}</h1>
    );
}

export default Sum;


//index.js file using create-react-app
import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom'
import Sum from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Sum a={4} b={2} />,
  document.getElementById('root')
);
registerServiceWorker();
