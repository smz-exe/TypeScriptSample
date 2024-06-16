"use strict";
var App;
(function (App) {
    class Talk {
        static GetGreetings(now) {
            let h = now.getHours();
            if (h < 5) {
                return "Welcome back!";
            }
            else if (h < 12) {
                return "Good morning!";
            }
            else if (h < 16) {
                return "Good afternoon!";
            }
            else if (h < 22) {
                return "Good evening!";
            }
            else {
                return "Welcome back!";
            }
        }
    }
    App.Talk = Talk;
})(App || (App = {}));
//# sourceMappingURL=app-talk.js.map