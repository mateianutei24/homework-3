"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var generateArray_1 = __importDefault(require("../functions/generateArray"));
var generateTransition_1 = __importDefault(require("../functions/generateTransition"));
var FiniteAutomatum = /** @class */ (function () {
    function FiniteAutomatum(setOfStates, alphabet, initialStates, finalStates, transitions) {
        this.setOfStates = setOfStates;
        this.alphabet = alphabet;
        this.initialStates = initialStates;
        this.finalStates = finalStates;
        this.transitions = transitions;
    }
    FiniteAutomatum.prototype.readAutomatumFromFile = function (filePath) {
        var fileContent = fs.readFileSync(filePath, 'utf8');
        var rows = fileContent.split(/\r?\n/);
        var set_of_states = (0, generateArray_1.default)(rows[0]);
        var alphabet = (0, generateArray_1.default)(rows[1]);
        var initial_states = (0, generateArray_1.default)(rows[2]);
        var final_states = (0, generateArray_1.default)(rows[3]);
        this.setOfStates = set_of_states;
        this.alphabet = alphabet;
        this.initialStates = initial_states;
        this.finalStates = final_states;
        var transitions = [];
        var i = 5;
        for (i = 5; i < rows.length - 1; i++) {
            var temp = (0, generateTransition_1.default)(rows[i]);
            transitions = transitions.concat(temp);
        }
        this.transitions = transitions;
    };
    FiniteAutomatum.prototype.displayAutomatum = function () {
        console.log("Set of states ".concat(this.setOfStates));
        console.log("Alphabet ".concat(this.alphabet));
        console.log("Initial States ".concat(this.initialStates));
        console.log("Final States ".concat(this.finalStates));
        console.log("Transitions");
        console.log(this.transitions);
    };
    return FiniteAutomatum;
}());
exports.default = FiniteAutomatum;
