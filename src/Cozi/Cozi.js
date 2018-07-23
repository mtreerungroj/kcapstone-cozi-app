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
import Notifications from './Notifications'
import Search from './Search'

import CardStarbucks from './CardStarbucks'
import CardCosta from './CardCosta'
import CardCoffee from './CardCoffee'
import CardMk from './CardMk'

export default class Cozi extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 'home',
      badge: true,
      oldPage: 'home'
    }
  }

  handleChange = page => this.setState({ page })

  openNotifications = oldPage =>
    this.setState({ oldPage, page: 'notifications', badge: false })

  openSearch = oldPage => this.setState({ oldPage, page: 'search' })

  openCard = (oldPage, storeName) => {
    ;(storeName === 'starbucks' ||
      storeName === 'costa' ||
      storeName === 'coffeebean' ||
      storeName === 'mk') &&
      this.setState({ oldPage, page: storeName })
  }

  renderBody = () => {
    switch (this.state.page) {
      case 'home':
        return (
          <HomePage
            handleChange={this.handleChange}
            badge={this.state.badge}
            openNotifications={this.openNotifications}
            openSearch={this.openSearch}
            openCard={this.openCard}
          />
        )
      case 'promotion':
        return (
          <Promotion
            handleChange={this.handleChange}
            badge={this.state.badge}
            openNotifications={this.openNotifications}
            openSearch={this.openSearch}
          />
        )
      case 'mycards':
        return (
          <MyCards
            handleChange={this.handleChange}
            badge={this.state.badge}
            openNotifications={this.openNotifications}
            openSearch={this.openSearch}
            openCard={this.openCard}
          />
        )
      case 'profile':
        return (
          <Profile
            toggleAuth={this.props.toggleAuth}
            handleChange={this.handleChange}
            badge={this.state.badge}
            openNotifications={this.openNotifications}
            openSearch={this.openSearch}
          />
        )
      case 'notifications':
        return (
          <Notifications
            oldPage={this.state.oldPage}
            handleChange={this.handleChange}
          />
        )
      case 'search':
        return (
          <Search
            oldPage={this.state.oldPage}
            handleChange={this.handleChange}
            openCard={this.openCard}
          />
        )
      case 'starbucks':
        return (
          <CardStarbucks
            oldPage={this.state.oldPage}
            handleChange={this.handleChange}
            badge={this.state.badge}
            openNotifications={this.openNotifications}
            openSearch={this.openSearch}
          />
        )
      case 'costa':
        return (
          <CardCosta
            oldPage={this.state.oldPage}
            handleChange={this.handleChange}
            badge={this.state.badge}
            openNotifications={this.openNotifications}
            openSearch={this.openSearch}
          />
        )
      case 'coffeebean':
        return (
          <CardCoffee
            oldPage={this.state.oldPage}
            handleChange={this.handleChange}
            badge={this.state.badge}
            openNotifications={this.openNotifications}
            openSearch={this.openSearch}
          />
        )
      case 'mk':
        return (
          <CardMk
            oldPage={this.state.oldPage}
            handleChange={this.handleChange}
            badge={this.state.badge}
            openNotifications={this.openNotifications}
            openSearch={this.openSearch}
          />
        )
      default:
        return (
          <HomePage
            handleChange={this.handleChange}
            badge={this.state.badge}
            openNotifications={this.openNotifications}
            openSearch={this.openSearch}
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
            onChange={(event, page) => this.handleChange(page)}
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
