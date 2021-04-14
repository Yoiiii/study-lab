"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBack = useBack;
exports.useInnerHeight = useInnerHeight;

function useBack(history) {
  return function () {
    if (history.length > 1) {
      history.goBack();
    } else {
      history.push("/");
    }
  };
}

function useInnerHeight() {
  return window.innerHeight;
}