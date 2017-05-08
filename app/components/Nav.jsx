const React = require('react')
const {Link} = require('react-router') // provide the links to route to different paths

export default class Nav extends React.Component {
  render () {
    return (

      <div>
        <h1>Nav Component</h1>
        <Link to='/'>Get Weather</Link> {/* "to" points to specific path */}
        <Link to='/about'>About</Link>
        <Link to='/examples'>Examples</Link>
      </div>
    )
  }
}
