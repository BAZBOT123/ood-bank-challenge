
// eslint-disable-next-line no-undef
const Account = require('../src/account')

class Bank {
    constructor() {
        this.accountHolders = []
    }

    create() {
        return this.accountHolders
    }

    addAccount(accountNo, accountName) {
        const newAccount = new Account(accountNo, accountName)
        this.accountHolders.push(newAccount)
        return this.accountHolders
    }
}

// eslint-disable-next-line no-undef
module.exports = Bank