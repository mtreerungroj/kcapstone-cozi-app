import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

export default class Cozi extends Component {
  render () {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        Welcome to Cozi+
        <Button onClick={this.props.toggleAuth} variant='outlined'>
          Log out
        </Button>
      </div>
    )
  }
}
