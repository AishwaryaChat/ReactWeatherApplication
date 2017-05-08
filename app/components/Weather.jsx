const React = require('react')
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'

export default class Weather extends React.Component {
  render () {
    return (
      <div>
        <h4> Weather Component </h4>
        <WeatherForm />
        <WeatherMessage />
      </div>
    )
  }
}
