import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Email from '@material-ui/icons/Email'
import VpnKey from '@material-ui/icons/VpnKey'
import Phone from '@material-ui/icons/Phone'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'

export default class Register1 extends Component {
  render () {
    return (
      <div>
        <AppBar position='static' classes={{ colorDefault: 'black' }}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='Menu'
              onClick={this.props.toggleRegister}
            >
              <KeyboardArrowLeft />
            </IconButton>
            <Typography variant='title' color='inherit'>
              Sign up
            </Typography>
          </Toolbar>
        </AppBar>
        <div
          style={{
            marginTop: 60,
            marginLeft: 60,
            marginRight: 60,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <TextField
            id='input-email'
            label='Email'
            placeholder='Email'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Email />
                </InputAdornment>
              )
            }}
            style={{ marginTop: 20 }}
          />
          <TextField
            id='input-password'
            label='Password'
            placeholder='Password'
            type='password'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <VpnKey />
                </InputAdornment>
              )
            }}
            style={{ marginTop: 20 }}
          />
          <TextField
            id='input-confirm-password'
            label='Confirm Password'
            placeholder='Confirm Password'
            type='password'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <VpnKey />
                </InputAdornment>
              )
            }}
            style={{ marginTop: 20 }}
          />
          <TextField
            id='input-phone-number'
            label='Phone Number'
            placeholder='Phone Number'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Phone />
                </InputAdornment>
              )
            }}
            style={{ marginTop: 20 }}
          />
          <div
            style={{ marginTop: 20, width: 'fitContent', textAlign: 'center' }}
          >
            <Button
              onClick={this.props.togglePage}
              variant='outlined'
              style={{ marginTop: 40 }}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
