"use strict";

var _interopRequireDefault = require("/Users/adham/Documents/vue/pokiza/node_modules/@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.match");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueI18n = _interopRequireDefault(require("vue-i18n"));

_vue.default.use(_vueI18n.default);

function loadLocaleMessages() {
  var locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);

  var messages = {};
  locales.keys().forEach(function (key) {
    var matched = key.match(/([A-Za-z0-9-_]+)\./i);

    if (matched && matched.length > 1) {
      var locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

var _default = new _vueI18n.default({
  locale: 'uz',
  fallbackLocale: 'uz',
  messages: loadLocaleMessages()
});

exports.default = _default;