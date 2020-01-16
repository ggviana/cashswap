import React from 'react'
import { Balances, Card, Container, Page } from 'components'
import { Link } from 'react-router-dom'
import useBalances from 'hooks/useBalances'
import { Button, Spin } from 'antd'

export default function Dashboard () {
  const [balances, isLoadingBalances] = useBalances()

  return (
    <Page path='/' exact>
      <Container>
        <Card>
          {isLoadingBalances ? (
            <Spin />
          ) : (
            <Balances values={balances} />
          )}
          <Link to='/exchange' className='exchange-button'>
            <Button
              type='primary'
              shape='round'
              icon='swap'
              size='large'
              style={{ maxWidth: 300, width: '100%' }}
            >
              Exchange
            </Button>
          </Link>
        </Card>
      </Container>
    </Page>
  )
}
