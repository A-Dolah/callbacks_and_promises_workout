const assert = require("assert");
const callback = require("./callback.js");

describe("Callback calculator", () => {
  it("should handle addition", () => {
    callback.addFunctionAsync(10, 20, result => {
      assert.equal(30, result);
    });
  });
});
