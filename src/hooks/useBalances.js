import { useEffect, useState, createContext, useContext, useCallback } from 'react'
import BalanceService from 'services/Balance'

export const BalanceContext = createContext(undefined)

export const useBalanceProvider = () => {
  const [balances, setBalances] = useState(null)

  const refresh = useCallback(() => {
    BalanceService.fetchBalances().then(setBalances)
  }, [])

  useEffect(refresh, [refresh])

  return [balances, balances === null, refresh]
}

export default function useBalances () {
  return useContext(BalanceContext)
}
