import {BankAccount} from "./bank_account.js";

var accounts = [];

window.onload = function()
{
    // load functions
    window.runOutput1 = runOutput1; 
    window.createAccount = createAccount;
}

function createAccount(event) 
{
    event.preventDefault();
    var message = document.getElementById("output1");
    
    // check for valid inputs
    const accountHolder = document.getElementById("account-holder").value;
    const accountNo = parseInt(document.getElementById("account-no").value);
    const sortCode = parseInt(document.getElementById("sort-code").value);

    let account1 = new BankAccount(accountNo, sortCode, 0.00, accountHolder);
    accounts.push(account1); // add new account to array

    message.innerHTML = "Account created successfully! Unique name: " + accounts[0].BankAccountName;
    message.innerHTML += "<br>Account Holder: " + account1.accountHolder;
    message.innerHTML += "<br>Account Number: " + account1.accountNo;
    message.innerHTML += "<br>Sort Code: " + account1.sortCode;

}
// create new (object) bank accounts
let account1 = new BankAccount(12345678, 123456, 1025.24, "John M. Doe");
let account2 = new BankAccount(87654321, 654321, "2115.36", "Michelle B. Smith");
let account3 = new BankAccount(98765432, "543210", 5204.21, "Bob Johnson");
let account4 = new BankAccount("73261182", 432109, 3000.00, "Alice Brown");

function runOutput1()
{
    var outputElement = document.getElementById("output1");
    outputElement.textContent = "This is the output from the run function.";
}

console.log(account1);
console.log(`Account Holder: ${account1.accountHolder}`);
console.log(`Account Number: ${account1.accountNo}`);
console.log(`Sort Code: ${account1.sortCode}`);
console.log(`Current Balance: £${account1.balance.toFixed(2)}`); // toFixed(2) rounds to 2 decimal places

console.log(account2);
console.log(`Account Holder: ${account2.accountHolder}`);
console.log(`Account Number: ${account2.accountNo}`);
console.log(`Sort Code: ${account2.sortCode}`);
console.log(`Current Balance: £${account2.balance.toFixed(2)}`);
account2.withdraw(100);
console.log(`Current Balance: £${account2.balance.toFixed(2)}`);
account2.deposit(500);
console.log(`Current Balance: £${account2.balance.toFixed(2)}`);
account2.withdraw(1000.36);
console.log(`Current Balance: £${account2.balance.toFixed(2)}`);

console.log("Account 3 Balance:");
account3.displayBal();
console.log("Account 4 Balance:");
account4.displayBal();

account3.transfer(account4, 1000);

console.log("Account 3 Balance:");
account3.displayBal();
console.log("Account 4 Balance:");
account4.displayBal();

account3.displayBal();
account4.displayBal();
account3.transfer(account4, 1000);
account3.displayBal();
account4.displayBal();