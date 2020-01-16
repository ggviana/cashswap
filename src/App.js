import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyles } from 'theme'
import { Dashboard, Exchange } from 'pages'
import { Header } from 'components'
import { BalanceContext, useBalanceProvider } from 'hooks/useBalances'

function App () {
  const balances = useBalanceProvider()

  return (
    <>
      <GlobalStyles />
      <BalanceContext.Provider value={balances}>
        <Router>
          <Header />
          <Exchange />
          <Dashboard />
        </Router>
      </BalanceContext.Provider>
    </>
  )
}

export default App
