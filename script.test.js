const functions = require("./script.js");

test('the wordPicker is not empty', () => {
  expect(functions.wordPicker()).not.toBeFalsy();
});

test('the game is over', () => {
    expect(functions.winTheGame()).toBeTruthy();
});

