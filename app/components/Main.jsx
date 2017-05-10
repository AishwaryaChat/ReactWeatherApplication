const React = require('react')
import Nav from 'Nav'

const Main = (props) => {
    return (
      <div>
        <Nav />
        <div className='row'>
          <div className='col m6 offset-m3 l4 offset-l4' >
            {/*{this.props.children} this can be removed as the props is already passed as argument */}
            {props.children}
          </div>
        </div>
      </div>
    )
}

export default Main
