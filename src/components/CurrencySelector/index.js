import React from 'react'
import styled from 'styled-components'
import { color } from 'theme'

const Select = styled.select`
  background-color: white;
  border: 1px solid ${color.grey};
  border-radius: 25px;
  font-size: 1rem;
  padding: 5px 20px;
  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;
  outline: 0;
  //width: 50px;
  &:focus {
    border-color: ${color.primary};
  }
`

export default function CurrencySelector ({ except, balances, value, onChange }) {
  const options = Object.values(balances).filter(balance => balance.code !== except)

  return (
    <Select value={value} onChange={event => onChange(event.target.value)}>
      {options.map(balance => (
        <option value={balance.code} key={balance.code} label={balance.code}>
          {balance.code}
        </option>
      ))}
    </Select>
  )
}
