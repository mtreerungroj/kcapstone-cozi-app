import React, { Component } from 'react'

import HomeHomepage from './Home.homepage'
import Redeem from './Redeem'

export default class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 'home'
    }
  }

  changePage = page => this.setState({ page })

  renderBody = () => {
    switch (this.state.page) {
      case 'home':
        return (
          <HomeHomepage
            changePage={this.changePage}
            badge={this.props.badge}
            openNotifications={this.props.openNotifications}
          />
        )
      case 'redeem':
        return (
          <Redeem
            changePage={this.changePage}
            badge={this.props.badge}
            openNotifications={this.props.openNotifications}
          />
        )
      default:
        return (
          <HomeHomepage
            changePage={this.changePage}
            badge={this.props.badge}
            openNotifications={this.props.openNotifications}
          />
        )
    }
  }

  render () {
    return this.renderBody()
  }
}
