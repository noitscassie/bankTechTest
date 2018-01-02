'use strict';

describe('Account', function() {
  var Account = require('../lib/account.js').Account;
  var account;

  beforeEach(function() {
    var account = new Account();
  });

  it('Should have a balance of 0', function() {
    var account = new Account();
    expect(account.getBalance()).toEqual(0);
  });
});
