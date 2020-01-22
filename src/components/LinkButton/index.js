import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  outline: 0;
  transition: 200ms;
  
  &:hover {
    color: black;
  }
`

export default function LinkButton (props) {
  return (
    <StyledButton {...props} />
  )
}
