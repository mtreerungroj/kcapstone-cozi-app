import React, { Component } from 'react'
import HomePromotion from './Home.promotion'
import Detail1Promotion from './Detail1.promotion'
import Detail2Promotion from './Detail2.promotion'

export default class Promotion extends Component {
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
          <HomePromotion
            oldPage={this.props.oldPage}
            changePage={this.changePage}
            handleChange={this.props.handleChange}
            badge={this.props.badge}
            openNotifications={this.props.openNotifications}
            openSearch={this.props.openSearch}
          />
        )
      case 'detail1':
        return (
          <Detail1Promotion
            oldPage={this.props.oldPage}
            changePage={this.changePage}
            handleChange={this.props.handleChange}
            badge={this.props.badge}
            openNotifications={this.props.openNotifications}
            openSearch={this.props.openSearch}
          />
        )
      case 'detail2':
        return (
          <Detail2Promotion
            oldPage={this.props.oldPage}
            changePage={this.changePage}
            handleChange={this.props.handleChange}
            badge={this.props.badge}
            openNotifications={this.props.openNotifications}
            openSearch={this.props.openSearch}
          />
        )
      default:
        return (
          <HomePromotion
            oldPage={this.props.oldPage}
            changePage={this.changePage}
            handleChange={this.props.handleChange}
            badge={this.props.badge}
            openNotifications={this.props.openNotifications}
            openSearch={this.props.openSearch}
          />
        )
    }
  }

  render () {
    return this.renderBody()
  }
}
