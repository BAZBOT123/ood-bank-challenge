/* eslint-disable no-undef */
const Bank = require('../src/bank.js')
const Account = require('../src/account.js')
const Transactions = require('../src/transaction.js')
const Statement = require('../src/statement.js')


describe('Banks tests', () => {
    let bank
  
    beforeEach(() => {
      bank = new Bank()
    })

    it('create a bank account list', () => {
        // set up
        const expected = []
        // execute
        const result = bank.create()
        // verify
        expect(result).toEqual(expected)
      })
      it('add bank account to cohort list', () => {
        // setup
        const expected = [new Account('11222111', 'MR D MOORE')]
        // execute
        const result = bank.addAccount('11222111', 'MR D MOORE')
        // verfity
        expect(result).toEqual(expected)
      })
      it('create a statement list', () => {
        // setup
        const expected = []
        // execute
        const result = bank.createSList()
        // verfity
        expect(result).toEqual(expected)
      })
      it('makes a deposit', () => {
        // setup
        const expected = [new Transactions("10-01-2012", 1000)]
        // execute
        const result = bank.depositMoney("10-01-2012", 1000)
        // verfity
        expect(result).toEqual(expected)
      })
       it('makes another deposit', () => {
        // setup
        const expected = new Transactions("13-01-2012", 3000)
        // execute
        const result = bank.depositMoney("13-01-2012", 2000)
        // verfity
        expect(result).toEqual(expected)
       })


  


      


})  