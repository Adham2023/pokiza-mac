"use strict";

var _interopRequireDefault = require("/Users/adham/Documents/vue/pokiza/node_modules/@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.object.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("/Users/adham/Documents/vue/pokiza/node_modules/@babel/runtime/helpers/esm/interopRequireWildcard"));

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _icons = require("./icons");

var _i18n = _interopRequireDefault(require("../i18n"));

_vue.default.use(_vueRouter.default);

var routes = [{
  path: '',
  redirect: "/".concat(_i18n.default.locale)
}, {
  path: '/:lang',
  component: function component() {
    return Promise.resolve().then(function () {
      return (0, _interopRequireWildcard2.default)(require('@/layouts/index'));
    });
  },
  children: [{
    path: '',
    name: "Orders",
    meta: {
      icon: _icons.orders
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return (0, _interopRequireWildcard2.default)(require('@/views/home/index'));
      });
    }
  }, {
    path: 'moderator',
    name: "Moderator",
    meta: {
      icon: _icons.person_outline
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return (0, _interopRequireWildcard2.default)(require('@/views/moderator/index'));
      });
    }
  }, {
    path: 'transport',
    name: "Transport",
    meta: {
      icon: _icons.roadster
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return (0, _interopRequireWildcard2.default)(require('@/views/transport/index'));
      });
    }
  }, {
    path: 'contacts',
    name: "Contacts",
    meta: {
      icon: _icons.contact
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return (0, _interopRequireWildcard2.default)(require('@/views/contacts/index'));
      });
    }
  }, {
    path: 'newclient',
    name: "Newclient",
    meta: {
      icon: _icons.person_add
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return (0, _interopRequireWildcard2.default)(require('@/views/newclient/index'));
      });
    }
  }, {
    path: 'notifications',
    name: "Notifications",
    meta: {
      icon: _icons.notifications
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return (0, _interopRequireWildcard2.default)(require('@/views/notification/index'));
      });
    }
  }, {
    path: 'statistics',
    name: "Statistics",
    meta: {
      icon: _icons.chart
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return (0, _interopRequireWildcard2.default)(require('@/views/statistics/index'));
      });
    }
  }, {
    path: 'settings',
    name: "Settings",
    meta: {
      icon: _icons.settings
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return (0, _interopRequireWildcard2.default)(require('@/views/settings/index'));
      });
    }
  }, {
    path: 'help',
    name: "Help",
    meta: {
      icon: _icons.help
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return (0, _interopRequireWildcard2.default)(require('@/views/help/index'));
      });
    }
  }]
}, {
  path: '/login',
  name: "Login",
  component: function component() {
    return Promise.resolve().then(function () {
      return (0, _interopRequireWildcard2.default)(require('@/layouts/login'));
    });
  }
}];
var router = new _vueRouter.default({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports.default = _default;