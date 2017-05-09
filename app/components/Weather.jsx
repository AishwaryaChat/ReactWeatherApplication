const React = require('react')
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'

export default class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location:'MIAMI',
      temp:30
    }
  }
  handleSearch (location) {
    this.setState({
      location: location,
      temp: 23
    })
  }
  render () {
    const {location, temp} = this.state

    return (
      <div>
        <h4> Weather Component </h4>
        <WeatherForm onSearch={this.handleSearch.bind(this)} />
        <WeatherMessage location={location} temp={temp}/>
      </div>
    )
  }
}
