import styled from 'styled-components'
import { color } from 'shared/utils/styles'

export const PageButtonGroup = styled.div`
    text-align: center;
    margin-bottom: 50px;
`

export const PageButton = styled.button`
    padding: 8px 16px;
    font-size: 14px;
    border: none;
    outline: none;
    cursor: pointer;
    color: ${color.textLight};
    margin: 2px;
    background-color: ${color.boxDark};
    :hover {
        opacity: 0.9
    }
    :disabled {
        color: ${color.textDisabled};
        cursor: unset;
    }
`