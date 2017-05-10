const React = require('react')

const About = (props) => {
  return (
    <div>
      <h1 className='center-align'>About</h1>
      <p>This is a weather application built on react.
        I have built it as a react practice project.</p>
      <p>
        Resources used:
      </p>
      <ul>
        <li>
          <a href='https://facebook.github.io/react'>React: </a>
          Used this Javascript Framework.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map: </a>
          Used This weather API.
        </li>
      </ul>
    </div>
  )
}

export default About
