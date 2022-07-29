const assert = require('assert');
func = require("../functions.js")

// We can group similar tests inside a describe block
describe("Simple Calculations", () => {
    it("Is returning 5 when adding 2 + 3", () => {
      assert.equal(func.add(2,3), 5);
    })
});