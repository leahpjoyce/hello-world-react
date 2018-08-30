import React from 'react'
import ReactDOM from 'react-dom'

//React.createElement( /* type */, /* props */, /* content */ );

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

ReactDOM.render(element, document.getElementById('root'))
