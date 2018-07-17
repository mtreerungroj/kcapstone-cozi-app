import React, { Component } from 'react'
import cardStarbuck from '../assets/images/card-starbuck.png'

import 'simplebar' // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css'

export default class Profile extends Component {
  renderCard = () => (
    <img
      src={cardStarbuck}
      alt='card-starbuck'
      style={{ width: '100%', height: 'auto' }}
    />
  )

  renderRowCard = () => (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div
        style={{
          flex: 1,
          margin: 10,
          marginRight: 5
        }}
      >
        {this.renderCard()}
      </div>
      <div
        style={{
          flex: 1,
          margin: 10,
          marginLeft: 5
        }}
      >
        {this.renderCard()}
      </div>
    </div>
  )

  render () {
    return (
      <div data-simplebar style={{ height: 343 }}>
        {this.renderRowCard()}
        {this.renderRowCard()}
        {this.renderRowCard()}
        {this.renderRowCard()}
        {this.renderRowCard()}
      </div>
    )
  }
}
