import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import datas from './Datas'
import SearchInput, { createFilter } from 'react-search-input'
import { ListItem, Divider } from '@material-ui/core'

const KEYS_TO_FILTERS = ['name', 'promotion']

export default class Search extends Component {
  constructor () {
    super()
    this.state = {
      data: datas,
      searchTerm: ''
    }
  }

  searchUpdated = term => this.setState({ searchTerm: term })

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
          <AppBar position='static' color='secondary'>
            <Toolbar style={{ padding: 0 }}>
              <IconButton
                color='inherit'
                aria-label='Menu'
                onClick={() => this.props.handleChange(this.props.oldPage)}
              >
                <KeyboardArrowLeft />
              </IconButton>
              <Typography
                variant='title'
                color='primary'
                align='center'
                style={{ flexGrow: 1, marginLeft: 50, marginRight: 100 }}
              >
                Search
              </Typography>
            </Toolbar>
          </AppBar>
        </div>

        <div>
          <SearchInput
            onChange={this.searchUpdated}
            style={{ width: '100%', height: 'auto', fontSize: 20 }}
          />
          {this.state.searchTerm !== '' &&
            filteredSearch.map(data => {
              return (
                <div key={data.id}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginLeft: 20,
                      padding: 8
                    }}
                  >
                    <div style={{ verticalAlign: 'middle' }}>
                      {/* <Typography variant='subtitle' color='black' align='left'> */}
                      {data.name}
                      {/* </Typography> */}
                    </div>
                  </div>
                  <Divider />

                  {data.card !== undefined &&
                    <div style={{ textAlign: 'center' }}>
                      <ListItem button style={{ padding: 10 }}>
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
                  <br />
                  <div>
                    <ListItem button style={{ padding: 0 }}>
                      {/* <div style={{ fontSize: 20, textAlign: 'center' }}>Promotion</div> */}
                      <br />
                      <img
                        src={data.promotion}
                        alt={data.promotion}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </ListItem>
                  </div>
                  <Divider />
                  {/* <div>{data.promotion}</div> */}
                </div>
              )
            })}
        </div>

      </div>
    )
  }
}
