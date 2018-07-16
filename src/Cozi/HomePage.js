import React, { Component } from 'react'
// import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'

export default class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div
        style={{
          backgroundColor: 'red',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        <div>
          <AppBar position='static' color='default'>
            <Toolbar>
              <Typography variant='title' color='inherit' align='center'>
                COZI+
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div style={{ backgroundColor: 'yellow', display: 'flex', flex: 1 }}>
          Home
        </div>
      </div>
    )
  }
}
