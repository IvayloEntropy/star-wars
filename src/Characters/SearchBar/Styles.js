import styled from 'styled-components'
import { color, borderRadius } from 'shared/utils/styles'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 55px;
`

export const FormGroup = styled.form`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    @media (max-width: 768px) {
        width: 100%;
        justify-content: center
    }
`

export const Logo = styled.img`
    margin-bottom: 40px;
    margin-top: 180px;
    pointer-events: none;
`

export const Input = styled.input`
    vertical-align: middle;
    margin-right: 18px;
    padding: 13px 20px;
    font-size: 16px;
    background-color: ${color.inputBox};
    width: 550px;
    border: none;
    color: #282C28;
    outline: none;
    border-radius: ${borderRadius.large};
    ::placeholder {
        color: ${color.inputPlaceholder};
    }
    @media (max-width: 768px) {
        width: 100%;
        margin: 10px
    }
`

export const Button = styled.button`
    padding: 12px 25px;
    background-color: ${color.primary};
    color: ${color.textDark};
    font-size: 16px;
    border-radius: ${borderRadius.large};
    border: none;
    outline: none;
    cursor: pointer;
    :hover {
        opacity: 0.9
    }
`