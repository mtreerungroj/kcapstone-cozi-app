import React, { Component } from 'react'
import Login from './Login'

// import { createMuiTheme } from '@material-ui/core/styles'

// // Theme
// const theme = createMuiTheme({
//   fontFamily: 'Kanit, sans-serif',
//   palette: {
//     primary: {
//       main: '#FFFACD'
//     },
//     secondary: {
//       main: '#000000'
//     }
//   }
// })

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
          // backgroundColor: 'red'
        }}
      >
        <Login toggleAuth={this.toggleAuth} />
      </div>
    )
  }
}

export default App
