import React, { Component } from 'react'
import Login from './Login'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isAuth: false
    }
  }

  toggleAuth = () => {
    this.setState({ isAuth: !this.state.isAuth })
    console.log(this.state)
  }

  render () {
    return (
      <div
        style={{
          height: '100vh'
          // backgroundColor: 'black'
        }}
      >
        <Login toggleAuth={this.toggleAuth} />
      </div>
    )
  }
}

export default App
