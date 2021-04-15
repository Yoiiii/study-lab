"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _login = _interopRequireDefault(require("./login"));

var _works = _interopRequireDefault(require("./works"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function index() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var actions = arguments.length > 1 ? arguments[1] : undefined;
  return state;
}

var _default = {
  index: index,
  getUser: _login["default"],
  works: _works["default"]
};
exports["default"] = _default;