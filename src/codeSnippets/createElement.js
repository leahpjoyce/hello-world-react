import React from 'react'
import ReactDOM from 'react-dom'

const element = React.createElement('div', null, 'hello world')

/*
const element = React.createElement('div',
  { className: 'welcome-message'
  }, 'hello world')
*/

/*
const element = React.createElement('ol', null,
  React.createElement('li', null, 'Michael'),
  React.createElement('li', null, 'Ryan'),
  React.createElement('li', null, 'Tyler')
);
*/

/*
const people = [
  { name: 'Michael' },
  { name: 'Ryan' },
  { name: 'Tyler' }
]

const element = React.createElement('ol', null,
  people.map((person, index) => (
    React.createElement('li', { key: index }, person.name)
  ))
)
*/

ReactDOM.render(element, document.getElementById('root'))
