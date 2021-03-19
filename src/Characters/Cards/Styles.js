import styled from 'styled-components'
import { color } from 'shared/utils/styles'

export const Cards = styled.div`
    max-width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 80%;
        justify-content: center;
    }
`

export const Message = styled.p`
    color: ${color.textLight};
    margin-top: 0px;
    margin-bottom: 30px
`

export const ActiveMessage = styled.span`
    color: ${color.primary}
`
