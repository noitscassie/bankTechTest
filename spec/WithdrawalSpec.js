'use strict';

describe('Withdrawal', function() {
  var Withdrawal = require('../lib/Withdrawal.js').Withdrawal;
  var withdrawal;
  var fakeAccount;

  beforeEach(function() {
    fakeAccount = {balance: 50};
    withdrawal = new Withdrawal(fakeAccount, 50);
  });

  describe('Date', function() {
    it('Should be a date object', function() {
      expect(withdrawal.date).toEqual(jasmine.any(Date));
    });
  });

  describe('#withdraw', function() {
    it('Should set the account\'s balance to 0', function() {
      withdrawal.withdraw();
      expect(fakeAccount.balance).toEqual(0);
    });
    it('Should set the updatedBalance property', function() {
      withdrawal.withdraw();
      expect(withdrawal.updatedBalance).toEqual(0);
    });
  });

  describe('#checkSufficientFunds', function() {
    it('Should call the account balance getter method', function() {
      fakeAccount.balance = 50;
      withdrawal = new Withdrawal(fakeAccount, 100);
      expect(function() {
        withdrawal.withdraw();
      }).toThrow('Error: requested withdrawal exceeds available funds');
    });
  });
});
