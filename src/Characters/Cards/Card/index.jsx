import React, { Component } from 'react'
import { Card, CardHeader, CardTitle, CardSubtitle, BulletPoint, Value } from './Styles'
import { CharacterFields, invalidCharacterFields } from 'shared/constants/character'

class CharacterCard extends Component {

  render () {
    const { person } = this.props
    return (
      <Card>
        <CardHeader>
          {!invalidCharacterFields.includes(person.name) &&  <CardTitle> { person.name } </CardTitle> }
          {!invalidCharacterFields.includes(person.birth_year) && <CardSubtitle> *{ person.birth_year }</CardSubtitle> }
        </CardHeader>
        {CharacterFields.map(field => (
          !invalidCharacterFields.includes(person[field.name]) && <BulletPoint key={field.name}> <Value>{ field.text }: </Value> { person[field.name] } </BulletPoint>
        ))}
      </Card>         
    )
  }

}

export default CharacterCard
