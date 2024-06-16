"use strict";
QUnit.module("App Talk");
QUnit.test("GetGreeting Test", (assert) => {
    assert.equal(App.Talk.GetGreetings(new Date(2017, 1, 1, 0, 0, 0)), "Welcome back!");
    assert.equal(App.Talk.GetGreetings(new Date(2017, 1, 1, 4, 59, 59)), "Welcome back!");
    assert.equal(App.Talk.GetGreetings(new Date(2017, 1, 1, 5, 0, 0)), "Good morning!");
    assert.equal(App.Talk.GetGreetings(new Date(2017, 1, 1, 11, 59, 59)), "Good morning!");
    assert.equal(App.Talk.GetGreetings(new Date(2017, 1, 1, 12, 0, 0)), "Good afternoon!");
    assert.equal(App.Talk.GetGreetings(new Date(2017, 1, 1, 15, 59, 59)), "Good afternoon!");
    assert.equal(App.Talk.GetGreetings(new Date(2017, 1, 1, 16, 0, 0)), "Good evening!");
    assert.equal(App.Talk.GetGreetings(new Date(2017, 1, 1, 21, 59, 59)), "Good evening!");
    assert.equal(App.Talk.GetGreetings(new Date(2017, 1, 1, 22, 0, 0)), "Welcome back!");
    assert.equal(App.Talk.GetGreetings(new Date(2017, 1, 1, 23, 59, 59)), "Welcome back!");
});
//# sourceMappingURL=test1.js.map