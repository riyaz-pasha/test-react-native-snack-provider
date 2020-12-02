"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
exports.Accent = function (_a) {
    var color = _a.color, props = __rest(_a, ["color"]);
    return (<react_native_1.View style={[styles.borderStyle, { borderColor: color }]} {...props}/>);
};
exports.default = exports.Accent;
var styles = react_native_1.StyleSheet.create({
    borderStyle: {
        borderStartWidth: 4,
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2,
    },
});
