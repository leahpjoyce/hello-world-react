import React, { Component } from 'react';

class ClickCounter extends Component {
//@Another way to set the state
/*
constructor(props) {
    super(props);
    this.state = {clicks: 0};
  }
*/
  state = {
    clicks: 0
  }

  render() {
    return <h1 onClick= {() =>
        {this.setState({clicks: this.state.clicks + 1}); }}>
        This h1 has been clicked {this.state.clicks} times.
      </h1>
  }
}

export default ClickCounter;

//index.js file
import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom'
import ClickCounter from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <ClickCounter/>,
  document.getElementById('root')
);
registerServiceWorker();
