import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Snackbar from '@material-ui/core/Snackbar'
import Badge from '@material-ui/core/Badge'

import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import Notifications from '@material-ui/icons/Notifications'
import Search from '@material-ui/icons/Search'

import 'simplebar' // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css'

import redeem1 from '../assets/images/redeem1.png'
import redeem2 from '../assets/images/redeem2.png'
import redeem3 from '../assets/images/redeem3.png'
import redeem4 from '../assets/images/redeem4.png'
import redeem5 from '../assets/images/redeem5.png'

export default class Redeem extends Component {
  state = {
    opendialog1: false,
    opendialog2: false,
    opensnackbar: false
  }
  handleClickOpendialog1 = () => {
    this.setState({ opendialog1: true })
  }

  handleClickOpendialog2 = () => {
    this.setState({ opendialog2: true })
  }
  handleClose = () => {
    this.setState({
      opendialog1: false,
      opendialog2: false,
      opensnackbar: false
    })
  }

  handleClicksnackbar = () => {
    this.setState({ opendialog1: false, opensnackbar: true })
  }

  renderRedeem = Redeem => (
    <div>
      <ListItem
        onClick={this.handleClickOpendialog1}
        button
        style={{ padding: 0 }}
      >
        <img
          src={Redeem}
          alt={Redeem}
          style={{ width: '100%', height: 'auto' }}
        />
      </ListItem>
      <Divider />
    </div>
  )
  Cannotredeem = Notredeem => (
    <div>
      <ListItem
        onClick={this.handleClickOpendialog2}
        button
        style={{ padding: 0 }}
      >
        <img
          src={Notredeem}
          alt={Notredeem}
          style={{ width: '100%', height: 'auto' }}
        />
      </ListItem>
      <Divider />
    </div>
  )

  render () {
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        <Dialog open={this.state.opendialog1}>
          <DialogTitle>{'Confirm'}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to redeem Cozi+ Gift?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color='primary'>
              Cancel
            </Button>
            <Button
              onClick={this.handleClicksnackbar}
              color='primary'
              autoFocus
            >
              Redeem
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={this.state.opensnackbar}
          autoHideDuration={2000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id='message-id'>Success!!</span>}
          action={[
            <Button
              key='undo'
              color='secondary'
              size='small'
              onClick={this.handleClose}
            >
              UNDO
            </Button>,
            <IconButton
              key='close'
              aria-label='Close'
              color='inherit'
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />

        <Dialog
          open={this.state.opendialog2}
          onClose={this.handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>
            {'Not enought points'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              You need more points to redeem!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color='primary'>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

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
                style={{ flexGrow: 1, marginLeft: 30 }}
              >
                Redeem
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
                    onClick={() => this.props.openNotifications('home')}
                    >
                    <Notifications />
                  </Badge>
                </IconButton>
                : <IconButton
                  color='inherit'
                  aria-label='notifications'
                  onClick={() => this.props.openNotifications('home')}
                  style={{ marginRight: 0 }}
                  >
                  <Notifications />
                </IconButton>}

              <IconButton
                color='inherit'
                aria-label='search'
                onClick={() => this.props.openSearch('home')}
              >
                <Search />
              </IconButton>

            </Toolbar>
          </AppBar>

        </div>
        <div
          data-simplebar
          style={{ display: 'flex', flex: 1, height: '100%' }}
        >
          {this.renderRedeem(redeem1)}
          {this.renderRedeem(redeem2)}
          {this.renderRedeem(redeem3)}
          {this.Cannotredeem(redeem4)}
          {this.Cannotredeem(redeem5)}

        </div>
      </div>
    )
  }
}
