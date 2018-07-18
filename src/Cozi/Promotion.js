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
        return <HomePromotion changePage={this.changePage} />
      case 'detail1':
        return <Detail1Promotion changePage={this.changePage} />
      case 'detail2':
        return <Detail2Promotion changePage={this.changePage} />
      default:
        return <HomePromotion changePage={this.changePage} />
    }
  }

  render () {
    return this.renderBody()
  }
}
