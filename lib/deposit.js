'use strict';

var Deposit = function() {
  this.date = new Date();
};

Deposit.prototype.add = function(account, depositAmount) {
  var currentBalance = account.getBalance();
  var newBalance = currentBalance + depositAmount;
  account.setBalance(newBalance);
};

exports.Deposit = Deposit;
