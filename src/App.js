import React from 'react'
import ReactDOM from 'react-dom'

const element = React.createElement('div',
  { className: 'welcome-message'
  }, 'hello world')

ReactDOM.render(element, document.getElementById('root'))
