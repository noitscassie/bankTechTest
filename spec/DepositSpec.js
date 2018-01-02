'use strict';

describe('Deposit', function() {
  var Deposit = require('../lib/deposit.js').Deposit;

  describe('Date', function() {
    it('Should be a date object', function() {
      var deposit = new Deposit();
      expect(deposit.date).toEqual(jasmine.any(Date));
    });
  });
});
