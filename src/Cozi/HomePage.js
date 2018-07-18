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
        return <HomeHomepage changePage={this.changePage} />
      case 'redeem':
        return <Redeem changePage={this.changePage} />
      default:
        return <HomeHomepage changePage={this.changePage} />
    }
  }

  render () {
    return this.renderBody()
  }
}
