const { Given, Then, When } = require('@cucumber/cucumber')
const assert = require('assert');

let answer = 0;

  Given('I start with {int}', function (input) {
    answer = input;
  });
  When('I add {int}', function (input) {
    answer = answer + input;
  });
  When('I multiply {int}', function (input) {
    answer = answer * input;
  });
  Then('I end up with {int}', function (input) {
    assert.equal(answer, input);
  });
