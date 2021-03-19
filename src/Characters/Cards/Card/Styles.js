import styled from 'styled-components'
import { color, font, textSizes, borderRadius } from 'shared/utils/styles'

export const Card = styled.div`
  background-color: ${color.boxDark};
  margin-bottom: 12px;
  padding: 28px;
  width: 100%;
  border-radius: ${borderRadius.medium}
`

export const CardHeader = styled.div`
  margin-bottom: 30px
`

export const CardTitle = styled.span`
  color: ${color.textLight};
  ${font.size(textSizes.bodyLarge)}
  text-transform: uppercase;
  margin-right: 5px;
`

export const CardSubtitle = styled.span`
  color: ${color.textLight};
  ${font.size(textSizes.bodyMedium)}
`


export const BulletPoint = styled.div`
  margin-bottom: 10px;
  color: ${color.textLight}
`

export const Value = styled.span`
  font-weight: 300
`
