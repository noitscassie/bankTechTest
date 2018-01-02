'use strict';

var Account = function() {
  this._balance = 0;
};

Account.prototype.getBalance = function() {
  return this._balance;
};

exports.Account = Account;
