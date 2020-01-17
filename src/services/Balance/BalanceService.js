import merge from 'lodash.merge'

export default class BalanceService {
  constructor (initialBalances) {
    const balances = getFromStorage()
    this.balances = balances || initialBalances
    saveOnStorage(this.balances)
  }

  async fetchBalances () {
    return merge({}, this.balances)
  }

  async exchange ({ from, to, amount }) {
    if (!BalanceService.CURRENCIES.includes(from)) {
      throw new Error(`Currency not available. Received ${from}`)
    } else if (!BalanceService.CURRENCIES.includes(to)) {
      throw new Error(`Currency not available. Received ${to}`)
    }

    if (amount > this.balances[from].amount) {
      throw new Error('Not enough balance.')
    }

    const rate = await this.getRate({ from, to })

    this.balances[from].amount -= amount
    this.balances[to].amount += amount * rate
    saveOnStorage(this.balances)

    // Simulating a small server delay
    await new Promise(resolve => window.setTimeout(resolve, 2000))
  }

  async getRate ({ from, to }) {
    if (!BalanceService.CURRENCIES.includes(from)) {
      throw new Error(`Currency not available. Received ${from}`)
    } else if (!BalanceService.CURRENCIES.includes(to)) {
      throw new Error(`Currency not available. Received ${to}`)
    } else if (from === to) {
      return 1
    }

    const request = await fetch(`https://api.exchangeratesapi.io/latest?base=${from}`)
    const result = await request.json()

    return result.rates[to]
  }
}

BalanceService.CURRENCIES = ['USD', 'EUR', 'GBP']

function getFromStorage () {
  try {
    const balances = JSON.parse(window.localStorage.getItem('balances'))
    return balances
  } catch (e) {
    return null
  }
}

function saveOnStorage (balances) {
  window.localStorage.setItem('balances', JSON.stringify(balances))
}
