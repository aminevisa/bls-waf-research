var _0x96efad = require("./832.js");
require("./116.js");
module.exports = _0x96efad.log = _0x96efad.log || {};
_0x96efad.log.levels = ["none", "error", "warning", "info", "debug", "verbose", "max"];
var _0x513362 = {};
var _0x74742 = [];
var _0x14b3e3 = null;
_0x96efad.log.LEVEL_LOCKED = 2;
_0x96efad.log.NO_LEVEL_CHECK = 4;
_0x96efad.log.INTERPOLATE = 8;
for (var _0x37dd3f = 0; _0x37dd3f < _0x96efad.log.levels.length; ++_0x37dd3f) {
  var _0x568337 = _0x96efad.log.levels[_0x37dd3f];
  _0x513362[_0x568337] = {
    index: _0x37dd3f,
    name: _0x568337.toUpperCase()
  };
}
_0x96efad.log.logMessage = function (_0x364188) {
  var _0x5cb1a5 = _0x513362[_0x364188.level].index;
  for (var _0x40546c = 0; _0x40546c < _0x74742.length; ++_0x40546c) {
    var _0x221179 = _0x74742[_0x40546c];
    if (_0x221179.flags & _0x96efad.log.NO_LEVEL_CHECK) {
      _0x221179.f(_0x364188);
    } else if (_0x5cb1a5 <= _0x513362[_0x221179.level].index) {
      _0x221179.f(_0x221179, _0x364188);
    }
  }
};
_0x96efad.log.prepareStandard = function (_0x5a9a19) {
  if (!("standard" in _0x5a9a19)) {
    _0x5a9a19.standard = _0x513362[_0x5a9a19.level].name + " [" + _0x5a9a19.category + "] " + _0x5a9a19.message;
  }
};
_0x96efad.log.prepareFull = function (_0x4c023e) {
  if (!("full" in _0x4c023e)) {
    var _0x152ed7 = [_0x4c023e.message];
    _0x152ed7 = _0x152ed7.concat([] || 0);
    _0x4c023e.full = _0x96efad.util.format.apply(this, _0x152ed7);
  }
};
_0x96efad.log.prepareStandardFull = function (_0x2a17f2) {
  if (!("standardFull" in _0x2a17f2)) {
    _0x96efad.log.prepareStandard(_0x2a17f2);
    _0x2a17f2.standardFull = _0x2a17f2.standard;
  }
};
var _0x175bc9 = ["error", "warning", "info", "debug", "verbose"];
for (_0x37dd3f = 0; _0x37dd3f < _0x175bc9.length; ++_0x37dd3f) {
  (function (_0x2b96ff) {
    _0x96efad.log[_0x2b96ff] = function (_0x1cf007, _0x585d45) {
      var _0x21717e = Array.prototype.slice.call(arguments).slice(2);
      var _0x16898d = {
        timestamp: new Date(),
        level: _0x2b96ff,
        category: _0x1cf007,
        message: _0x585d45,
        arguments: _0x21717e
      };
      _0x96efad.log.logMessage(_0x16898d);
    };
  })(_0x175bc9[_0x37dd3f]);
}
_0x96efad.log.makeLogger = function (_0x54f4ec) {
  var _0x176e34 = {
    flags: 0,
    f: _0x54f4ec
  };
  _0x96efad.log.setLevel(_0x176e34, "none");
  return _0x176e34;
};
_0x96efad.log.setLevel = function (_0xe3c624, _0x43c36b) {
  var _0x3ac1b1 = false;
  if (_0xe3c624 && !(_0xe3c624.flags & _0x96efad.log.LEVEL_LOCKED)) {
    for (var _0x2e24cf = 0; _0x2e24cf < _0x96efad.log.levels.length; ++_0x2e24cf) {
      if (_0x43c36b == _0x96efad.log.levels[_0x2e24cf]) {
        _0xe3c624.level = _0x43c36b;
        _0x3ac1b1 = true;
        break;
      }
    }
  }
  return _0x3ac1b1;
};
_0x96efad.log.lock = function (_0x505049, _0x32234c) {
  if (_0x32234c === undefined || _0x32234c) {
    _0x505049.flags |= _0x96efad.log.LEVEL_LOCKED;
  } else {
    _0x505049.flags &= ~_0x96efad.log.LEVEL_LOCKED;
  }
};
_0x96efad.log.addLogger = function (_0x42f942) {
  _0x74742.push(_0x42f942);
};
if (typeof console != "undefined" && "log" in console) {
  var _0x5adc66;
  if (console.error && console.warn && console.info && console.debug) {
    var _0x1b24db = {
      error: console.error,
      warning: console.warn,
      info: console.info,
      debug: console.debug,
      verbose: console.debug
    };
    function _0x5e5c29(_0x4cc8eb, _0x29dbac) {
      _0x96efad.log.prepareStandard(_0x29dbac);
      var _0x54a394 = _0x1b24db[_0x29dbac.level];
      var _0x435e16 = [_0x29dbac.standard];
      _0x435e16 = _0x435e16.concat(_0x29dbac.arguments.slice());
      _0x54a394.apply(console, _0x435e16);
    }
    _0x5adc66 = _0x96efad.log.makeLogger(_0x5e5c29);
  } else {
    _0x5e5c29 = function (_0x57bd10, _0x4c080b) {
      _0x96efad.log.prepareStandardFull(_0x4c080b);
    };
    _0x5adc66 = _0x96efad.log.makeLogger(_0x5e5c29);
  }
  _0x96efad.log.setLevel(_0x5adc66, "debug");
  _0x96efad.log.addLogger(_0x5adc66);
  _0x14b3e3 = _0x5adc66;
} else {
  console = {
    log: function () {}
  };
}
if (_0x14b3e3 !== null && typeof window != "undefined" && window.location) {
  var _0x4d2f65 = new URL(window.location.href).searchParams;
  if (_0x4d2f65.has("console.level")) {
    _0x96efad.log.setLevel(_0x14b3e3, _0x4d2f65.get("console.level").slice(-1)[0]);
  }
  if (_0x4d2f65.has("console.lock")) {
    if (_0x4d2f65.get("console.lock").slice(-1)[0] == "true") {
      _0x96efad.log.lock(_0x14b3e3);
    }
  }
}
_0x96efad.log.consoleLogger = _0x14b3e3;