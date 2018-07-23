import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import datas from './Datas'
import { createFilter } from 'react-search-input'
import { ListItem, Divider } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

import 'simplebar' // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css'

const KEYS_TO_FILTERS = ['name']

export default class Search extends Component {
  constructor () {
    super()
    this.state = {
      data: datas,
      searchTerm: ''
    }
  }

  handleChange = event => this.setState({ searchTerm: event.target.value })

  render () {
    const filteredSearch = datas.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    )

    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >

        <div>
          <AppBar position='static' color='primary'>
            <Toolbar style={{ padding: 0 }}>
              <IconButton
                color='inherit'
                aria-label='Menu'
                onClick={() => this.props.handleChange(this.props.oldPage)}
              >
                <KeyboardArrowLeft />
              </IconButton>

              <TextField
                autoFocus
                id='search'
                placeholder='Search cards, shops or promotions'
                type='search'
                onChange={this.handleChange}
                style={{
                  width: 340,
                  fontSize: 20,
                  marginRight: 30
                }}
              />

            </Toolbar>
          </AppBar>
        </div>

        {/* <div data-simplebar style={{ height: 603, backgroundColor: 'red' }}> */}
        <div>
          {this.state.searchTerm !== '' &&
            filteredSearch.map(data => {
              return (
                <div key={data.id}>
                  <Typography
                    variant='title'
                    style={{ marginLeft: 20, marginTop: 10 }}
                  >
                    {data.name}
                  </Typography>

                  {data.card !== undefined &&
                    <div style={{ textAlign: 'center' }}>
                      <ListItem button style={{ textAlign: 'center' }}>
                        <img
                          src={data.card}
                          alt={data.card}
                          style={{
                            width: '50%',
                            height: 'auto',
                            marginLeft: 20
                          }}
                        />
                      </ListItem>
                    </div>}

                  <ListItem button style={{ padding: 0, marginBottom: 5 }}>
                    <img
                      src={data.promotion}
                      alt={data.promotion}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </ListItem>

                  <Divider />
                </div>
              )
            })}
        </div>

      </div>
    )
  }
}
