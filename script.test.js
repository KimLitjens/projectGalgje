const functions = require("./script.js");

test('the wordPicker is not empty', () => {
  expect(functions.wordPicker()).not.toBeFalsy();
});

test("check if a letter is part of the word", () => {
  expect(functions.theWord()).not.toBeFalsy();
});
