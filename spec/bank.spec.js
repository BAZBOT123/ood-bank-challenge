/* eslint-disable no-undef */
const Bank = require('../src/bank.js')
const Account = require('../src/account.js')

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
  
})  