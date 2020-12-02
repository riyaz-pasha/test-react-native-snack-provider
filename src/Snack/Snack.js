"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var Component_1 = require("../Component");
var Types_1 = require("../Types");
exports.Snack = function (_a) {
    var message = _a.message, subMessage = _a.subMessage, onClose = _a.onClose, onPress = _a.onPress, id = _a.id, _b = _a.duration, duration = _b === void 0 ? 3000 : _b, _c = _a.hideIcon, hideIcon = _c === void 0 ? false : _c, iconName = _a.iconName, _d = _a.iconFamily, iconFamily = _d === void 0 ? 'Feather' : _d, iconColor = _a.iconColor, _e = _a.backgroundColor, backgroundColor = _e === void 0 ? '#F0F1F3' : _e, _f = _a.closeButtonBackgroundColor, closeButtonBackgroundColor = _f === void 0 ? '#FFF' : _f, _g = _a.closeIconColor, closeIconColor = _g === void 0 ? '#0A0A0A' : _g, _h = _a.snackType, snackType = _h === void 0 ? Types_1.SnackType.success : _h, _j = _a.successColor, successColor = _j === void 0 ? '#7DBE31' : _j, _k = _a.errorColor, errorColor = _k === void 0 ? '#FC0021' : _k, _l = _a.infoColor, infoColor = _l === void 0 ? '#FF8C00' : _l;
    var animation = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    var isDurationProvided = function () { return duration !== 0; };
    var hideSnack = function () { return id && onClose && onClose(id); };
    react_1.useEffect(function () {
        react_native_1.Animated.timing(animation, {
            toValue: 0.5,
            duration: 300,
            useNativeDriver: true,
        }).start(function () {
            if (isDurationProvided()) {
                setTimeout(hideSnack, duration);
            }
        });
    }, []);
    var scale = animation.interpolate({
        inputRange: [0, 0.5],
        outputRange: [0.8, 1],
        extrapolate: 'clamp',
    });
    var translateY = animation.interpolate({
        inputRange: [0, 0.5],
        outputRange: [60, 0],
    });
    var getIconColor = function () {
        if (iconColor) {
            return iconColor;
        }
        switch (snackType) {
            case Types_1.SnackType.error:
                return errorColor;
            case Types_1.SnackType.info:
                return infoColor;
            default:
                return successColor;
        }
    };
    var getIconName = function () {
        if (iconName) {
            return iconName;
        }
        switch (snackType) {
            case Types_1.SnackType.error:
                return 'x-circle';
            case Types_1.SnackType.info:
                return 'alert-circle';
            default:
                return 'check-circle';
        }
    };
    return (<Component_1.SnackContainer style={{ transform: [{ scale: scale }, { translateY: translateY }], backgroundColor: backgroundColor }} onPress={onPress}>
      <Component_1.Accent color={getIconColor()}/>

      {!hideIcon && (<react_native_1.View style={styles.iconContainer}>
          <Component_1.Icon family={iconFamily} name={getIconName()} size={20} color={getIconColor()}/>
        </react_native_1.View>)}

      <react_native_1.View style={[styles.messageContainer, hideIcon && styles.extraMargin]}>
        <react_native_1.Text style={styles.message}>{message}</react_native_1.Text>
        {subMessage && <react_native_1.Text style={styles.subMessage}>{subMessage}</react_native_1.Text>}
      </react_native_1.View>

      <react_native_1.TouchableOpacity style={styles.closeButtonContainer} onPress={hideSnack}>
        <react_native_1.View style={[styles.closeButton, { backgroundColor: closeButtonBackgroundColor }]}>
          <Component_1.Icon family="Feather" name="x" size={20} color={closeIconColor}/>
        </react_native_1.View>
      </react_native_1.TouchableOpacity>
    </Component_1.SnackContainer>);
};
exports.default = exports.Snack;
var styles = react_native_1.StyleSheet.create({
    iconContainer: {
        marginStart: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageContainer: {
        marginHorizontal: 8,
        marginVertical: 12,
        flex: 1,
    },
    message: {
        fontSize: 16,
    },
    subMessage: {
        fontSize: 12,
    },
    closeButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        padding: 4,
        marginHorizontal: 8,
    },
    extraMargin: {
        marginStart: 16,
    },
});
