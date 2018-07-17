import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

import user from '../assets/images/user.png'
import Storage from '@material-ui/icons/Storage'
import Settings from '@material-ui/icons/Settings'
import Help from '@material-ui/icons/Help'
import Assignment from '@material-ui/icons/Assignment'
import Security from '@material-ui/icons/Security'
import ExitToApp from '@material-ui/icons/ExitToApp'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

export default class HomeProfile extends Component {
  render () {
    return (
      <div
        style={{
          // backgroundColor: 'red',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        <div>
          <AppBar position='static' color='secondary'>
            <Toolbar>
              <Typography variant='title' color='primary' align='center'>
                Profile
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div
          style={{
            // backgroundColor: 'orange',
            display: 'flex',
            flexDirection: 'column',
            flex: 1
          }}
        >
          <ListItem>
            <Avatar
              alt='user'
              src={user}
              style={{
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10,
                width: 100,
                height: 100
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                variant='title'
                color='inherit'
                align='center'
                style={{ marginBottom: 10 }}
              >
                Piyathida Wongsuwan
              </Typography>
              <div style={{ textAlign: 'center' }}>
                <Button
                  variant='outlined'
                  color='primary'
                  style={{ width: 160 }}
                >
                  Edit profile
                </Button>
              </div>
            </div>
          </ListItem>

          <div style={{ textAlign: 'center' }}>
            <Button
              variant='contained'
              color='primary'
              onClick={() => this.props.changePage('pointhistory')}
              style={{ width: 200, marginTop: 20, marginBottom: 40 }}
            >
              <Storage style={{ marginRight: 10 }} />
              Point History
            </Button>
          </div>
          <List component='nav'>
            <Divider />

            <ListItem button>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary='Setting' />
            </ListItem>

            <Divider />

            <ListItem button>
              <ListItemIcon>
                <Help />
              </ListItemIcon>
              <ListItemText primary='Help' />
            </ListItem>

            <Divider />

            <ListItem button>
              <ListItemIcon>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary={'Terms & conditions'} />
            </ListItem>

            <Divider />

            <ListItem button>
              <ListItemIcon>
                <Security />
              </ListItemIcon>
              <ListItemText primary={'Privacy & policy'} />
            </ListItem>

            <Divider />

            <ListItem button onClick={this.props.toggleAuth}>
              <ListItemIcon>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText primary={'Log out'} />
            </ListItem>

            <Divider />

          </List>
        </div>
      </div>
    )
  }
}