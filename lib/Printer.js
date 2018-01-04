'use strict';

var Printer = function(account) {
  this.account = account;
  this.transactions = this.account._transactions.reverse();
};

Printer.prototype.print = function() {
  var transactions = this.transactions;
  console.log('date || credit || debit || balance');
  for (var i = 0; i < transactions.length; i++) {
    if (transactions[i].withdrawalAmount != undefined) {
      var debit = transactions[i].withdrawalAmount;
      var credit = '';
    }
    if (transactions[i].depositAmount != undefined) {
      var debit = '';
      var credit = transactions[i].depositAmount;
    }
    console.log(`${transactions[i].date.getDate()}/${transactions[i].date.getMonth() + 1}/${transactions[i].date.getFullYear()} || ${credit} || ${debit} || ${transactions[i].updatedBalance}.00`);
  }
};

exports.Printer = Printer;
