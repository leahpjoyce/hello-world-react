/* 2 Ways sample Declaring Components in React
Source: Rendering UI with React 2. Creating Elements and JSX
*/

/*import React, { Component } from 'react';
import ReactDOM from 'react-dom'


class ContactList extends Component {
  render() {
    const people = [
      { name: 'Michael' },
      { name: 'Ryan' },
      { name: 'Tyler' }
    ]

    return <ol>
      {people.map(person =>(
        <li key={person.name}>{person.name}</li>
      ))}
      </ol>

  }
}
*/


import React from 'react'
import ReactDOM from 'react-dom'


class ContactList extends React.Component {
  render() {
    const people = [
      { name: 'Michael' },
      { name: 'Ryan' },
      { name: 'Tyler' }
    ]

    return <ol>
      {people.map(person =>(
        <li key={person.name}>{person.name}</li>
      ))}
      </ol>

  }
}


ReactDOM.render(
  <ContactList/>, document.getElementById('root'))
