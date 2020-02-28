const functions = require("./script.js");

test('the wordPicker is not empty', () => {
  expect(functions.wordPicker()).not.toBeFalsy();
});