import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import Notifications from '@material-ui/icons/Notifications'
import Search from '@material-ui/icons/Search'

import 'simplebar' // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css'

import user from '../assets/images/user.png'
import shopBbqplaza from '../assets/images/shop_bbqplaza.png'
import shopMk from '../assets/images/shop_mk.jpg'
import shopAfteryou from '../assets/images/shop_afteryou.png'
import shopShabushi from '../assets/images/shop_shabushi.jpg'
import shopStarbucks from '../assets/images/shop_starbucks.jpg'
import shopCoffee from '../assets/images/shop_coffee.png'
import shopCosta from '../assets/images/shop_costa.png'
import shopShabulaos from '../assets/images/shop_shabulaos.jpeg'
import shopNamba from '../assets/images/shop_namba.jpeg'
import shopShinkansen from '../assets/images/shop_shinkansen.jpeg'
import shopOppadaek from '../assets/images/shop_oppadaek.jpeg'
import shopGolddigger from '../assets/images/shop_golddigger.png'
import shopOchaya from '../assets/images/shop_ochaya.png'
import shopCow from '../assets/images/shop_cow.jpg'
import shopSandp from '../assets/images/shop_sandp.jpg'
import shopAuntie from '../assets/images/shop_auntie.png'
import shopBake from '../assets/images/shop_bake.png'
import shopBurgerking from '../assets/images/shop_burgerking.jpg'
import shopHaagendazs from '../assets/images/shop_haagendazs.jpg'
import shopHokkaido from '../assets/images/shop_hokkaido.png'
import shopPablo from '../assets/images/shop_pablo.png'
import shopKorean from '../assets/images/shop_korean.jpg'
import shopIhop from '../assets/images/shop_ihop.jpg'
import shopKfc from '../assets/images/shop_kfc.jpg'
import shopSwensens from '../assets/images/shop_swensens.png'
import shopMoomin from '../assets/images/shop_moomin.png'
import shopPancake from '../assets/images/shop_pancake.png'
import shopSweet from '../assets/images/shop_sweet.png'

export default class MyCards extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  renderCard = store => (
    <IconButton
      color='inherit'
      aria-label='store'
      style={{ width: 80, height: 80 }}
    >
      <Avatar alt={store} src={store} style={{ width: 80, height: 80 }} />
    </IconButton>
  )

  renderRowCard = (store1, store2, store3, store4) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        marginBottom: 10
      }}
    >
      {this.renderCard(store1)}
      {this.renderCard(store2)}
      {this.renderCard(store3)}
      {this.renderCard(store4)}
    </div>
  )

  render () {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        <div>
          <AppBar position='static' color='secondary'>
            <Toolbar>
              <Typography
                variant='title'
                color='primary'
                align='center'
                style={{ flexGrow: 1, marginLeft: 100 }}
              >
                My Cards
              </Typography>

              {this.props.badge
                ? <IconButton
                  color='inherit'
                  aria-label='notifications'
                  style={{ marginRight: 0 }}
                  >
                  <Badge
                    badgeContent={'3'}
                    color='error'
                    onClick={() => this.props.openNotifications('mycards')}
                    >
                    <Notifications />
                  </Badge>
                </IconButton>
                : <IconButton
                  color='inherit'
                  aria-label='notifications'
                  onClick={() => this.props.openNotifications('mycards')}
                  style={{ marginRight: 0 }}
                  >
                  <Notifications />
                </IconButton>}

              <IconButton
                color='inherit'
                aria-label='search'
                onClick={() => this.props.openSearch('mycards')}
              >
                <Search />
              </IconButton>

            </Toolbar>
          </AppBar>
        </div>
        <div
          style={{
            backgroundColor: '#F8F3BF',
            display: 'flex',
            flexDirection: ' column',
            flex: 1
          }}
        >

          <div style={{ marginTop: 10, marginLeft: 10, marginBottom: 5 }}>
            <Typography variant='title' color='inherit'>
              Recently
            </Typography>
          </div>
          <Card style={{ height: 100 }}>
            {this.renderRowCard(
              shopBbqplaza,
              shopMk,
              shopAfteryou,
              shopShabushi
            )}
          </Card>

          <div style={{ marginTop: 10, marginLeft: 10, marginBottom: 5 }}>
            <Typography variant='title' color='inherit'>
              Favortite cards
            </Typography>
          </div>
          <Card style={{ height: 100 }}>
            {this.renderRowCard(
              shopStarbucks,
              shopCoffee,
              shopCosta,
              shopShabushi
            )}
          </Card>

          <div style={{ marginTop: 10, marginLeft: 10, marginBottom: 5 }}>
            <Typography variant='title' color='inherit'>
              All cards
            </Typography>
          </div>
          <div data-simplebar style={{ height: 285 }}>
            <Card>
              <div
                style={{
                  display: 'flex',
                  flexDirection: ' column'
                }}
              >
                {this.renderRowCard(
                  shopStarbucks,
                  shopShabulaos,
                  shopNamba,
                  shopShinkansen
                )}
                {this.renderRowCard(
                  shopMk,
                  shopOppadaek,
                  shopShabushi,
                  shopGolddigger
                )}
                {this.renderRowCard(shopOchaya, shopCow, shopCosta, shopSandp)}
                {this.renderRowCard(
                  shopAuntie,
                  shopBake,
                  shopBurgerking,
                  shopHaagendazs
                )}
                {this.renderRowCard(
                  shopHokkaido,
                  shopPablo,
                  shopKorean,
                  shopIhop
                )}
                {this.renderRowCard(
                  shopKfc,
                  shopSweet,
                  shopMoomin,
                  shopPancake
                )}
                <div
                  style={{
                    marginLeft: 20,
                    marginTop: 10,
                    marginBottom: 10
                  }}
                >
                  {this.renderCard(shopSwensens)}
                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    )
  }
}
