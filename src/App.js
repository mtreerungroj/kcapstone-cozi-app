import React, { Component } from 'react'
import Login from './Login'
import Cozi from './Cozi/Cozi'
import Register from './register/Register'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isAuth: false,
      isRegister: true
    }
  }

  toggleAuth = () => this.setState({ isAuth: !this.state.isAuth })
  toggleRegister = () => this.setState({ isRegister: !this.state.isRegister })

  render () {
    return this.state.isAuth
      ? <Cozi toggleAuth={this.toggleAuth} />
      : this.state.isRegister
          ? <Register />
          : <div style={{ height: '100vh' }}>
            <Login
              toggleAuth={this.toggleAuth}
              toggleRegister={this.toggleRegister}
              />
          </div>
  }
}

export default App
