import React, { Component } from 'react'
import Register1 from './Register1'
import Register2 from './Register2'

export default class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFirstPage: true
    }
  }

  togglePage = () => this.setState({ isFirstPage: !this.state.isFirstPage })

  render () {
    return this.state.isFirstPage
      ? <Register1
        togglePage={this.togglePage}
        toggleRegister={this.props.toggleRegister}
        />
      : <Register2
        toggleAuth={this.props.toggleAuth}
        togglePage={this.togglePage}
        toggleRegister={this.props.toggleRegister}
        />
  }
}
