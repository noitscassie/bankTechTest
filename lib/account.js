'use strict';

var Deposit = require('./deposit.js').Deposit;

var Account = function() {
  this._balance = 0;
  this.withdrawalError = 'Error: requested withdrawal exceeds available funds';
};

Account.prototype.getBalance = function() {
  return this._balance;
};

Account.prototype.setBalance = function(amount) {
  this._balance = amount;
};

Account.prototype.deposit = function(depositAmount) {
  var deposit = new Deposit();
  deposit.add(this, depositAmount);
};

Account.prototype.withdraw = function(withdrawAmount) {
  if (withdrawAmount > this.getBalance()) {
    throw this.withdrawalError;
  } else {
    var currentBalance = this.getBalance();
    var newBalance = currentBalance - withdrawAmount;
    this.setBalance(newBalance);
  }
};

exports.Account = Account;
