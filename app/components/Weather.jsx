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
    console.log(location)
    this.setState({
      location: undefined,
      temp: undefined,
      isLoading: true
    })
    openWeatherMap.getTemp(location)
    .then((temp) => {
      this.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    })
    .catch((err) => {
      this.setState({
        isLoading: false,})
        alert('City Not found')
      })
  }

  componentDidMount () {
    const location = this.props.location.query.location
    if(location && location.length>0) {
      this.handleSearch(location)
      window.location.hash ='#/'
    }
  }

  componentWillReceiveProps () {
      const location = this.props.location.query.location
      if(location && location.length>0) {
        this.handleSearch(location)
        window.location.hash ='#/'
      }
  }

  render () {
    const {isLoading, temp, location, errorMessage} = this.state

    function renderMessage() {
      if (isLoading) {
        return <h3 className='center-align'>Fetching Weather</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    return (
      <div>
        <h1 className='center-align page-title'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch.bind(this)} />
        {renderMessage()}
      </div>
    )
  }
}
