import React from 'react'
import styled from 'styled-components'
import formatNumber from 'util/formatNumber'

const StyledDisplay = styled.div`
  height: 250px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-shadow: 1px 1px 4px rgba(150, 150, 150, 1);
  user-select: none;
  
  span {
    font-size: 30px;
    
    &:first-child {
      font-size: 50px;  
    }
  }
`

export default function BalanceDisplay ({ balance }) {
  const integer = parseInt(balance.amount)
  const cents = balance.amount - integer

  return (
    <StyledDisplay>
      <div>
        <span>{balance.symbol} {integer}</span>
        <span>{formatNumber(cents).replace(/^0\./, '.')}</span>
        <div>{balance.code} - {balance.name}</div>
      </div>
    </StyledDisplay>
  )
}
