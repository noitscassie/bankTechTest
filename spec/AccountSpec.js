'use strict';

describe('Account', function() {
  var Account = require('../lib/account.js').Account;
  var account;

  beforeEach(function() {
    account = new Account();
  });

  describe('#getBalance', function() {
    it('Should have a balance of 0', function() {
      expect(account._balance).toEqual(0);
    });
  });

  describe('#setBalance', function() {
    it('Should increment an account\'s balance', function() {
      account._balance = 50;
      expect(account._balance).toEqual(50);
    });
  });

  describe('#getTransactions', function() {
    it('Should return an empty array', function() {
      expect(account.getTransactions()).toEqual([]);
    });
  });

  describe('#deposit', function() {
    it('Should have a balance of 100', function() {
      account.deposit(100);
      expect(account._balance).toEqual(100);
    });
    it('Should be added to the transactions property', function() {
      account.deposit(100);
      expect(account.getTransactions().length).toEqual(1);
    });
  });

  describe('#withdraw', function() {
    it('Should have a balance of 50', function() {
      account.deposit(100);
      account.withdraw(50);
      expect(account._balance).toEqual(50);
    });
  });
});
