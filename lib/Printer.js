'use strict';

var Printer = function() {};

Printer.prototype.print = function(account) {
  var transactions = account.transactions.reverse();
  this.printHeader();
  for (var i = 0; i < transactions.length; i++) {
    this.printTransaction(transactions[i]);
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

Printer.prototype.printHeader = function() {
  console.log('date || credit || debit || balance');
};

Printer.prototype.printTransaction = function(transaction) {
  var date = this.formatDate(transaction.date)
  var creditAndDebit = this.assignCreditAndDebit(transaction);
  var balance = transaction.updatedBalance;
  console.log(`${date} || ${creditAndDebit} || ${balance}.00`);
};

exports.Printer = Printer;
