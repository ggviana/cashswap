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
                onValueChange={input => {
                  if (typeof input === 'string') {
                    clearInputs()
                  } else {
                    setInput(input)
                    setOutput(formatNumber(rate * input))
                  }
                }}
                onCurrencySelect={code => {
                  setFrom(code)
                  BalanceService
                    .getRate({ from: code, to })
                    .then(rate => {
                      setOutput(formatNumber(rate * input))
                    })
                }}
                currencies={balances}
                other={to}
              />

              <CurrencySwap
                onSwap={() => {
                  toggle()
                  BalanceService
                    .getRate({ from: to, to: from })
                    .then(rate => {
                      setOutput(formatNumber(rate * input))
                    })
                }}
              />

              <CurrencyInput
                currentCurrency={balances[to]}
                value={output}
                onValueChange={output => {
                  if (typeof output === 'string') {
                    clearInputs()
                  } else {
                    setOutput(output)
                    setInput(formatNumber(output / rate))
                  }
                }}
                onCurrencySelect={code => {
                  setTo(code)
                  BalanceService
                    .getRate({ from, to: code })
                    .then(rate => {
                      setInput(formatNumber(output / rate))
                    })
                }}
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
