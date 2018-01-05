'use strict';

describe('Deposit', function() {
  var Account = require('../lib/Account.js').Account;
  var Deposit = require('../lib/Deposit.js').Deposit;
  var account;
  var deposit;

  beforeEach(function() {
    account = new Account();
    deposit = new Deposit(account, 50);
  });

  describe('Date', function() {
    it('Should be a date object', function() {
      expect(deposit.date).toEqual(jasmine.any(Date));
    });
  });

  describe('#deposit', function() {
    it('Should call the account balance setter', function() {
      var balanceSetterSpy = spyOnProperty(account, 'balance', 'set');
      account.deposit(50);
      expect(balanceSetterSpy).toHaveBeenCalled();
    });
    it('Should set the updatedBalance property', function() {
      deposit.deposit();
      expect(deposit._updatedBalance).toEqual(50);
    });
  });
});
