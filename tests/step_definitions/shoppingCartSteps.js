const {Given, When, Then, BeforeAll, AfterAll} = require('cucumber');
const {expect} = require('chai')
const Nightmare = require('nightmare')

let nightmare = {}

BeforeAll(() => {
  nightmare = Nightmare({show: true});
})

AfterAll(() => {
  nightmare.end()
    .then(function () {
      console.log('nightmare is now closed..');
    })
})

Given(/^go to url "([^"]*)"$/, async function (url) {
  await nightmare.goto(url)
});
Given(/^enter "([^"]*)" in the field "([^"]*)"$/, async function (value, id) {
  await nightmare
    .type(`#${id}`, value)
});
When(/^click submit$/, async function () {
  await nightmare.click('button[type=submit]')
});
Then(/^form is submitted successfully$/, async function () {
  const result = await nightmare.visible('.alert-success')
  expect(true).to.equal(result)
});
Then(/^show error message$/, async function () {
  const result = await nightmare.visible('.alert-danger')
  expect(true).to.equal(result)
});
