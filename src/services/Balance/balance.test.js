import BalanceService from './BalanceService'
import initialBalances from './initial-balances'

describe('BalanceService', () => {
  let Balance

  beforeAll(() => {
    Balance = new BalanceService(initialBalances)
  })

  it('fetches the current balances', async () => {
    const balances = await Balance.fetchBalances()

    expect(balances).toHaveProperty('USD')
    expect(balances).toHaveProperty('EUR')
    expect(balances).toHaveProperty('GBP')
  })

  it('fetches the current exchange rate', async () => {
    const rate = await Balance.getRate({ from: 'USD', to: 'EUR' })

    expect(typeof rate).toBe('number')
  })

  it('exchanges between pockets', async () => {
    const balancesBefore = await Balance.fetchBalances()

    // Sanity check
    expect(balancesBefore.USD.amount).toBe(initialBalances.USD.amount)
    expect(balancesBefore.EUR.amount).toBe(initialBalances.EUR.amount)

    // Exchange all EUR to USD
    await Balance.exchange({ from: 'EUR', to: 'USD', amount: balancesBefore.EUR.amount })

    // After exchange we expect amounts to change
    const balancesAfter = await Balance.fetchBalances()

    expect(balancesAfter.EUR.amount).toBe(0)
    expect(balancesAfter.USD.amount).toBeGreaterThan(0)
  })

  it('cannot convert a currency without balance', () => {
    const failingTransaction = Balance.exchange({ from: 'EUR', to: 'USD', amount: 100 })

    return expect(failingTransaction).rejects.toThrow('Not enough balance.')
  })

  it('cannot convert from a currency that is not available', () => {
    const failingTransaction = Balance.exchange({ from: 'FAKE', to: 'USD', amount: 1 })

    return expect(failingTransaction).rejects.toThrow('Currency not available. Received FAKE')
  })

  it('cannot convert to a currency that is not available', () => {
    const failingTransaction = Balance.exchange({ from: 'EUR', to: 'FAKE', amount: 1 })

    return expect(failingTransaction).rejects.toThrow('Currency not available. Received FAKE')
  })
})
