'use strict';

var Printer = function() {};

Printer.prototype.print = function(account) {
  var transactions = account._transactions.reverse();
  console.log('date || credit || debit || balance');
  for (var i = 0; i < transactions.length; i++) {
    if (transactions[i].withdrawalAmount != undefined) {
      var creditAndDebit = `||  ${transactions[i].withdrawalAmount}.00`;
    } else {
      var creditAndDebit = `${transactions[i].depositAmount}.00 ||`;
    }
    console.log(`${transactions[i].date.getDate()}/${transactions[i].date.getMonth() + 1}/${transactions[i].date.getFullYear()} || ${creditAndDebit} || ${transactions[i].updatedBalance}.00`);
  }
};

Printer.prototype.formatDate = function(date) {
  if (date.getDate() < 10) {
    var day = '0' + date.getDate();
  } else {
    var day = date.getDate();
  }
  if ((date.getMonth() + 1) < 10) {
    var month = '0' + (date.getMonth() + 1);
  } else {
    var month = date.getMonth() + 1;
  }
  var year = date.getYear() + 1900;
  return day + '/' + month + '/' + year;
};

exports.Printer = Printer;
