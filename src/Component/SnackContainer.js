"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
exports.SnackContainer = function (_a) {
    var style = _a.style, onPress = _a.onPress, children = _a.children;
    return (<react_native_1.Animated.View style={[styles.mainContainer, style]}>
      <react_native_1.View>
        <react_native_1.TouchableOpacity style={styles.buttonContainerStyle} onPress={onPress}>
          {children}
        </react_native_1.TouchableOpacity>
      </react_native_1.View>
    </react_native_1.Animated.View>);
};
var styles = react_native_1.StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginHorizontal: 16,
        marginBottom: 16,
        borderRadius: 4,
    },
    buttonContainerStyle: {
        flexDirection: 'row',
    },
});
