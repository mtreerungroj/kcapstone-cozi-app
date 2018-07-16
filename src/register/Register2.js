import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'

import Event from '@material-ui/icons/Event'
import AccountCircle from '@material-ui/icons/AccountCircle'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'

let genders = ['Male', 'Female', 'Others']

export default class Register2 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gender: ''
    }
  }

  handleChange = event => this.setState({ gender: event.target.value })

  signup = () => {
    this.props.toggleAuth()
    this.props.toggleRegister()
  }

  render () {
    return (
      <div>
        <AppBar position='static' classes={{ colorDefault: 'black' }}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='Menu'
              onClick={this.props.togglePage}
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
            id='input-first-name'
            label='First Name'
            placeholder='First Name'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircle />
                </InputAdornment>
              )
            }}
            style={{ marginTop: 20 }}
          />
          <TextField
            id='input-last-name'
            label='Last Name'
            placeholder='Last Name'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircle />
                </InputAdornment>
              )
            }}
            style={{ marginTop: 20 }}
          />
          <TextField
            id='date-of-birth'
            label='Date of Birth'
            type='date'
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Event />
                </InputAdornment>
              )
            }}
            style={{ marginTop: 20 }}
          />
          <FormControl>
            <InputLabel htmlFor='select-multiple'>Gender</InputLabel>
            <Select
              value={this.state.gender}
              onChange={this.handleChange}
              input={<Input id='gender' />}
              style={{ marginTop: 40 }}
            >
              {genders.map(gender => (
                <MenuItem key={gender} value={gender}>
                  {gender}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div
            style={{ marginTop: 20, width: 'fitContent', textAlign: 'center' }}
          >
            <Button
              onClick={this.signup}
              variant='outlined'
              style={{ marginTop: 40 }}
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
