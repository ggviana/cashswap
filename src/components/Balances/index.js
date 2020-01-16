import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd'
import BalanceDisplay from './BalanceDisplay'

const StyledBalances = styled.div`
  background-color: #21D4FD;
  background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
  border-radius: 6px;
  
  .ant-carousel {
    color: white;
    
    .slick-dots {
      margin-bottom: 20px;
      
      li {
        margin: 0 5px;
        
        button {
          border-radius: 50%;
          height: 10px;
          width: 10px;
        }     
      }
    }
  }
`

export default function Balances ({ values }) {
  return (
    <StyledBalances>
      <Carousel draggable>
        {Object.values(values).map(balance => (
          <BalanceDisplay balance={balance} key={balance.code} />
        ))}
      </Carousel>
    </StyledBalances>
  )
}
