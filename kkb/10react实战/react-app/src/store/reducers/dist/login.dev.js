"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getUser;

function getUser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "LOGIN":
      return action.user;

    case "LOGOUT":
      return "";
  }

  return state;
}