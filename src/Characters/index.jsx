import React, { Component } from 'react'
import CharacterSearchBar from './SearchBar'
import CharacterCards from './Cards'
import CharacterPagination from './Pagination'
import { connect } from 'react-redux'
import envConfig from 'config/envConfig'
import queryString from 'query-string'
import axios from 'axios'
import { CharactersContainer } from './Styles'

class Characters extends Component {
  state = {
    people: [],
    count: 0,
    name: '',
    pagination: {
      next: '',
      prev: ''
    }
  }
  
  onPageChange = async (pageUrl) => {
    window.scrollTo(0, 0)
    const page = queryString.parse(pageUrl).page
    await this.fetchCharacters(this.state.name, page)
  }

  onSearch = async (name) => {
    window.scrollTo(0, 0)
    this.setState({name})
    await this.fetchCharacters(name, 1)
  }

  render () {


    return (
      <CharactersContainer>
        <CharacterSearchBar onSearch={ this.onSearch } />
        <CharacterCards people={this.state.people} count={this.state.count} />
        { this.state.count > 10 && <CharacterPagination pagination={this.state.pagination} onPageChange={ this.onPageChange } /> }
      </CharactersContainer>
    )
  }

  async fetchCharacters (name, page) {
    this.props.dispatch({ type: 'DATA_LOADING' })
    await axios.get(`${envConfig.starWarsApiAddress}/people?page=${page}`, {
      params: {
        search: name
      }})
      .then(res => {
        const people = res.data.results
        const count = res.data.count
        const next = res.data.next
        const prev = res.data.previous

        this.setState({ 
          people,
          count,
          pagination:{
            next,
            prev
          }})
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error(err)
      })
    this.props.dispatch({type: 'DATA_LOADED'})
  }
}
function mapStateToProps () {
  return {}
}

export default connect(mapStateToProps)(Characters)
