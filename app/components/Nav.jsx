const React = require('react')
const {Link, IndexLink} = require('react-router') // provide the links to route to different paths

export default class Nav extends React.Component {
  render () {
    return (

      <div>
        <h1>Nav Component</h1>
        {/* "to" points to specific path */}
        {/* 'Link' is used instead of <a> tag, because Link comes with extra styling features */}
        {/* 'activeClassName' property gives a classname(active in this case) to a component when then component is rendered */}
        {/* While using IndexRoute donot use Link instead use 'IndexLink' */}
        <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
    )
  }
}
