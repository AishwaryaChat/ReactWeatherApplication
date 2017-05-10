const React = require('react')
const {Link, IndexLink} = require('react-router')

const Examples = (props) => {
  return (
    <div>
      <h1 className='center-align'>Examples</h1>
      <p>Here are few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=bhopal'>Bhopal</Link>
        </li>
        <li>
          <Link to='/?location=bengaluru'>Bengaluru</Link>
        </li>
      </ol>
    </div>
  )
}

export default Examples
