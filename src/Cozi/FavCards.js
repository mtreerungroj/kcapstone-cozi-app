import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

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

  render () {
    return (
      <div data-simplebar style={{ height: 360 }}>
        {/* row 1 */}
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

        {/* row 2 */}
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

        {/* row 3 */}
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

      </div>
    )
  }
}
