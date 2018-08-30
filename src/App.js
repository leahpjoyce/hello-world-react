import React from 'react'
import ReactDOM from 'react-dom'

//React.createElement( /* type */, /* props */, /* content */ );

const people = [
  { name: 'Michael' },
  { name: 'Ryan' },
  { name: 'Tyler' }
]

const element = <ol>
  {people.map(person =>(
    <li>{person.name}</li>
  ))}
  </ol>

ReactDOM.render(element, document.getElementById('root'))
