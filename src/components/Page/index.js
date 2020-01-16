import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  main {
    flex-grow: 1;
    padding: 30px 0;
  }
`

export default function Page ({ children, path, exact = false, render }) {
  return (
    <Route
      path={path} exact={exact} render={(...args) => (
        <StyledPage>
          <main>
            {typeof render === 'function' ? render(...args) : children}
          </main>
        </StyledPage>
      )}
    />
  )
}
