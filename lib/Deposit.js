'use strict';

var Deposit = function(account, depositAmount) {
  this.date = new Date();
  this.account = account;
  this.depositAmount = depositAmount;
};

Deposit.prototype.deposit = function() {
  var currentBalance = this.account.balance;
  var newBalance = currentBalance + this.depositAmount;
  this.account.balance = newBalance;
};

exports.Deposit = Deposit;
