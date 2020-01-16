import React from 'react'
import styled from 'styled-components'
import formatNumber from 'util/formatNumber'

const StyledPanel = styled.div`
  display: flex;
  font-size: 0.75rem;
  justify-content: space-between;
  padding: 0 15px;
  margin: 10px 0 30px;
`

export default function ExchangeRate ({ from, to, rate }) {
  return (
    <StyledPanel>
      <span>Exchange rate: </span>
      <span>{from.symbol}1 = {to.symbol}{formatNumber(rate)}</span>
    </StyledPanel>
  )
}
