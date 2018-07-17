import React, { Component } from 'react'
// import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import 'simplebar' // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css'

import promotion1 from '../assets/images/promotion1.PNG'
import promotion2 from '../assets/images/promotion2.PNG'
import promotion3 from '../assets/images/promotion3.PNG'
import promotion4 from '../assets/images/promotion4.PNG'
import promotion5 from '../assets/images/promotion5.PNG'
import promotion6 from '../assets/images/promotion6.PNG'
import promotion7 from '../assets/images/promotion7.PNG'
import promotion8 from '../assets/images/promotion8.PNG'
import promotion9 from '../assets/images/promotion9.PNG'

export default class Promotion extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  renderPromotion = promotion => {
    return (
      <Card>
        <img
          src={promotion}
          alt={promotion}
          style={{
            width: '100%',
            height: 'auto'
          }}
        />
      </Card>
    )
  }

  render () {
    return (
      <div
        style={{
          backgroundColor: 'red',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        <div>
          <AppBar position='static' color='default'>
            <Toolbar>
              <Typography variant='title' color='inherit' align='center'>
                Promotion
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div style={{ backgroundColor: 'pink', display: 'flex', flex: 1 }}>
          <div data-simplebar style={{ height: 623 }}>
            {this.renderPromotion(promotion1)}
            {this.renderPromotion(promotion2)}
            {this.renderPromotion(promotion3)}
            {this.renderPromotion(promotion4)}
            {this.renderPromotion(promotion5)}
            {this.renderPromotion(promotion6)}
            {this.renderPromotion(promotion7)}
            {this.renderPromotion(promotion8)}
            {this.renderPromotion(promotion9)}
          </div>
        </div>
      </div>
    )
  }
}
