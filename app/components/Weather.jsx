const React = require('react')
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
const openWeatherMap = require('openWeatherMap')

export default class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false
    }
  }
  handleSearch (location) {
    debugger
    this.setState({isLoading: true})
    openWeatherMap.getTemp(location)
    .then((temp) => {
      this.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    })
    .catch((err) => {
      this.setState({isLoading: false})
      alert(err)})
  }
  render () {
    const {isLoading, temp, location} = this.state

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching Weather</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    return (
      <div>
        <h4> Weather Component </h4>
        <WeatherForm onSearch={this.handleSearch.bind(this)} />
        {renderMessage()}
      </div>
    )
  }
}
