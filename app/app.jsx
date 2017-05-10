const React = require('react')
const ReactDOM = require('react-dom')
import Main from 'Main'
import Weather from 'Weather'
import About from 'About'
import Examples from 'Examples'

// object de-structuring
const {Route, Router, IndexRoute, hashHistory} = require('react-router')

//require('style-loader!css-loader!foundation-sites/dist/js/foundation.min.js')

{ /* history prop tells react that we want to route '#' sign followed by the path, in order to maintain routes for our app */ }
{ /* Route is used to create paths for different components */ }
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='about' component={About} />
      <Route path='examples' component={Examples} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
)
