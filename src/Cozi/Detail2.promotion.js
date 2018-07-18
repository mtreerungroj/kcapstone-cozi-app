import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'

import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'

import promotionStarbucks from '../assets/images/promotion-starbucks.PNG'
import logoStarbucks from '../assets/images/logo-starbucks.png'

export default class Detail2Promotion extends Component {
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
            <Toolbar>
              <IconButton
                color='inherit'
                aria-label='Menu'
                onClick={() => this.props.changePage('home')}
              >
                <KeyboardArrowLeft />
              </IconButton>
              <Typography variant='title' color='primary' align='center'>
                Promotion
              </Typography>
            </Toolbar>
          </AppBar>
        </div>

        <img
          src={promotionStarbucks}
          alt={promotionStarbucks}
          style={{
            width: '100%',
            height: 'auto'
          }}
        />
        <Divider />

        <ListItem color='black'>
          <Avatar
            alt={logoStarbucks}
            src={logoStarbucks}
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
              Starbucks
            </Typography>
            <Typography
              variant='body2'
              color='inherit'
              style={{ marginBottom: 10 }}
            >
              New Flavor until the end of this month only
            </Typography>
          </div>
        </ListItem>

        {this.renderDetail(
          'Show your flavor with our latest indulgent blended beverages.'
        )}
        {this.renderDetail(
          'Irish Cream Coffee Pudding Frappuccino® Creamy coffee pudding and Irish coffee flavor topped with Turkish ground coffee.'
        )}
        {this.renderDetail(
          'Matcha Earl Grey Jelly Frappuccino®: Green tea and Earl Grey over a layer of Earl Grey jelly and whipped cream.'
        )}

        <div style={{ marginBottom: 20 }}>
          <Typography
            variant='body2'
            color='inherit'
            style={{ marginLeft: 40, marginRight: 40 }}
          >
            <span role='img' aria-label='clock'>🕒</span>
            Available on June 13rd at every Starbucks stores.
          </Typography>
        </div>

      </div>
    )
  }
}
