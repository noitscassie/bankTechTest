'use strict';
describe('Account', function() {
  var Account = require('../lib/account.js').Account;
  var account;

  beforeEach(function() {
    account = new Account();
  });

  describe('#getBalance', function() {
    it('Should have a balance of 0', function() {
      expect(account.getBalance()).toEqual(0);
    });
  });

  describe('#setBalance', function() {
    it('Should increment an account\'s balance', function() {
      account.setBalance(50);
      expect(account.getBalance()).toEqual(50);
    });
  });

  describe('#deposit', function() {
    it('Should have a balance of 100', function() {
      account.deposit(100);
      expect(account.getBalance()).toEqual(100);
    });
  });

  describe('#withdraw', function() {
    it('Should have a balance of 50', function() {
      account.deposit(100);
      account.withdraw(50);
      expect(account.getBalance()).toEqual(50);
    });
    it('Should raise an error', function() {
      expect(function() {
        account.withdraw(50);
      }).toThrow('Error: requested withdrawal exceeds available funds');
    });
  });
});
