import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'

import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'

import promotionBurgerking from '../assets/images/promotion-burgerking.jpeg'
import logoBurgerking from '../assets/images/logo-burgerking.png'

export default class Detail1Promotion extends Component {
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
          src={promotionBurgerking}
          alt={promotionBurgerking}
          style={{
            width: '100%',
            height: 'auto'
          }}
        />
        <Divider />

        <ListItem>
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
              align='center'
              style={{ marginBottom: 10 }}
            >
              Burger King
            </Typography>
          </div>
        </ListItem>
      </div>
    )
  }
}
