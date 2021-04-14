"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = register;

var _http = _interopRequireDefault(require("./http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function register(data) {
  return function (dispatch) {
    return _http["default"].post("/user/register").then(function (res) {
      if (res.data.code == 0) {// dispatch({
        //   type:"LOGIN",
        //   user:data.username
        // })
      }

      return res.data;
    });
  };
}