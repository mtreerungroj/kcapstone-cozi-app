import React, { Component } from 'react'
import Login from './Login'
import Cozi from './Cozi/Cozi'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isAuth: false
    }
  }

  toggleAuth = () => this.setState({ isAuth: !this.state.isAuth })

  render () {
    return this.state.isAuth
      ? <Cozi toggleAuth={this.toggleAuth} />
      : <div style={{ height: '100vh' }}>
        <Login toggleAuth={this.toggleAuth} />
      </div>
  }
}

export default App
