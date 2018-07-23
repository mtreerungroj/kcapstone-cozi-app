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

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import Notifications from '@material-ui/icons/Notifications'
import Search from '@material-ui/icons/Search'

export default class HomeProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleClickOpen = () => this.setState({ open: true })

  handleClose = () => this.setState({ open: false })

  handleCloseWithLogout = () => {
    this.setState({ open: false })
    this.props.toggleAuth()
  }

  transition = props => <Slide direction='up' {...props} />

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

        <Dialog
          open={this.state.open}
          TransitionComponent={this.transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby='alert-dialog-slide-title'
          aria-describedby='alert-dialog-slide-description'
        >
          <DialogTitle>
            {'Log out'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to log out?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseWithLogout} color='primary'>
              Yes
            </Button>
            <Button onClick={this.handleClose} color='primary'>
              No
            </Button>
          </DialogActions>
        </Dialog>

        <div>
          <AppBar position='static' color='secondary'>
            <Toolbar style={{ padding: 0 }}>
              <Typography
                variant='title'
                color='primary'
                align='center'
                style={{ flexGrow: 1, marginLeft: 100 }}
              >
                Profile
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
                    onClick={() => this.props.openNotifications('profile')}
                    >
                    <Notifications />
                  </Badge>
                </IconButton>
                : <IconButton
                  color='inherit'
                  aria-label='notifications'
                  onClick={() => this.props.openNotifications('profile')}
                  style={{ marginRight: 0 }}
                  >
                  <Notifications />
                </IconButton>}

              <IconButton
                color='inherit'
                aria-label='search'
                onClick={() => this.props.openSearch('profile')}
              >
                <Search />
              </IconButton>

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

            <ListItem button onClick={this.handleClickOpen}>
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
