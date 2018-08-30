import React, { Component } from 'react';
import ReactDOM from 'react-dom'

//React.createElement( /* type */, /* props */, /* content */ );

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


ReactDOM.render(
  <ContactList/>, document.getElementById('root'))
