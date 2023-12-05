"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var finiteAutomatum_1 = __importDefault(require("./classes/finiteAutomatum"));
function main() {
    var filePath = 'C:\\Users\\Anutei Matei\\Desktop\\New folder\\src\\finiteAut.txt';
    var automatum = new finiteAutomatum_1.default([], [], [], [], []);
    automatum.readAutomatumFromFile(filePath);
    automatum.displayAutomatum();
}
main();
