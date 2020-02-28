const functions = require("./script.js");

test("the wordPicker is not blank", () => {
  expect(functions.wordPicker()).not.toBeFalsy();
});
