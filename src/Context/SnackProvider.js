"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var Snack_1 = require("../Snack");
var UUID_1 = __importDefault(require("../utils/UUID"));
exports.SnackContext = react_1.default.createContext({
    snack: function () { return null; },
});
exports.useSnack = function () { return react_1.default.useContext(exports.SnackContext); };
react_native_1.UIManager && react_native_1.UIManager.setLayoutAnimationEnabledExperimental && react_native_1.UIManager.setLayoutAnimationEnabledExperimental(true);
var SnackProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    var _b = react_1.useState([]), snacks = _b[0], setSnacks = _b[1];
    var hideSnack = function (id) {
        react_native_1.LayoutAnimation.configureNext(react_native_1.LayoutAnimation.Presets.easeInEaseOut);
        setSnacks(function (prevSnacks) { return prevSnacks.filter(function (el) { return el.id !== id; }); });
    };
    var snack = function (snackConfig) {
        react_native_1.LayoutAnimation.configureNext(react_native_1.LayoutAnimation.Presets.easeInEaseOut);
        var newSnack = __assign(__assign(__assign({}, theme), snackConfig), { id: UUID_1.default(), onClose: hideSnack });
        setSnacks(function (prevSnacks) { return __spreadArrays(prevSnacks, [newSnack]); });
    };
    return (<exports.SnackContext.Provider value={{ snack: snack }}>
      {children}
      <react_native_1.View style={style.toastsContainer}>
        {snacks.map(function (config) {
        return <Snack_1.Snack key={config.id} {...config}/>;
    })}
      </react_native_1.View>
    </exports.SnackContext.Provider>);
};
exports.default = SnackProvider;
var style = react_native_1.StyleSheet.create({
    toastsContainer: {
        position: 'absolute',
        bottom: 0,
        flex: 1,
        width: '100%',
    },
});
