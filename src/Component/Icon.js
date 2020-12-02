"use strict";
// @ts-nocheck
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
var React = __importStar(require("react"));
var Entypo_1 = __importDefault(require("react-native-vector-icons/Entypo"));
var EvilIcons_1 = __importDefault(require("react-native-vector-icons/EvilIcons"));
var Feather_1 = __importDefault(require("react-native-vector-icons/Feather"));
var FontAwesome_1 = __importDefault(require("react-native-vector-icons/FontAwesome"));
var Foundation_1 = __importDefault(require("react-native-vector-icons/Foundation"));
var Ionicons_1 = __importDefault(require("react-native-vector-icons/Ionicons"));
var MaterialCommunityIcons_1 = __importDefault(require("react-native-vector-icons/MaterialCommunityIcons"));
var MaterialIcons_1 = __importDefault(require("react-native-vector-icons/MaterialIcons"));
var Octicons_1 = __importDefault(require("react-native-vector-icons/Octicons"));
var SimpleLineIcons_1 = __importDefault(require("react-native-vector-icons/SimpleLineIcons"));
var Zocial_1 = __importDefault(require("react-native-vector-icons/Zocial"));
exports.Icon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 20 : _b, _c = _a.color, color = _c === void 0 ? 'green' : _c, _d = _a.family, family = _d === void 0 ? 'Feather' : _d, _e = _a.name, name = _e === void 0 ? 'check-circle' : _e;
    var VectorIcon;
    switch (family) {
        case 'Entypo':
            VectorIcon = Entypo_1.default;
            break;
        case 'EvilIcons':
            VectorIcon = EvilIcons_1.default;
            break;
        case 'Feather':
            VectorIcon = Feather_1.default;
            break;
        case 'FontAwesome':
            VectorIcon = FontAwesome_1.default;
            break;
        case 'Foundation':
            VectorIcon = Foundation_1.default;
            break;
        case 'Ionicons':
            VectorIcon = Ionicons_1.default;
            break;
        case 'MaterialCommunityIcons':
            VectorIcon = MaterialCommunityIcons_1.default;
            break;
        case 'MaterialIcons':
            VectorIcon = MaterialIcons_1.default;
            break;
        case 'Octicons':
            VectorIcon = Octicons_1.default;
            break;
        case 'SimpleLineIcons':
            VectorIcon = SimpleLineIcons_1.default;
            break;
        case 'Zocial':
            VectorIcon = Zocial_1.default;
            break;
        default:
            VectorIcon = Ionicons_1.default;
    }
    return <VectorIcon name={name} {...{ size: size, color: color }}/>;
};
exports.default = exports.Icon;
