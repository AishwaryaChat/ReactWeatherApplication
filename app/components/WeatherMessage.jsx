const React = require('react')

export default class WeatherMessage extends React.Component {
  render () {
    const {location, temp} = this.props
    return (
      <h3>It is {temp} in {location}.</h3>
    )
  }
}
