import { useEffect, useState } from 'react'
import BalanceService from '../services/Balance'

export default function useExchangeRate (from, to, timeout = 5000) {
  const [rate, setRate] = useState(null)

  useEffect(() => {
    const fetchExchangeRate = () => BalanceService.getRate({ from, to }).then(setRate)
    fetchExchangeRate()

    const interval = window.setInterval(fetchExchangeRate, timeout)
    return () => window.clearInterval(interval)
  }, [from, to, timeout])

  return rate
}
