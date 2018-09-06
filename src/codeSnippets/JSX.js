import React from 'react'
import ReactDOM from 'react-dom'

const people = [
  { name: 'Michael' },
  { name: 'Ryan' },
  { name: 'Tyler' }
]

const element = <ol>
  {people.map(person =>(
    <li key={person.name}>{person.name}</li>
  ))}
  </ol>

//debugger

ReactDOM.render(element, document.getElementById('root'))
