'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jump = require('jump.js');

var _jump2 = _interopRequireDefault(_jump);

var _func = require('./utils/func');

var _scroll = require('./utils/scroll');

var _hash = require('./utils/hash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultConfig = {
  offset: 0,
  scrollDuration: 400,
  keepLastAnchorHash: false
};

var Manager = function Manager() {
  var _this = this;

  _classCallCheck(this, Manager);

  this.addListeners = function () {
    window.addEventListener('scroll', _this.scrollHandler, false);
    window.addEventListener('hashchange', _this.handleHashChange);
  };

  this.removeListeners = function () {
    window.removeEventListener('scroll', _this.scrollHandler, false);
    window.removeEventListener('hashchange', _this.handleHashChange);
  };

  this.configure = function (config) {
    _this.config = _extends({}, defaultConfig, config);
  };

  this.goToTop = function () {
    if ((0, _scroll.getScrollTop)() === 0) return;
    _this.forcedHash = true;
    window.scroll(0, 0);
  };

  this.addAnchor = function (id, component) {
    // if this is the first anchor, set up listeners
    if (Object.keys(_this.anchors).length === 0) {
      _this.addListeners();
    }
    _this.forceHashUpdate();
    _this.anchors[id] = component;
  };

  this.removeAnchor = function (id) {
    delete _this.anchors[id];
    // if this is the last anchor, remove listeners
    if (Object.keys(_this.anchors).length === 0) {
      _this.removeListeners();
    }
  };

  this.handleScroll = function () {
    var _config = _this.config,
        offset = _config.offset,
        keepLastAnchorHash = _config.keepLastAnchorHash;

    var bestAnchorId = (0, _scroll.getBestAnchorGivenScrollLocation)(_this.anchors, offset);

    if (bestAnchorId && (0, _hash.getHash)() !== bestAnchorId) {
      _this.forcedHash = true;
      (0, _hash.updateHash)(bestAnchorId, false);
    } else if (!bestAnchorId && !keepLastAnchorHash) {
      (0, _hash.removeHash)();
    }
  };

  this.handleHashChange = function (e) {
    if (_this.forcedHash) {
      _this.forcedHash = false;
    } else {
      _this.goToSection((0, _hash.getHash)());
    }
  };

  this.goToSection = function (id) {
    var element = _this.anchors[id];
    if (element) {
      (0, _jump2.default)(element, {
        duration: _this.config.scrollDuration,
        offset: _this.config.offset
      });
    } else {
      // make sure that standard hash anchors don't break.
      // simply jump to them.
      element = document.getElementById(id);
      if (element) {
        (0, _jump2.default)(element, {
          duration: 0,
          offset: _this.config.offset
        });
      }
    }
  };

  this.anchors = {};
  this.forcedHash = false;
  this.config = defaultConfig;

  this.scrollHandler = (0, _func.debounce)(this.handleScroll, 100);
  this.forceHashUpdate = (0, _func.debounce)(this.handleHashChange, 1);
};

exports.default = new Manager();