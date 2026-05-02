var _0x293b6f = require("./832.js");
require("./991.js");
require("./116.js");
(module.exports = _0x293b6f.hmac = _0x293b6f.hmac || {}).create = function () {
  var _0x585ba9 = null;
  var _0x1c09ae = null;
  var _0x339610 = null;
  var _0x1e99d5 = null;
  var _0x2ee60c = {
    start: function (_0x36e601, _0x55440c) {
      if (_0x36e601 !== null) {
        if (typeof _0x36e601 == "string") {
          if (!((_0x36e601 = _0x36e601.toLowerCase()) in _0x293b6f.md.algorithms)) {
            throw new Error("Unknown hash algorithm \"" + _0x36e601 + "\"");
          }
          _0x1c09ae = _0x293b6f.md.algorithms[_0x36e601].create();
        } else {
          _0x1c09ae = _0x36e601;
        }
      }
      if (_0x55440c === null) {
        _0x55440c = _0x585ba9;
      } else {
        if (typeof _0x55440c == "string") {
          _0x55440c = _0x293b6f.util.createBuffer(_0x55440c);
        } else if (_0x293b6f.util.isArray(_0x55440c)) {
          var _0x413824 = _0x55440c;
          _0x55440c = _0x293b6f.util.createBuffer();
          for (var _0x7c1f39 = 0; _0x7c1f39 < _0x413824.length; ++_0x7c1f39) {
            _0x55440c.putByte(_0x413824[_0x7c1f39]);
          }
        }
        var _0x41a0b0 = _0x55440c.length();
        if (_0x41a0b0 > _0x1c09ae.blockLength) {
          _0x1c09ae.start();
          _0x1c09ae.update(_0x55440c.bytes());
          _0x55440c = _0x1c09ae.digest();
        }
        _0x339610 = _0x293b6f.util.createBuffer();
        _0x1e99d5 = _0x293b6f.util.createBuffer();
        _0x41a0b0 = _0x55440c.length();
        for (_0x7c1f39 = 0; _0x7c1f39 < _0x41a0b0; ++_0x7c1f39) {
          _0x413824 = _0x55440c.at(_0x7c1f39);
          _0x339610.putByte(_0x413824 ^ 54);
          _0x1e99d5.putByte(_0x413824 ^ 92);
        }
        if (_0x41a0b0 < _0x1c09ae.blockLength) {
          _0x413824 = _0x1c09ae.blockLength - _0x41a0b0;
          _0x7c1f39 = 0;
          for (; _0x7c1f39 < _0x413824; ++_0x7c1f39) {
            _0x339610.putByte(54);
            _0x1e99d5.putByte(92);
          }
        }
        _0x585ba9 = _0x55440c;
        _0x339610 = _0x339610.bytes();
        _0x1e99d5 = _0x1e99d5.bytes();
      }
      _0x1c09ae.start();
      _0x1c09ae.update(_0x339610);
    },
    update: function (_0x2a5a78) {
      _0x1c09ae.update(_0x2a5a78);
    },
    getMac: function () {
      var _0x270113 = _0x1c09ae.digest().bytes();
      _0x1c09ae.start();
      _0x1c09ae.update(_0x1e99d5);
      _0x1c09ae.update(_0x270113);
      return _0x1c09ae.digest();
    }
  };
  _0x2ee60c.digest = _0x2ee60c.getMac;
  return _0x2ee60c;
};