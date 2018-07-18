import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'

import 'simplebar' // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css'

import user from '../assets/images/user.png'

export default class MyCards extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  renderRowCard = (store1, store2, store3, store4) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        marginBottom: 10
      }}
    >
      <Avatar alt={store1} src={store1} style={{ width: 80, height: 80 }} />
      <Avatar alt={store2} src={store2} style={{ width: 80, height: 80 }} />
      <Avatar alt={store3} src={store3} style={{ width: 80, height: 80 }} />
      <Avatar alt={store4} src={store4} style={{ width: 80, height: 80 }} />
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
              <Typography variant='title' color='primary' align='center'>
                My Cards
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div
          style={{
            backgroundColor: '#F8F3BF',
            display: 'flex',
            flexDirection: ' column',
            flex: 1
          }}
        >

          <div style={{ marginTop: 10, marginLeft: 10, marginBottom: 5 }}>
            <Typography variant='title' color='inherit'>
              Recently
            </Typography>
          </div>
          <Card style={{ height: 100 }}>
            {this.renderRowCard(user, user, user, user)}
          </Card>

          <div style={{ marginTop: 10, marginLeft: 10, marginBottom: 5 }}>
            <Typography variant='title' color='inherit'>
              Favortite cards
            </Typography>
          </div>
          <Card style={{ height: 100 }}>
            {this.renderRowCard(user, user, user, user)}
          </Card>

          <div style={{ marginTop: 10, marginLeft: 10, marginBottom: 5 }}>
            <Typography variant='title' color='inherit'>
              All cards
            </Typography>
          </div>
          <div data-simplebar style={{ height: 285 }}>
            <Card>
              <div
                style={{
                  display: 'flex',
                  flexDirection: ' column'
                }}
              >
                {this.renderRowCard(user, user, user, user)}
                {this.renderRowCard(user, user, user, user)}
                {this.renderRowCard(user, user, user, user)}
                {this.renderRowCard(user, user, user, user)}
              </div>
            </Card>
          </div>

        </div>
      </div>
    )
  }
}
