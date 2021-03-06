export const CharacterFields = [
  {
    name: 'height',
    text: 'height'
  },
  {
    name: 'mass',
    text: 'mass'
  },
  {
    name: 'eye_color',
    text: 'eye color'
  },
  {
    name: 'hair_color',
    text: 'hair color'
  }
]

export const invalidCharacterFields = [ 'n/a', 'none', 'unknown', '']

export function checkField (value) {
  return !invalidCharacterFields.includes(value)
}