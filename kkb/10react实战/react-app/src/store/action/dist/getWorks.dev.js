"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getWorks;

var _http = _interopRequireDefault(require("./http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getWorks(page) {
  return function (dispatch) {
    dispatch({
      type: "LOAD"
    });
    return _http["default"].post("/lecturer/list?page=".concat(page, "&rows=8"), {
      order: "desc",
      sort: "sort",
      category_id: 1,
      recommend: 1
    }).then(function (res) {
      // console.log(res);
      if (res.data.length) {
        dispatch({
          type: "LOADEND"
        });
        return false;
      }

      dispatch({
        type: "LOADOVER",
        data: res.data
      });
      return true;
    });
  };
}