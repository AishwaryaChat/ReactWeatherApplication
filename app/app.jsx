const React = require('react')
const ReactDOM = require('react-dom')
import Main from 'Main'
import Weather from 'Weather'
import About from 'About'

// object de-structuring
const {Route, Router, IndexRoute, hashHistory} = require('react-router')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='about' component={About} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
)
