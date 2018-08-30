import React from 'react'
import ReactDOM from 'react-dom'

//React.createElement( /* type */, /* props */, /* content */ );
const element = React.createElement('ol', null,
  React.createElement('li', null, 'Michael'),
  React.createElement('li', null, 'Ryan'),
  React.createElement('li', null, 'Tyler')
);

ReactDOM.render(element, document.getElementById('root'))
