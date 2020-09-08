const {Given, When, Then} = require('cucumber');
const {expect} = require('chai')
const discount = require('../../src/discount')

Given(/^顧客消費總金額為 "([^"]*)" 元$/, function (totalPrice) {
  this.totalPrice = totalPrice
});

When(/^計算折扣後金額$/, function () {
  this.totalPrice = discount(this.totalPrice)
});

Then(/^折扣後金額應該為 "([^"]*)" 元$/, function (expectedPrice) {
  expect(+expectedPrice).to.equal(this.totalPrice)
});
