import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
  display: block;
  cursor: pointer;
  font-size: 24px;
  text-align: center;
  padding: 5px 0;
  transition: 200ms;
  
  &:hover {
    color: black;
  }
`

export default function CurrencySwap ({ onSwap }) {
  return (
    <StyledSpan onClick={onSwap}>↓</StyledSpan>
  )
}
