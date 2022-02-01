/* eslint-disable no-undef */
const Statement = require('../src/statement')
const Transaction = require('../src/transaction')

describe('statement', () => {

    it('prints headers', () => {
        const statement = new Statement([])
        const result = statement.createStatement()
        const expected = 'date,credit,debit,balance'
        expect(result).toEqual(expected)
    })

    it('prints single credit transaction', () => {
        const statement = new Statement([
            new Transaction('10/10/2021', 100)
        ])
        const result = statement.createStatement()
        const expected = 'date,credit,debit,balance\n' +
        '10/10/2021,100,,100'
        expect(result).toEqual(expected)
    })

    it('a debit transaction', () => {
        const statement = new Statement([
            new Transaction('10/10/2021', -100)
        ])
        const result = statement.createStatement()
        const expected = 'date,credit,debit,balance\n' +
        '10/10/2021,-100,,-100'
        expect(result).toEqual(expected)
    })

    it('prints multiple transactions', () => {
        const statement = new Statement([
            new Transaction('10/10/2021', 100),
            new Transaction('09/10/2021', -25)
        ])
        const result = statement.createStatement()
        const expected = 'date,credit,debit,balance\n' +
        '09/10/2021,-25,,-25\n' +
        '10/10/2021,100,,100'

        
        expect(result).toEqual(expected)
    })

})