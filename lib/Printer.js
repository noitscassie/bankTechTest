'use strict';

var Printer = function() {};

Printer.prototype.print = function(account) {
  var transactions = account._transactions.reverse();
  console.log('date || credit || debit || balance');
  for (var i = 0; i < transactions.length; i++) {
    var date = this.formatDate(transactions[i].date)
    if (transactions[i].withdrawalAmount != undefined) {
      var creditAndDebit = `||  ${transactions[i].withdrawalAmount}.00`;
    } else {
      var creditAndDebit = `${transactions[i].depositAmount}.00 ||`;
    }
    console.log(`${date} || ${creditAndDebit} || ${transactions[i].updatedBalance}.00`);
  }
};

Printer.prototype.formatDate = function(date) {
  var day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  var month = (date.getMonth() < 10) ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  var year = date.getYear() + 1900;
  return `${day}/${month}/${year}`
  return day + '/' + month + '/' + year;
};

exports.Printer = Printer;
