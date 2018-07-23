import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem'

import cardStarbuck from '../assets/images/card-starbuck.png'
import cardCosta from '../assets/images/card-costa.png'
import cardCoffeebean from '../assets/images/card-coffeebean.jpg'
import cardLoft from '../assets/images/card-loft.png'
import cardMk from '../assets/images/card-mk.jpg'
import cardWatsons from '../assets/images/card-watsons.png'
import cardEtude from '../assets/images/card-etude.png'
import cardPtt from '../assets/images/card-ptt.png'
import cardAirways from '../assets/images/card-airways.jpg'
import cardOnecard from '../assets/images/card-onecard.png'

import 'simplebar' // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css'

export default class Profile extends Component {
  renderCard = (card, cardName = '') => (
    <ListItem
      button
      style={{ padding: 0 }}
      onClick={() => this.props.openCard('home', cardName)}
    >
      <img src={card} alt={card} style={{ width: '100%', height: 'auto' }} />
    </ListItem>
  )

  render () {
    return (
      <div data-simplebar style={{ height: 343 }}>

        <div style={styles.outerContainer}>
          <div style={styles.innerContainer}>
            {this.renderCard(cardStarbuck, 'starbucks')}
          </div>
          <div style={styles.innerContainer}>
            {this.renderCard(cardCosta, 'costa')}
          </div>
        </div>

        <div style={styles.outerContainer}>
          <div style={styles.innerContainer}>
            {this.renderCard(cardCoffeebean, 'coffeebean')}
          </div>
          <div style={styles.innerContainer}>
            {this.renderCard(cardLoft)}
          </div>
        </div>

        <div style={styles.outerContainer}>
          <div style={styles.innerContainer}>
            {this.renderCard(cardWatsons)}
          </div>
          <div style={styles.innerContainer}>
            {this.renderCard(cardMk, 'mk')}
          </div>
        </div>

        <div style={styles.outerContainer}>
          <div style={styles.innerContainer}>
            {this.renderCard(cardEtude)}
          </div>
          <div style={styles.innerContainer}>
            {this.renderCard(cardPtt)}
          </div>
        </div>

        <div style={styles.outerContainer}>
          <div style={styles.innerContainer}>
            {this.renderCard(cardAirways)}
          </div>
          <div style={styles.innerContainer}>
            {this.renderCard(cardOnecard)}
          </div>
        </div>

      </div>
    )
  }
}

const styles = {
  outerContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  innerContainer: {
    flex: 1,
    margin: 5,
    marginLeft: 10,
    marginRight: 10
  }
}
