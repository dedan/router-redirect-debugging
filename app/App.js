import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'


const Container = React.createClass({

  componentWillMount() {
    hashHistory.push('/happy')
  },

  render() {
    return (
      <div>
        <h1>React Router Playground</h1>
        <Link to='/happy'>happy</Link>
        <span>   </span>
        <Link to='/broken'>broken</Link>
        {this.props.children}
      </div>
    )
  }
})

const BrokenChildComponent = React.createClass({
  render() {
    this.does.not.exist = True
    return (
      <div>
        <h1>I am the broken child</h1>
      </div>
    )
  }
})

const HappyChildComponent = React.createClass({
  render() {
    return (
      <div>
        <h1>I am the happy child</h1>
      </div>
    )
  }
})


const App = () => {
  return  <Router history={hashHistory}>
    <Route path="/" component={Container}>
      <Route path="/broken" component={BrokenChildComponent} />
      <Route path="/happy" component={HappyChildComponent} />
    </Route>
  </Router>

}

export default App
