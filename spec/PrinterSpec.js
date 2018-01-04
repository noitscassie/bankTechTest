'use strict';

describe('Printer', function() {
  var Printer = require('../lib/Printer.js').Printer;

  describe('#formatDate', function() {
    it('Should format a date to DD/MM/YYYY', function() {
      var date = new Date(2017, 6, 3);
      var printer = new Printer();
      expect(function() { printer.formateDate(date) }).toEqual('03/07/2017');
    });
  });
});
