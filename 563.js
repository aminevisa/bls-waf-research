var _0x4ea7bd = require("./832.js");
require("./925.js");
require("./668.js");
require("./933.js");
require("./116.js");
if (_0x4ea7bd.random && _0x4ea7bd.random.getBytes) {
  module.exports = _0x4ea7bd.random;
} else {
  (function (_0x367279) {
    var _0x2c45e9 = {};
    var _0x1f85fb = new Array(4);
    var _0x4dc7ed = _0x4ea7bd.util.createBuffer();
    function _0x1fda43() {
      var _0x5709b5 = _0x4ea7bd.prng.create(_0x2c45e9);
      _0x5709b5.getBytes = function (_0x308163, _0x1b62a5) {
        return _0x5709b5.generate(_0x308163, _0x1b62a5);
      };
      _0x5709b5.getBytesSync = function (_0x267b28) {
        return _0x5709b5.generate(_0x267b28);
      };
      return _0x5709b5;
    }
    _0x2c45e9.formatKey = function (_0x58ed97) {
      var _0x2f28cf = _0x4ea7bd.util.createBuffer(_0x58ed97);
      (_0x58ed97 = new Array(4))[0] = _0x2f28cf.getInt32();
      _0x58ed97[1] = _0x2f28cf.getInt32();
      _0x58ed97[2] = _0x2f28cf.getInt32();
      _0x58ed97[3] = _0x2f28cf.getInt32();
      return _0x4ea7bd.aes._expandKey(_0x58ed97, false);
    };
    _0x2c45e9.formatSeed = function (_0x34400d) {
      var _0x1e180a = _0x4ea7bd.util.createBuffer(_0x34400d);
      (_0x34400d = new Array(4))[0] = _0x1e180a.getInt32();
      _0x34400d[1] = _0x1e180a.getInt32();
      _0x34400d[2] = _0x1e180a.getInt32();
      _0x34400d[3] = _0x1e180a.getInt32();
      return _0x34400d;
    };
    _0x2c45e9.cipher = function (_0x4401be, _0x3a3cd0) {
      _0x4ea7bd.aes._updateBlock(_0x4401be, _0x3a3cd0, _0x1f85fb, false);
      _0x4dc7ed.putInt32(_0x1f85fb[0]);
      _0x4dc7ed.putInt32(_0x1f85fb[1]);
      _0x4dc7ed.putInt32(_0x1f85fb[2]);
      _0x4dc7ed.putInt32(_0x1f85fb[3]);
      return _0x4dc7ed.getBytes();
    };
    _0x2c45e9.increment = function (_0x14c13) {
      ++_0x14c13[3];
      return _0x14c13;
    };
    _0x2c45e9.md = _0x4ea7bd.md.sha256;
    var _0x4dc8ee = _0x1fda43();
    var _0x2ba0a0 = null;
    var _0x290f0d = _0x4ea7bd.util.globalScope;
    var _0x28ef5c = _0x290f0d.crypto || _0x290f0d.msCrypto;
    if (_0x28ef5c && _0x28ef5c.getRandomValues) {
      _0x2ba0a0 = function (_0x1b81c7) {
        return _0x28ef5c.getRandomValues(_0x1b81c7);
      };
    }
    if (_0x4ea7bd.options.usePureJavaScript || !_0x4ea7bd.util.isNodejs && !_0x2ba0a0) {
      if (typeof window != "undefined") {
        window.document;
      }
      _0x4dc8ee.collectInt(+new Date(), 32);
      if (typeof navigator != "undefined") {
        var _0xe67077 = "";
        for (var _0x4de86f in navigator) {
          try {
            if (typeof navigator[_0x4de86f] == "string") {
              _0xe67077 += navigator[_0x4de86f];
            }
          } catch (_0x34aa3d) {}
        }
        _0x4dc8ee.collect(_0xe67077);
        _0xe67077 = null;
      }
      if (_0x367279) {
        _0x367279().mousemove(function (_0x10cfd1) {
          _0x4dc8ee.collectInt(_0x10cfd1.clientX, 16);
          _0x4dc8ee.collectInt(_0x10cfd1.clientY, 16);
        });
        _0x367279().keypress(function (_0x801c40) {
          _0x4dc8ee.collectInt(_0x801c40.charCode, 8);
        });
      }
    }
    if (_0x4ea7bd.random) {
      for (var _0x4de86f in _0x4dc8ee) {
        _0x4ea7bd.random[_0x4de86f] = _0x4dc8ee[_0x4de86f];
      }
    } else {
      _0x4ea7bd.random = _0x4dc8ee;
    }
    _0x4ea7bd.random.createInstance = _0x1fda43;
    module.exports = _0x4ea7bd.random;
  })(typeof jQuery != "undefined" ? jQuery : null);
}