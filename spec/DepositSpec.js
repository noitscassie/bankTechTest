'use strict';

describe('Deposit', function() {
  var Account = require('../lib/account.js').Account;
  var Deposit = require('../lib/deposit.js').Deposit;
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
    it('Should increase an account\'s balance', function() {
      spyOnProperty(account, 'balance', 'get').and.returnValue(0);
      var balanceSetterSpy = spyOnProperty(account, 'balance', 'set');
      account.deposit(50);
      expect(balanceSetterSpy).toHaveBeenCalled();
    });
  });
});
