'use strict';

var Deposit = function(account, depositAmount) {
  this._date = new Date();
  this._account = account;
  this._depositAmount = depositAmount;
  this._updatedBalance;
};

Object.defineProperty(Deposit.prototype, 'date', {
  get: function() { return this._date },
  set: function(newDate) { this._date = new Date() }
});

Object.defineProperty(Deposit.prototype, 'account', {
  get: function() { return this._account }
});

Object.defineProperty(Deposit.prototype, 'depositAmount', {
  get: function() { return this._depositAmount }
});

Object.defineProperty(Deposit.prototype, 'updatedBalance', {
  get: function() { return this._updatedBalance }
});

Deposit.prototype.deposit = function() {
  var currentBalance = this.account.balance;
  this._updatedBalance = currentBalance + this.depositAmount;
  this.account.balance = this._updatedBalance;
};

exports.Deposit = Deposit;
