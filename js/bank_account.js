export class BankAccount
{
    constructor(accountNo, sortCode, balance, accountHolder)
    {
        // convert to string for checking non-numeric characters
        const x = accountNo.toString();
        const y = sortCode.toString();
        
        // account number
        if (isNaN(accountNo) || x.length !== 8 || !Number.isInteger(Number(x)))
        {
            console.log("Account number must be numeric and 8-digits long.");
            this.accountNo = null;
        }
        else {this.accountNo = accountNo;}

        // sort code
        if (isNaN(sortCode) || y.length !== 6 | !Number.isInteger(Number(y)))
        {
            console.log("Sort code must be numeric and 6-digits long.");
            this.sortCode = null;
        }
        else {this.sortCode = sortCode;}

        // balance
        if (isNaN(balance))
        {
            console.log("Initial balance must be a numeric value.");
            this.balance = null;
        }
        else {this.balance = parseFloat(balance);}

        // account holder
        this.accountHolder = accountHolder;
    }
    displayBal() // display balance
    {
        console.log("£" + this.balance.toFixed(2));
    }
    deposit(amount) // add funds to account
    {
        if (isNaN(amount)) // amount is number?
        {
            console.log("Amount must be a numeric value.");
        }
        else if (amount < 0) // amount is positive?
        {
            console.log("Amount must be a positive numeric value.");
        }
        else if (amount.toString().split(".").length > 1 && amount.toString().split(".")[1].length > 2) // amount has >2 decimal places?
        {
            console.log("Amount must have two decimal places.");
        }
        else
        {
            this.balance = (this.balance + amount);
            console.log(`Deposited £${amount.toFixed(2)} into account.`);
        }
    }
    withdraw(amount) // take out funds
    {
        if (isNaN(amount)) {console.log("Amount must be a numeric value.");}
        else if (amount < 0) {console.log("Amount must be a positive numeric value.");}
        else if (amount.toString().split(".").length > 1 && amount.toString().split(".")[1].length > 2) 
        {
            console.log("Amount must have two decimal places.");
        }
        else if (this.balance < amount) // account has enough funds?
        {
            console.log("Insufficient funds.");
        } 
        else
        {
            this.balance = (this.balance - amount);
            console.log(`Withdrew £${amount.toFixed(2)} from account.`);
        }
    }
    transfer(account, amount) // transfer funds
    {
        if (this === account)
        {
            console.log("Cannot transfer funds to the same account.");
            return;
        }
        if (isNaN(amount))
        {
            console.log("Amount must be a numeric value.");
            return;
        }
        if (amount < 0)
        {
            console.log("Amount must be a positive numeric value.");
            return;
        }
        if (amount.toString().split(".").length > 1 && amount.toString().split(".")[1].length > 2)
        {
            console.log("Amount must have two decimal places.");
            return;
        }
        if (this.balance < amount)
        {
            console.log("You do not have enough funds to complete this transfer.");
            return;
        }

        this.balance = (this.balance - amount); // deduct funds from source account
        account.balance = (account.balance + amount); // add funds to target account
    }
}