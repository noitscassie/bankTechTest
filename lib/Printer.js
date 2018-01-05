'use strict';

var Printer = function() {};

Printer.prototype.print = function(account) {
  var transactions = account.transactions.reverse();
  console.log('date || credit || debit || balance');
  for (var i = 0; i < transactions.length; i++) {
    var date = this.formatDate(transactions[i].date)
    var creditAndDebit = this.assignCreditAndDebit(transactions[i]);
    console.log(`${date} || ${creditAndDebit} || ${transactions[i].updatedBalance}.00`);
  }
};

Printer.prototype.formatDate = function(date) {
  var day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  var month = (date.getMonth() < 10) ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  var year = date.getYear() + 1900;
  return `${day}/${month}/${year}`
};

Printer.prototype.assignCreditAndDebit = function(transaction) {
  if (transaction.withdrawalAmount != undefined) {
    return `|| ${transaction.withdrawalAmount}.00`;
  } else {
    return `${transaction.depositAmount}.00 ||`;
  }
};

exports.Printer = Printer;
