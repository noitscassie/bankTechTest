'use strict';

describe('Transaction', function() {
  var Transaction = require('../lib/transaction.js').Transaction;
  var transaction;

  beforeEach(function() {
    transaction = new Transaction();
  });

  describe('Date', function() {
    it('Should give the current date', function() {
      expect(transaction.date).toEqual(jasmine.any(Date));
    });
  });
});
