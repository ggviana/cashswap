import { useEffect, useState } from 'react'
import BalanceService from '../services/Balance'

export default function useExchangeRate (from, to) {
  const [rate, setRate] = useState(null)

  useEffect(() => {
    BalanceService.getRate({ from, to }).then(setRate)
  }, [from, to])

  return rate
}
