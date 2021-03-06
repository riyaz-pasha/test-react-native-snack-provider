"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid = function () {
    var dt = new Date().getTime();
    var UUID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    return UUID;
};
exports.default = uuid;
