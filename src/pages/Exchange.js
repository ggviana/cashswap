import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Container, CurrencyInput, CurrencySwap, ExchangeRate, Page } from 'components'
import { useBalances, useExchangeRate, useSwitchCurrencies } from 'hooks'
import BalanceService from 'services/Balance'
import formatNumber from 'util/formatNumber'
import { Button, Icon, Row, Spin } from 'antd'

export default function Exchange () {
  const [balances, isLoadingBalances, refreshBalances] = useBalances()
  const [isSubmitting, setSubmitting] = useState(false)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const { from, setFrom, to, setTo, toggle } = useSwitchCurrencies('GBP', 'EUR')
  const rate = useExchangeRate(from, to)

  const clearInputs = () => {
    setInput('')
    setOutput('')
  }

  const isInvalid = (typeof input !== 'number' && input !== 0) || input > balances[from].amount

  const submitExchange = () => {
    if (!isInvalid) {
      setSubmitting(true)
      BalanceService
        .exchange({ from, to, amount: input })
        .then(refreshBalances)
        .then(clearInputs)
        .finally(() => setSubmitting(false))
    }
  }

  return (
    <Page path='/exchange'>
      <Container>
        <Link to='/'>
          <Button type='ghost'>
            <Icon type='left' />
            Back
          </Button>
        </Link>
        <Card>
          {isLoadingBalances ? (
            <Spin />
          ) : (
            <>
              <CurrencyInput
                currentCurrency={balances[from]}
                value={input}
                onValueChange={value => {
                  if (typeof value === 'string') {
                    clearInputs()
                  } else {
                    setInput(value)
                    setOutput(formatNumber(rate * value))
                  }
                }}
                onCurrencySelect={setFrom}
                currencies={balances}
                other={to}
              />

              <CurrencySwap
                onSwap={() => {
                  clearInputs()
                  toggle()
                }}
              />

              <CurrencyInput
                currentCurrency={balances[to]}
                value={output}
                onValueChange={value => {
                  if (typeof value === 'string') {
                    clearInputs()
                  } else {
                    setOutput(value)
                    setInput(formatNumber(value / rate))
                  }
                }}
                onCurrencySelect={setTo}
                currencies={balances}
                other={from}
              />

              <ExchangeRate
                from={balances[from]}
                to={balances[to]}
                rate={formatNumber(rate)}
              />

              <Row type='flex' justify='center'>
                <Button
                  type='primary'
                  size='large'
                  shape='round'
                  onClick={submitExchange}
                  loading={isSubmitting}
                  disabled={isInvalid}
                  style={{ maxWidth: 300, width: '100%' }}
                >
                  Swap
                </Button>
              </Row>
            </>
          )}
        </Card>
      </Container>
    </Page>
  )
}
