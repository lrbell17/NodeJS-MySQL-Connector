import Transaction from './transaction.js';

class Account{

    constructor(accountNo, pin, initialDeposit){
        this.accountNo = accountNo;
        this.pin = pin;
        this.balance = initialDeposit;
        this.transactions = [new Transaction("Initial Deposit", initialDeposit, initialDeposit)]
    }

    addTransaction(transaction){
        this.transactions.push(transaction);
    }

    deposit(amount){
        this.balance = this.balance + Number.parseFloat(amount);
        this.addTransaction(new Transaction("Deposit", amount, this.balance));
    }

    withdraw(amount){
        this.balance = this.balance - Number.parseFloat(amount);
        this.addTransaction(new Transaction("Withdrawl", amount, this.balance));
    }
}

export default Account;
