const test = require("node:test");
const assert = require("node:assert/strict");

test("basic CI test passes", () => {
  assert.equal(2 + 2, 4);
});
