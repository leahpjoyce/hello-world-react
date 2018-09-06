//App.js file
import React, { Component } from 'react';

class Sum extends Component {
  render() {
    return (
      <h1>{this.props.a} + {this.props.b} = {this.props.a + this.props.b}</h1>
    );
  }

}

export default Sum;

//index.js file
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
