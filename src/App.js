import React, { Component } from 'react'
import Login from './Login'
import Cozi from './Cozi/Cozi'
import Register from './register/Register'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ECCA52' },
    secondary: { main: '#000000' }
  }
})

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isAuth: true,
      isRegister: false
    }
  }

  toggleAuth = () => this.setState({ isAuth: !this.state.isAuth })
  toggleRegister = () => this.setState({ isRegister: !this.state.isRegister })

  render () {
    return (
      <MuiThemeProvider theme={theme}>
        {this.state.isAuth
          ? <Cozi toggleAuth={this.toggleAuth} />
          : this.state.isRegister
              ? <Register
                toggleAuth={this.toggleAuth}
                toggleRegister={this.toggleRegister}
                />
              : <div style={{ height: '100vh' }}>
                <Login
                  toggleAuth={this.toggleAuth}
                  toggleRegister={this.toggleRegister}
                  />
              </div>}
      </MuiThemeProvider>
    )
  }
}

export default App
