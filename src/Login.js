import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import logo from './assets/images/logo.png'
import loginwith from './assets/images/login-with.png'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rememberme: false
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }

  render () {
    return (
      <div>
        <img src={logo} alt='logo' style={{ width: '100%' }} />
        <div
          style={{
            marginLeft: 80,
            marginRight: 80,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <TextField
            id='username'
            label='Username'
            placeholder='Username'
            margin='normal'
          />
          <TextField
            id='password'
            label='Password'
            placeholder='Password'
            margin='normal'
            type={this.state.showPassword ? 'text' : 'password'}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checked}
                onChange={this.handleChange('rememberme')}
                value='rememberme'
              />
            }
            label='Remember me'
          />
          <div
            style={{ marginTop: 20, width: 'fitContent', textAlign: 'center' }}
          >
            <Button onClick={this.props.toggleAuth} variant='outlined'>
              Login
            </Button>
          </div>
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <Typography variant='body1'>
              <a href='url'>Forgot password?</a>
            </Typography>
          </div>
          <div style={{ textAlign: 'center', marginTop: 20, marginBottom: 10 }}>
            <Typography variant='body1'>
              or log in with
            </Typography>
          </div>
          <img src={loginwith} alt='login with' style={{ width: '100%' }} />
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <Typography variant='body1'>
              Create new account {' '}
              <a style={{ color: 'blue' }} onClick={this.props.toggleRegister}>
                <u>Sign up</u>
              </a>
            </Typography>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
