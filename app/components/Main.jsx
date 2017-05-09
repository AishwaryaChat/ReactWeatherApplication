const React = require('react')
import Nav from 'Nav'

const Main = (props) => {
    return (
      <div>
        <Nav />
        <h1>Main Component</h1>
        {/*{this.props.children} */} {/* this can be removed as the props is already passed as argument */}
        {props.children}
      </div>
    )
}

export default Main
