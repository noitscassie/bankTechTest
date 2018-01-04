'use strict';

var Deposit = require('./Deposit.js').Deposit;
var Withdrawal = require('./Withdrawal.js').Withdrawal;
var Printer = require('./Printer.js').Printer;
const DEFAULT_BALANCE = 0;

var Account = function(balance) {
  this._balance = balance || DEFAULT_BALANCE;
  this._transactions = [];
};

Object.defineProperty(Account.prototype, 'balance', {
  get: function() { return this._balance },
  set: function(newBalance) { this._balance = newBalance },
  configurable: true
});

Account.prototype.getTransactions = function() {
  return this._transactions;
};

Account.prototype.deposit = function(depositAmount) {
  var deposit = new Deposit(this, depositAmount);
  deposit.deposit();
  this._transactions.push(deposit);
};

Account.prototype.withdraw = function(withdrawalAmount) {
  var withdrawal = new Withdrawal(this, withdrawalAmount);
  withdrawal.withdraw();
  this._transactions.push(withdrawal);
 };

 Account.prototype.print = function() {
   var printer = new Printer(this);
   printer.print();
 };

exports.Account = Account;
