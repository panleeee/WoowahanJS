'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var MIDDLEWARE = exports.MIDDLEWARE = {
  APP: 'app',
  VIEW: 'view',
  REDUCER: 'reducer',
  ROUTER: 'router'
};

var MIDDLEWARE_PROTOCOL = exports.MIDDLEWARE_PROTOCOL = {
  BEFORE: 'before',
  AFTER: 'after',
  UNMOUNT: 'unmount'
};

var MiddlewareRunner = exports.MiddlewareRunner = {
  run: function run(middlewares, protocol, params, callback) {
    if (!Array.isArray(middlewares) || typeof protocol !== 'string') throw new Error('MiddlewareRunner arguments error');

    var index = 0;

    var next = function next() {
      var curr = middlewares[index++];

      if (curr) {
        var _curr$protocol;

        (_curr$protocol = curr[protocol]).call.apply(_curr$protocol, [null].concat(_toConsumableArray(params), [next]));
      } else {
        !!callback && callback();
      }
    };

    next();
  }
};