'use strict';

describe('Deposit', function() {
  var Deposit = require('../lib/Deposit.js').Deposit;
  var fakeAccount;
  var deposit;

  beforeEach(function() {
    fakeAccount = {balance: 0}
    deposit = new Deposit(fakeAccount, 50);
  });

  describe('Date', function() {
    it('Should be a date object', function() {
      expect(deposit.date).toEqual(jasmine.any(Date));
    });
  });

  describe('#deposit', function() {
    it('Should call the account balance setter', function() {
      deposit.deposit();
      expect(fakeAccount.balance).toEqual(50);
    });
    it('Should set the updatedBalance property', function() {
      deposit.deposit();
      expect(deposit._updatedBalance).toEqual(50);
    });
  });
});
