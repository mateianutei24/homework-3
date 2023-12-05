"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transition = /** @class */ (function () {
    function Transition(initialState, finalState) {
        this.initialState = initialState;
        this.finalState = finalState;
    }
    Transition.prototype.displayTransition = function () {
        console.log("Transition from ".concat(this.initialState, " to ").concat(this.finalState, " "));
    };
    return Transition;
}());
exports.default = Transition;
