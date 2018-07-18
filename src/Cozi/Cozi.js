import React, { Component } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Divider from '@material-ui/core/Divider'

import Home from '@material-ui/icons/Home'
import Store from '@material-ui/icons/Store'
import CreditCard from '@material-ui/icons/CreditCard'
import Person from '@material-ui/icons/Person'

import HomePage from './HomePage'
import Promotion from './Promotion'
import MyCards from './MyCards'
import Profile from './Profile'

export default class Cozi extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 'home',
      badge: true
    }
  }

  handleChange = (event, page) => this.setState({ page })

  unBadge = () => this.setState({ badge: false })

  renderBody = () => {
    switch (this.state.page) {
      case 'home':
        return (
          <HomePage
            handleChange={this.handleChange}
            badge={this.state.badge}
            unBadge={this.unBadge}
          />
        )
      case 'promotion':
        return (
          <Promotion
            handleChange={this.handleChange}
            badge={this.state.badge}
            unBadge={this.unBadge}
          />
        )
      case 'mycards':
        return (
          <MyCards
            handleChange={this.handleChange}
            badge={this.state.badge}
            unBadge={this.unBadge}
          />
        )
      case 'profile':
        return (
          <Profile
            toggleAuth={this.props.toggleAuth}
            handleChange={this.handleChange}
            badge={this.state.badge}
            unBadge={this.unBadge}
          />
        )
      default:
        return (
          <Home
            handleChange={this.handleChange}
            badge={this.state.badge}
            unBadge={this.unBadge}
          />
        )
    }
  }

  render () {
    const { page } = this.state

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        <div style={{ display: 'flex', flex: 1 }}>
          {this.renderBody()}
        </div>
        <div>
          <Divider />
          <BottomNavigation
            value={page}
            onChange={this.handleChange}
            showLabels
          >
            <BottomNavigationAction value='home' label='Home' icon={<Home />} />
            <BottomNavigationAction
              value='promotion'
              label='Promotion'
              icon={<Store />}
            />
            <BottomNavigationAction
              value='mycards'
              label='My Cards'
              icon={<CreditCard />}
            />
            <BottomNavigationAction
              value='profile'
              label='Profile'
              icon={<Person />}
            />
          </BottomNavigation>
        </div>
      </div>
    )
  }
}
