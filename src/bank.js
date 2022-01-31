const Transactions = require('./transaction.js')
const Statement = require('../src/statement.js')

const Account = require('../src/account')

class Bank {
    constructor() {
        this.accountHolders = []
        this.statementList = []
        this.balance = 0
    }

    create() {
        return this.accountHolders
    }

    addAccount(accountNo, accountName) {
        const newAccount = new Account(accountNo, accountName)
        this.accountHolders.push(newAccount)
        return this.accountHolders
    }

    createSList() {
        return this.statementList
    }

    depositMoney(date, money){
        const newDeposit = new Transactions(date, money)
        this.statementList.push(newDeposit)
        this.balance = this.balance + newDeposit
        return this.statementList    
    }





    





}

// eslint-disable-next-line no-undef
module.exports = Bank