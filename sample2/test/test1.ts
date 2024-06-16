import assert = require('assert');
import appTalk = require('../app-talk');

describe("App.Talk", () => {
    it("GetGreeting Test", () => {
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 0, 0, 0, 0)), "Welcome back!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 5, 59, 59, 999)), "Welcome back!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 6, 0, 0, 0)), "Good morning!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 11, 59, 59, 999)), "Good morning!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 12, 0, 0, 0)), "Hello");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 17, 59, 59, 999)), "Hello");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 18, 0, 0, 0)), "Good evening!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 23, 59, 59, 999)), "Good evening!");
    });
});


describe("test1 Suite 1", () => {
    it("Test A ", () => {
        assert.ok(true, "This shouldn't fail");
    });

    it("Test B", () => {
        assert.ok(1 == 1, "This shouldn't fail");
        assert.ok(true, "This should fail");
    });
});