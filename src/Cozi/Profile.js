import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default class Profile extends Component {
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
                Profile
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div
          style={{
            backgroundColor: 'orange',
            display: 'flex',
            flexDirection: 'column',
            flex: 1
          }}
        >
          Profile
          <Button onClick={this.props.toggleAuth} variant='outlined'>
            Log out
          </Button>
        </div>
      </div>
    )
  }
}
