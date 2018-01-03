'use strict';

var Deposit = require('./deposit.js').Deposit;
var Withdrawal = require('./withdrawal.js').Withdrawal;
const DEFAULT_BALANCE = 0;

var Account = function() {
  this._balance = DEFAULT_BALANCE;
};

Account.prototype.getBalance = function() {
  return this._balance;
};

Account.prototype.setBalance = function(amount) {
  this._balance = amount;
};

Account.prototype.deposit = function(depositAmount) {
  var deposit = new Deposit(this, depositAmount);
  deposit.deposit();
};

Account.prototype.withdraw = function(withdrawalAmount) {
  var withdrawal = new Withdrawal(this, withdrawalAmount);
  withdrawal.checkSufficientFunds();
  withdrawal.withdraw();
 };

exports.Account = Account;
