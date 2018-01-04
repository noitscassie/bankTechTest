'use strict';

describe('Withdrawal', function() {
  var Account = require('../lib/account.js').Account;
  var Withdrawal = require('../lib/withdrawal.js').Withdrawal;
  var account;
  var withdrawal;

  beforeEach(function() {
    account = new Account(50);
    withdrawal = new Withdrawal(account, 50);
  });

  describe('Date', function() {
    it('Should be a date object', function() {
      expect(withdrawal.date).toEqual(jasmine.any(Date));
    });
  });

  describe('#withdraw', function() {
    it('Should call the account balance setter method', function() {
      var balanceSetterSpy = spyOnProperty(account, 'balance', 'set');
      account.withdraw(50);
      expect(balanceSetterSpy).toHaveBeenCalled();
    });
  });

  describe('#checkSufficientFunds', function() {
    it('Should call the account balance getter method', function() {
      var balanceGetterSpy = spyOnProperty(account, 'balance').and.returnValue(25);
      expect(function() { account.withdraw(50) } ).toThrow('Error: requested withdrawal exceeds available funds');
      expect(balanceGetterSpy).toHaveBeenCalled();
    });
  });
});
