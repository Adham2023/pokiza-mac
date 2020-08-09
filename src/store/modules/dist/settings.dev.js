"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var state = {
  currentComponent: 'changeViews'
};
var mutations = {
  SET_COMPONENT: function SET_COMPONENT(state, component) {
    state.currentComponent = component;
  }
};
var actions = {
  SET_COMPONENT: function SET_COMPONENT(_ref, component) {
    var commit = _ref.commit;
    commit('SET_COMPONENT', component);
  }
};
var getters = {};
var _default = {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
exports.default = _default;