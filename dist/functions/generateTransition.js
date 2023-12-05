"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var transition_1 = __importDefault(require("../classes/transition"));
function generateTransitions(characters) {
    // Regular expression to match the format 'initialState->finalState1|finalState2|...'
    var regex = /^(\w+)->(.+)$/;
    // Use regex.exec to get the matched parts
    var match = regex.exec(characters);
    // If there is a match, extract the parts
    if (match && match[1] && match[2]) {
        var initialState_1 = match[1];
        var finalStates = match[2].split('|').map(function (state) { return state.trim(); });
        // Create Transition instances for each final state
        var transitions = finalStates.map(function (finalState) { return new transition_1.default(initialState_1, finalState); });
        return transitions;
    }
    // Return null if no match is found
    return [];
}
exports.default = generateTransitions;
