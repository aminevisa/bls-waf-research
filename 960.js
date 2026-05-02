var _0xb009c7 = require("./832.js");
require("./607.js");
require("./991.js");
require("./116.js");
var _0x18cc2f;
var _0x808c8d = _0xb009c7.pkcs5 = _0xb009c7.pkcs5 || {};
if (_0xb009c7.util.isNodejs && !_0xb009c7.options.usePureJavaScript) {
  _0x18cc2f = require("./819.js");
}
module.exports = _0xb009c7.pbkdf2 = _0x808c8d.pbkdf2 = function (_0x5abdf1, _0x313cb7, _0x273cd5, _0x4af588, _0x18860e, _0x4f46ad) {
  if (typeof _0x18860e == "function") {
    _0x4f46ad = _0x18860e;
    _0x18860e = null;
  }
  if (_0xb009c7.util.isNodejs && !_0xb009c7.options.usePureJavaScript && _0x18cc2f.pbkdf2 && (_0x18860e === null || typeof _0x18860e != "object") && (_0x18cc2f.pbkdf2Sync.length > 4 || !_0x18860e || _0x18860e === "sha1")) {
    if (typeof _0x18860e != "string") {
      _0x18860e = "sha1";
    }
    _0x5abdf1 = Buffer.from(_0x5abdf1, "binary");
    _0x313cb7 = Buffer.from(_0x313cb7, "binary");
    if (_0x4f46ad) {
      if (_0x18cc2f.pbkdf2Sync.length === 4) {
        return _0x18cc2f.pbkdf2(_0x5abdf1, _0x313cb7, _0x273cd5, _0x4af588, function (_0x266027, _0x34fd21) {
          if (_0x266027) {
            return _0x4f46ad(_0x266027);
          }
          _0x4f46ad(null, _0x34fd21.toString("binary"));
        });
      } else {
        return _0x18cc2f.pbkdf2(_0x5abdf1, _0x313cb7, _0x273cd5, _0x4af588, _0x18860e, function (_0x209815, _0x56f14c) {
          if (_0x209815) {
            return _0x4f46ad(_0x209815);
          }
          _0x4f46ad(null, _0x56f14c.toString("binary"));
        });
      }
    } else if (_0x18cc2f.pbkdf2Sync.length === 4) {
      return _0x18cc2f.pbkdf2Sync(_0x5abdf1, _0x313cb7, _0x273cd5, _0x4af588).toString("binary");
    } else {
      return _0x18cc2f.pbkdf2Sync(_0x5abdf1, _0x313cb7, _0x273cd5, _0x4af588, _0x18860e).toString("binary");
    }
  }
  if (_0x18860e == null) {
    _0x18860e = "sha1";
  }
  if (typeof _0x18860e == "string") {
    if (!(_0x18860e in _0xb009c7.md.algorithms)) {
      throw new Error("Unknown hash algorithm: " + _0x18860e);
    }
    _0x18860e = _0xb009c7.md[_0x18860e].create();
  }
  var _0x1090ec = _0x18860e.digestLength;
  if (_0x4af588 > _0x1090ec * 4294967295) {
    var _0x534778 = new Error("Derived key is too long.");
    if (_0x4f46ad) {
      return _0x4f46ad(_0x534778);
    }
    throw _0x534778;
  }
  var _0x28cc2e = Math.ceil(_0x4af588 / _0x1090ec);
  var _0x5ab772 = _0x4af588 - (_0x28cc2e - 1) * _0x1090ec;
  var _0x466bc1 = _0xb009c7.hmac.create();
  _0x466bc1.start(_0x18860e, _0x5abdf1);
  var _0x1b1ac4;
  var _0x3b8acb;
  var _0x2bfd3d;
  var _0x486179 = "";
  if (!_0x4f46ad) {
    for (var _0x248b87 = 1; _0x248b87 <= _0x28cc2e; ++_0x248b87) {
      _0x466bc1.start(null, null);
      _0x466bc1.update(_0x313cb7);
      _0x466bc1.update(_0xb009c7.util.int32ToBytes(_0x248b87));
      _0x1b1ac4 = _0x2bfd3d = _0x466bc1.digest().getBytes();
      for (var _0x5a95c6 = 2; _0x5a95c6 <= _0x273cd5; ++_0x5a95c6) {
        _0x466bc1.start(null, null);
        _0x466bc1.update(_0x2bfd3d);
        _0x3b8acb = _0x466bc1.digest().getBytes();
        _0x1b1ac4 = _0xb009c7.util.xorBytes(_0x1b1ac4, _0x3b8acb, _0x1090ec);
        _0x2bfd3d = _0x3b8acb;
      }
      _0x486179 += _0x248b87 < _0x28cc2e ? _0x1b1ac4 : _0x1b1ac4.substr(0, _0x5ab772);
    }
    return _0x486179;
  }
  _0x248b87 = 1;
  function _0x4ad958() {
    if (_0x248b87 > _0x28cc2e) {
      return _0x4f46ad(null, _0x486179);
    }
    _0x466bc1.start(null, null);
    _0x466bc1.update(_0x313cb7);
    _0x466bc1.update(_0xb009c7.util.int32ToBytes(_0x248b87));
    _0x1b1ac4 = _0x2bfd3d = _0x466bc1.digest().getBytes();
    _0x5a95c6 = 2;
    _0x5b8b96();
  }
  function _0x5b8b96() {
    if (_0x5a95c6 <= _0x273cd5) {
      _0x466bc1.start(null, null);
      _0x466bc1.update(_0x2bfd3d);
      _0x3b8acb = _0x466bc1.digest().getBytes();
      _0x1b1ac4 = _0xb009c7.util.xorBytes(_0x1b1ac4, _0x3b8acb, _0x1090ec);
      _0x2bfd3d = _0x3b8acb;
      ++_0x5a95c6;
      return _0xb009c7.util.setImmediate(_0x5b8b96);
    }
    _0x486179 += _0x248b87 < _0x28cc2e ? _0x1b1ac4 : _0x1b1ac4.substr(0, _0x5ab772);
    ++_0x248b87;
    _0x4ad958();
  }
  _0x4ad958();
};