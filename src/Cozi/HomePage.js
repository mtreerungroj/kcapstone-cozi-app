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
            oldPage={this.props.oldPage}
            changePage={this.changePage}
            handleChange={this.props.handleChange}
            badge={this.props.badge}
            openNotifications={this.props.openNotifications}
            openSearch={this.props.openSearch}
            openCard={this.props.openCard}
          />
        )
      case 'redeem':
        return (
          <Redeem
            changePage={this.changePage}
            badge={this.props.badge}
            openNotifications={this.props.openNotifications}
            openSearch={this.props.openSearch}
          />
        )
      default:
        return (
          <HomeHomepage
            oldPage={this.props.oldPage}
            changePage={this.changePage}
            handleChange={this.props.handleChange}
            badge={this.props.badge}
            openNotifications={this.props.openNotifications}
            openSearch={this.props.openSearch}
            openCard={this.props.openCard}
          />
        )
    }
  }

  render () {
    return this.renderBody()
  }
}
