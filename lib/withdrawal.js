'use strict';

var Withdrawal = function(account, withdrawalAmount) {
  this.date = new Date();
  this.account = account;
  this.withdrawalAmount = withdrawalAmount;
  this.insufficentFundsError = 'Error: requested withdrawal exceeds available funds';
};

Withdrawal.prototype.withdraw = function() {
  var currentBalance = this.account.getBalance();
  var newBalance = currentBalance - this.withdrawalAmount;
  this.account.setBalance(newBalance);
};

Withdrawal.prototype.checkSufficientFunds = function() {
  var currentBalance = this.account.getBalance();
  if (this.withdrawalAmount > currentBalance) {
    throw this.insufficentFundsError;
  }
};

exports.Withdrawal = Withdrawal;
