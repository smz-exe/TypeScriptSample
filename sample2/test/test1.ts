import assert = require('assert');
describe("test1 Suite 1", () => {
    it("Test A ", () => {
        assert.ok(true, "This shouldn't fail");
    });

    it("Test B", () => {
        assert.ok(1 == 1, "This shouldn't fail");
        assert.ok(true, "This should fail");
    });
});