import React, { Component } from 'react'

// import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import mypointbg from '../assets/images/mypoint-bg.PNG'
import FavCards from './FavCards'

export default class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div
        style={{
          // backgroundColor: 'red',
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
        <div style={{ marginTop: 10 }}>
          <Typography variant='title' color='inherit' align='center'>
            My cozi+ points
          </Typography>
          <div style={{ position: 'relative' }}>
            <img
              src={mypointbg}
              alt='mypoint-bg'
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
            <div
              style={{
                position: 'absolute',
                color: '#ECCA52',
                top: 120,
                left: 250
              }}
            >
              <Button variant='contained' color='secondary'>
                Redeem
              </Button>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 10 }}>
          <Typography variant='title' color='inherit' align='center'>
            Favorite cards
          </Typography>
          <FavCards />
        </div>
      </div>
    )
  }
}
