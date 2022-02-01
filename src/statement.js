/* eslint-disable no-undef */
class Statement {
    constructor(transactions) {
        this.transactions = transactions;
    }

    createStatement(){
        let statementLines = []
        for(const transaction of this.transactions){
            statementLines.push(transaction.date + ',' + transaction.amount + ',,' + transaction.amount)
        }
        statementLines.reverse()
        statementLines.unshift('date,credit,debit,balance')
        return statementLines.join('\n')
    }


    // printStatement() {
    //     const lines = []
    //     for (const transaction of this.transactions) {
    //         let credit = ''
    //         let debit = ''
    //         if (transaction.amount > 0) {
    //             credit = transaction.amount
    //         } else {
    //             debit = transaction.amount
    //         }
    //         lines.push(transaction.date + "," + debit)
    //     }
    // }
}

module.exports = Statement