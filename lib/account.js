'use strict';

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
  var currentBalance = this.getBalance();
  var newBalance = currentBalance + depositAmount;
  this.setBalance(newBalance);
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
