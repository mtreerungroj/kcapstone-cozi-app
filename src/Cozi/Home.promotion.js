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

import 'simplebar' // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css'

import promotion1 from '../assets/images/promotion1.PNG'
import promotion2 from '../assets/images/promotion2.PNG'
import promotion3 from '../assets/images/promotion3.PNG'
import promotion4 from '../assets/images/promotion4.PNG'
import promotion5 from '../assets/images/promotion5.PNG'
import promotion6 from '../assets/images/promotion6.PNG'
import promotion7 from '../assets/images/promotion7.PNG'
import promotion8 from '../assets/images/promotion8.PNG'
import promotion9 from '../assets/images/promotion9.PNG'

export default class HomePromotion extends Component {
  renderPromotion = promotion => (
    <div>
      <ListItem button style={{ padding: 0 }}>
        <img
          src={promotion}
          alt={promotion}
          style={{
            width: '100%',
            height: 'auto'
          }}
        />
      </ListItem>
      <Divider />
    </div>
  )

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
            <Toolbar>
              <Typography
                variant='title'
                color='primary'
                align='center'
                style={{ flexGrow: 1, marginLeft: 100 }}
              >
                Promotion
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
                    onClick={() => this.props.openNotifications('promotion')}
                    >
                    <Notifications />
                  </Badge>
                </IconButton>
                : <IconButton
                  color='inherit'
                  aria-label='notifications'
                  onClick={() => this.props.openNotifications('promotion')}
                  style={{ marginRight: 0 }}
                  >
                  <Notifications />
                </IconButton>}

              <IconButton
                color='inherit'
                aria-label='search'
                onClick={() => this.props.openSearch('promotion')}
              >
                <Search />
              </IconButton>

            </Toolbar>
          </AppBar>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>
          <div data-simplebar style={{ height: 603 }}>

            <ListItem
              button
              onClick={() => this.props.changePage('detail1')}
              style={{ padding: 0 }}
            >
              <img
                src={promotion1}
                alt={promotion1}
                style={{
                  width: '100%',
                  height: 'auto'
                }}
              />
            </ListItem>
            <Divider />

            <ListItem
              button
              onClick={() => this.props.changePage('detail2')}
              style={{ padding: 0 }}
            >
              <img
                src={promotion2}
                alt={promotion2}
                style={{
                  width: '100%',
                  height: 'auto'
                }}
              />
            </ListItem>
            <Divider />

            {this.renderPromotion(promotion3)}
            {this.renderPromotion(promotion4)}
            {this.renderPromotion(promotion5)}
            {this.renderPromotion(promotion6)}
            {this.renderPromotion(promotion7)}
            {this.renderPromotion(promotion8)}
            {this.renderPromotion(promotion9)}
          </div>
        </div>
      </div>
    )
  }
}
