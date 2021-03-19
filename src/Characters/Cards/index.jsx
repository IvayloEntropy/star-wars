
import React, { Component } from 'react'
import CharacterCard from './Card'
import { Cards, Message, ActiveMessage } from './Styles'


class CharacterCards extends Component {

  render () {
    const { people, count } = this.props
    return (
      <Cards>
        {!!count && <Message> Total results: <ActiveMessage>{ count }</ActiveMessage> </Message>  }
        {!count && <Message> No results found </Message>  }
        {people.map(person => (
          <CharacterCard key={person.url} person={person} />
        ))}                
      </Cards>
    )
  }

}

export default CharacterCards