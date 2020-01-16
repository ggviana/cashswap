import { useState } from 'react'

export default function useSwitchCurrencies (currency0, currency1) {
  const [from, setFrom] = useState(currency0)
  const [to, setTo] = useState(currency1)

  const toggle = () => {
    setFrom(to)
    setTo(from)
  }

  return { from, setFrom, to, setTo, toggle }
}
