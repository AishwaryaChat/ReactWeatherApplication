const React = require('react')

const WeatherMessage = (props) => {
    const {temp, location} = props
    return (
      <h3>It is {temp} in {location}.</h3>
    )
}

// can also be done like below
// const WeatherMessage = ({temp, location}) => {
//     return (
//       <h3>It is {temp} in {location}.</h3>
//     )
// }

export default  WeatherMessage
