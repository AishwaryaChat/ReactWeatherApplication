const React = require('react')
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
const openWeatherMap = require('openWeatherMap')

export default class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location:'MIAMI',
      temp:30
    }
  }
  handleSearch (location) {
    const that = this
    openWeatherMap.getTemp(location)
    .then((temp) => {
      that.setState({
        location: location,
        temp: temp
      })
    })
    .catch((err) => alert(err))
  }
  render () {
    return (
      <div>
        <h4> Weather Component </h4>
        <WeatherForm onSearch={this.handleSearch.bind(this)} />
        <WeatherMessage location={this.state.location} temp={this.state.temp}/>
      </div>
    )
  }
}
