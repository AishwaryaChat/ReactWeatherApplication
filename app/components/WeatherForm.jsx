const React = require('react')

export default class WeatherForm extends React.Component {
  render () {
    return (
      <div>
        <form>
          <input type='text' ref='cityName' placeholder='Enter City Name' /> <br />
          <button>Get Weather</button>
        </form>
      </div>
    )
  }
}
