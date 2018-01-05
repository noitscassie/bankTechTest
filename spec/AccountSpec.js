'use strict';

describe('Account', function() {
  var Account = require('../lib/Account.js').Account;
  var account;

  beforeEach(function() {
    account = new Account();
  });

  describe('#getBalance', function() {
    it('Should have a balance of 0', function() {
      expect(account.balance).toEqual(0);
    });
  });

  describe('#setBalance', function() {
    it('Should increment an account\'s balance', function() {
      account._balance = 50;
      expect(account.balance).toEqual(50);
    });
  });

  describe('#deposit', function() {
    it('Should have a balance of 100', function() {
      account.deposit(100);
      expect(account.balance).toEqual(100);
    });
    it('Should be added to the transactions property', function() {
      account.deposit(100);
      expect(account.transactions.length).toEqual(1);
    });
  });

  describe('#withdraw', function() {
    it('Should have a balance of 50', function() {
      account.deposit(100);
      account.withdraw(50);
      expect(account.balance).toEqual(50);
    });
    it('Should be added to the transactions property', function() {
      account = new Account(50);
      account.withdraw(25);
      expect(account.transactions.length).toEqual(1);
    });
  });
});
