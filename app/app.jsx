const React = require('react')
const ReactDOM = require('react-dom')
// const Main = require('Main')
import Main from 'Main'

// object de-structuring
const {Route, Router, IndexRoute, hashHistory} = require('react-router')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
)
