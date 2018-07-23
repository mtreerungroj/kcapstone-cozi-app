import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import Notifications from '@material-ui/icons/Notifications'

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import Search from '@material-ui/icons/Search'

import ShopbarcodeMk from '../assets/images/shopbarcode-mk.PNG'

import 'simplebar' // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css'

export default class CardMk extends Component {
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
                style={{ flexGrow: 1, marginLeft: 50 }}
              >
                MK Restaurants
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
                    onClick={() =>
                        this.props.openNotifications(this.props.oldPage)}
                    >
                    <Notifications />
                  </Badge>
                </IconButton>
                : <IconButton
                  color='inherit'
                  aria-label='notifications'
                  onClick={() =>
                      this.props.openNotifications(this.props.oldPage)}
                  style={{ marginRight: 0 }}
                  >
                  <Notifications />
                </IconButton>}

              <IconButton
                color='inherit'
                aria-label='search'
                onClick={() => this.props.openSearch(this.props.oldPage)}
              >
                <Search />
              </IconButton>

            </Toolbar>
          </AppBar>
        </div>

        <div data-simplebar style={{ height: 603, backgroundColor: '#FFFACD' }}>
          <img
            src={ShopbarcodeMk}
            alt='shop-barcode'
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    )
  }
}
