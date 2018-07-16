import React, { Component } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

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
      page: 'home'
    }
  }

  handleChange = (event, page) => this.setState({ page })

  renderBody = () => {
    switch (this.state.page) {
      case 'home':
        return <HomePage />
      case 'promotion':
        return <Promotion />
      case 'mycards':
        return <MyCards />
      case 'profile':
        return <Profile toggleAuth={this.props.toggleAuth} />
      default:
        return <Home />
    }
  }

  render () {
    const { page } = this.state

    return (
      <div
        style={{
          backgroundColor: 'red',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        <div style={{ backgroundColor: 'blue', display: 'flex', flex: 1 }}>
          {this.renderBody()}
        </div>
        <div>
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
