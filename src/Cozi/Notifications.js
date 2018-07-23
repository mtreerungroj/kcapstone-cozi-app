import React, { Component } from 'react'
// import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'

import 'simplebar' // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css'

import noti1 from '../assets/images/noti1.png'
import noti2 from '../assets/images/noti2.png'
import noti3 from '../assets/images/noti3.png'
import noti4 from '../assets/images/noti4.png'
import noti5 from '../assets/images/noti5.png'
import noti6 from '../assets/images/noti6.png'
import noti7 from '../assets/images/noti7.png'
import noti8 from '../assets/images/noti8.png'
import noti9 from '../assets/images/noti9.png'

export default class Notifications extends Component {
  rendernotification = Noti => (
    <div>
      <ListItem button style={{ padding: 0 }}>
        <img src={Noti} alt={Noti} style={{ width: '100%', height: 'auto' }} />
      </ListItem>
    </div>
  )

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
          <AppBar position='static' color='secondary'>
            <Toolbar style={{ padding: 0 }}>
              <IconButton
                color='inherit'
                aria-label='Menu'
                onClick={() => this.props.handleChange(this.props.oldPage)}
              >
                <KeyboardArrowLeft />
              </IconButton>
              <Typography
                variant='title'
                color='primary'
                align='center'
                style={{ flexGrow: 1, marginLeft: 50, marginRight: 100 }}
              >
                Notification
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>
          <div data-simplebar style={{ height: 603 }}>
            {this.rendernotification(noti1)}
            {this.rendernotification(noti2)}
            {this.rendernotification(noti3)}
            {this.rendernotification(noti4)}
            {this.rendernotification(noti5)}
            {this.rendernotification(noti6)}
            {this.rendernotification(noti7)}
            {this.rendernotification(noti8)}
            {this.rendernotification(noti9)}
          </div>
        </div>
      </div>
    )
  }
}
