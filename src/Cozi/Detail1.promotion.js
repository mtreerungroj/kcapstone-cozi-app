import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import Badge from '@material-ui/core/Badge'

import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import Notifications from '@material-ui/icons/Notifications'
import Search from '@material-ui/icons/Search'

import promotionBurgerking from '../assets/images/promotion-burgerking.jpeg'
import logoBurgerking from '../assets/images/logo-burgerking.png'

export default class Detail1Promotion extends Component {
  renderDetail = text => (
    <div style={{ marginBottom: 20 }}>
      <Typography
        variant='body1'
        color='inherit'
        style={{ marginLeft: 40, marginRight: 40 }}
      >
        {text}
      </Typography>
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

        <img
          src={promotionBurgerking}
          alt={promotionBurgerking}
          style={{
            width: '100%',
            height: 'auto'
          }}
        />
        <Divider />

        <ListItem color='black'>
          <Avatar
            alt={logoBurgerking}
            src={logoBurgerking}
            style={{
              marginLeft: 10,
              marginRight: 10,
              width: 60,
              height: 60
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant='title'
              color='inherit'
              style={{ marginBottom: 10 }}
            >
              Burger King
            </Typography>
            <Typography
              variant='body2'
              color='inherit'
              style={{ marginBottom: 10 }}
            >
              Special menu with Angus XT set
            </Typography>
          </div>
        </ListItem>

        {this.renderDetail(
          'Signature flame-grilled 100% Australian Angus beef and extra thick - 155 grams. You can enjoy the original Angus XT with our original steakhouse sauce, American cheese, thick-cut crispy bacon, fresh lettuce, crunchy pickles, and juicy tomatoes.'
        )}
        {this.renderDetail(
          'Or you can enjoy our new special menu, the Angus XT Black Truffle, topped with Black Truffle sauce, imported from Italy and savory champignons.'
        )}
        {this.renderDetail(
          'All value meals included regular fries and regular soft drink.'
        )}

        <div style={{ marginBottom: 20 }}>
          <Typography
            variant='body2'
            color='inherit'
            style={{ marginLeft: 40, marginRight: 40 }}
          >
            <span role='img' aria-label='clock'>🕒</span>
            From 29 June - 2 October 2018 (or until stock lasts)
          </Typography>
        </div>

      </div>
    )
  }
}
