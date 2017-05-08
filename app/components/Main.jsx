const React = require('react')
import Nav from 'Nav'
// import Weather from 'Weather'

export default class Main extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <h1>Main Component</h1>
        {this.props.children}
      </div>
    )
  }
}
