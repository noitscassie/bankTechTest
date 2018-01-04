'use strict';

var Deposit = function(account, depositAmount) {
  this.date = new Date();
  this.account = account;
  this.depositAmount = depositAmount;
  this.updatedBalance = null;
};

Deposit.prototype.deposit = function() {
  var currentBalance = this.account.balance;
  this.updatedBalance = currentBalance + this.depositAmount;
  this.account.balance = this.updatedBalance;
};

exports.Deposit = Deposit;
