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
            unBadge={this.props.unBadge}
          />
        )
      case 'redeem':
        return (
          <Redeem
            changePage={this.changePage}
            badge={this.props.badge}
            unBadge={this.props.unBadge}
          />
        )
      default:
        return (
          <HomeHomepage
            changePage={this.changePage}
            badge={this.props.badge}
            unBadge={this.props.unBadge}
          />
        )
    }
  }

  render () {
    return this.renderBody()
  }
}
