const React = require('react')

export default class WeatherMessage extends React.Component {
  render () {
    const temp = this.props.temp
    const location = this.props.location
    return (
      <h3>It is {temp} in {location}.</h3>
    )
  }
}
