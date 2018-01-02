'use strict';

describe('Account', function() {
  var Account = require('../lib/account.js').Account;
  var account;

  beforeEach(function() {
    var account = new Account();
  });

  describe('#getBalance', function() {
    it('Should have a balance of 0', function() {
      var account = new Account();
      expect(account.getBalance()).toEqual(0);
    });
  });

  describe('#deposit', function() {
    it('Should have a balance of 100', function() {
      var account = new Account();
      account.deposit(100);
      expect(account.getBalance()).toEqual(100);
    });
  });

  describe('#setBalance', function() {
    it('Should increment an account\'s balance', function() {
      var account = new Account();
      account.setBalance(50);
      expect(account.getBalance()).toEqual(50);
    })
  })

});
