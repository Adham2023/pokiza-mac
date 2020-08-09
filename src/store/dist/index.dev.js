"use strict";

var _interopRequireDefault = require("/Users/adham/Documents/vue/pokiza/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _settings = _interopRequireDefault(require("./modules/settings"));

_vue.default.use(_vuex.default);

var _default = new _vuex.default.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    settings: _settings.default
  }
});

exports.default = _default;