'use strict';

describe('Withdrawal', function() {
  var Withdrawal = require('../lib/withdrawal.js').Withdrawal;

  describe('Date', function() {
    it('Should be a date object', function() {
      var withdrawal = new Withdrawal();
      expect(withdrawal.date).toEqual(jasmine.any(Date));
    });
  });
});
