'use strict';

var Withdrawal = function(account, withdrawalAmount) {
  this._date = new Date();
  this._account = account;
  this._withdrawalAmount = withdrawalAmount;
  this._insufficentFundsError = 'Error: requested withdrawal exceeds available funds';
  this._updatedBalance;
};

Object.defineProperty(Withdrawal.prototype, 'date', {
  get: function() { return this._date },
  set: function(newDate) { this._date = new Date() }
});

Object.defineProperty(Withdrawal.prototype, 'account', {
  get: function() { return this._account }
});

Object.defineProperty(Withdrawal.prototype, 'withdrawalAmount', {
  get: function() { return this._withdrawalAmount }
});

Object.defineProperty(Withdrawal.prototype, 'updatedBalance', {
  get: function() { return this._updatedBalance }
});

Withdrawal.prototype.withdraw = function() {
  this.checkSufficientFunds();
  var currentBalance = this.account.balance;
  this._updatedBalance = currentBalance - this.withdrawalAmount;
  this.account.balance = this._updatedBalance;
};

Withdrawal.prototype.checkSufficientFunds = function() {
  var currentBalance = this.account.balance;
  if (this.withdrawalAmount > currentBalance) {
    throw this._insufficentFundsError;
  }
};

exports.Withdrawal = Withdrawal;
