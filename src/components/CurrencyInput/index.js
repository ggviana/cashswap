import React from 'react'
import styled from 'styled-components'
import formatNumber from 'util/formatNumber'
import { CurrencySelector, LinkButton } from 'components'
import { color } from 'theme'
import InputNumber from 'rc-input-number'

const StyledCurrencyInput = styled.div`
  border: 1px solid ${color.grey};
  border-radius: 25px;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.1);
  transition: 300ms;
  
  &:focus-within {
    border-color: ${color.primary};
  }
  
  input {
    border: none;
    flex-grow: 1;
    font-size: 1.5rem;
    outline: 0;
    width: 100%;
    -moz-appearance: textfield;
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
  }
  
  .flex {
    align-items: baseline;
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    padding: 0.75rem 1rem;
  }
`

export default function CurrencyInput ({ currentCurrency, value, onValueChange, onCurrencySelect, type, currencies, other }) {
  const formattedBalance = formatNumber(currentCurrency.amount)
  const maxBalance = parseFloat(formattedBalance)

  return (
    <StyledCurrencyInput>
      <div className='flex'>
        <div>
          {currentCurrency.name}
        </div>
        <div>
          <LinkButton onClick={() => onValueChange(maxBalance)} disabled={maxBalance === 0}>
            Balance: {formattedBalance}<br />
          </LinkButton>
        </div>
      </div>
      <div className='flex'>
        <InputNumber
          type='number'
          value={value}
          onChange={onValueChange}
          placeholder='0.00'
          min={0}
          formatter={value => value.replace(/(^.*?\.\d{2}).*?$/, '$1')}
          onKeyPress={e => {
            const charCode = e.which ? e.which : e.keyCode

            // Prevent 'minus' character
            if (charCode === 45) {
              e.preventDefault()
              e.stopPropagation()
            }
          }}
        />

        <CurrencySelector
          balances={currencies}
          except={other}
          value={currentCurrency.code}
          onChange={onCurrencySelect}
        />
      </div>
    </StyledCurrencyInput>
  )
}
