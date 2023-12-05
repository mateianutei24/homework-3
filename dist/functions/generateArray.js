"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateArray(characters) {
    var regex = /\{([^}]+)\}/;
    var match = regex.exec(characters);
    if (match && match[1]) {
        var elements = match[1].split(',');
        return elements.map(function (element) { return element.trim(); });
    }
    return [];
}
exports.default = generateArray;
