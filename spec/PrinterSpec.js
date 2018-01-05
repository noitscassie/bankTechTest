'use strict';

describe('Printer', function() {
  var Printer = require('../lib/Printer.js').Printer;
  var printer;

  beforeEach(function() {
    printer = new Printer();
  });

  describe('#formatDate', function() {
    it('Should format a date to DD/MM/YYYY', function() {
      var date = new Date(2017, 6, 3);
      var formattedDate = printer.formatDate(date);
      expect(formattedDate).toEqual('03/07/2017');
    });
  });

  describe('#assignCreditAndDebit', function() {
    it('Should return a string with 1000.00 and two bars', function() {
      var fakeTransaction = { withdrawalAmount: undefined, depositAmount: 1000 };
      var creditAndDebit = printer.assignCreditAndDebit(fakeTransaction);
      expect(creditAndDebit).toEqual('1000.00 ||');
    });
    it('Should return a string with two bars and 1000.00', function() {
      var fakeTransaction = { withdrawalAmount: 1000, depositAmount: undefined };
      var creditAndDebit = printer.assignCreditAndDebit(fakeTransaction);
      expect(creditAndDebit).toEqual('|| 1000.00');
    });
  });
});
