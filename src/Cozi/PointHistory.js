import React, { Component } from 'react'
// import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'

import Notifications from '@material-ui/icons/Notifications'
import Search from '@material-ui/icons/Search'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'

import 'simplebar' // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css'

import his1 from '../assets/images/his1.PNG'
import his2 from '../assets/images/his2.PNG'
import his3 from '../assets/images/his3.PNG'
import his4 from '../assets/images/his4.PNG'
import his5 from '../assets/images/his5.PNG'
import his6 from '../assets/images/his6.PNG'
import his7 from '../assets/images/his7.PNG'
import his8 from '../assets/images/his8.PNG'

export default class PointHistory extends Component {
  renderHistory = history => (
    <div>
      <ListItem button style={{ padding: 0 }}>
        <img
          src={history}
          alt={history}
          style={{ width: '100%', height: 'auto' }}
        />
      </ListItem>
      <Divider />
    </div>
  )

  render () {
    return (
      <div
        style={{
          height: '100%',
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
                onClick={() => this.props.changePage('home')}
              >
                <KeyboardArrowLeft />
              </IconButton>
              <Typography
                variant='title'
                color='primary'
                align='center'
                style={{ flexGrow: 1, marginLeft: 50 }}
              >
                Point history
              </Typography>

              {this.props.badge
                ? <IconButton
                  color='inherit'
                  aria-label='notifications'
                  style={{ marginRight: 0 }}
                  >
                  <Badge
                    badgeContent={'3'}
                    color='error'
                    onClick={() => this.props.openNotifications('profile')}
                    >
                    <Notifications />
                  </Badge>
                </IconButton>
                : <IconButton
                  color='inherit'
                  aria-label='notifications'
                  onClick={() => this.props.openNotifications('profile')}
                  style={{ marginRight: 0 }}
                  >
                  <Notifications />
                </IconButton>}

              <IconButton
                color='inherit'
                aria-label='search'
                onClick={() => this.props.openSearch('profile')}
              >
                <Search />
              </IconButton>

            </Toolbar>
          </AppBar>
        </div>
        <div
          data-simplebar
          style={{ display: 'flex', flex: 1, height: '100%' }}
        >
          {this.renderHistory(his1)}
          {this.renderHistory(his2)}
          {this.renderHistory(his3)}
          {this.renderHistory(his4)}
          {this.renderHistory(his5)}
          {this.renderHistory(his6)}
          {this.renderHistory(his7)}
          {this.renderHistory(his8)}
        </div>
      </div>
    )
  }
}
