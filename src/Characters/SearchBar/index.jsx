
import { useState } from 'react'
import { Container, FormGroup, Input, Button, Logo } from './Styles'
import ReactLogo from 'assets/swapi_icon.svg'

export const CharacterSearchBar = ({ onSearch }) => {
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert('Please add text')
      return
    }
    onSearch(text)
  }

  return (
    <Container>
      <Logo style={{ textAlign: 'center' }} src={ReactLogo} alt="Star Wars Logo" />
      <FormGroup onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder='Who are you searching for?'
          name='name'
          autocomplete="off"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit"> SEARCH </Button>
      </FormGroup>
    </Container>
  )
}

export default CharacterSearchBar
