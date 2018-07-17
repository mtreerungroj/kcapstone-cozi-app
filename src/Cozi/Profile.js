import React, { Component } from 'react'
import HomeProfile from './Home.profile'
import PointHistory from './PointHistory'

export default class Profile extends Component {
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
        return <HomeProfile changePage={this.changePage} />
      case 'pointhistory':
        return <PointHistory changePage={this.changePage} />
      default:
        return <HomeProfile changePage={this.changePage} />
    }
  }

  render () {
    return this.renderBody()
  }
}
