import React, { Component } from 'react'

// import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import Notifications from '@material-ui/icons/Notifications'
import Search from '@material-ui/icons/Search'

import mypointbg from '../assets/images/mypoint-bg.PNG'
import FavCards from './FavCards'

export default class HomeHomePage extends Component {
  render () {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        <div>
          <AppBar position='static' color='secondary'>
            <Toolbar style={{ padding: 0 }}>
              <Typography
                variant='title'
                color='primary'
                align='center'
                style={{ flexGrow: 1, marginLeft: 100 }}
              >
                COZI+
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
                    onClick={() => this.props.openNotifications('home')}
                    >
                    <Notifications />
                  </Badge>
                </IconButton>
                : <IconButton
                  color='inherit'
                  aria-label='notifications'
                  onClick={() => this.props.openNotifications('home')}
                  style={{ marginRight: 0 }}
                  >
                  <Notifications />
                </IconButton>}

              <IconButton
                color='inherit'
                aria-label='search'
                onClick={() => this.props.openSearch('home')}
              >
                <Search />
              </IconButton>

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
              <Button
                variant='contained'
                color='primary'
                onClick={() => this.props.changePage('redeem')}
              >
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
