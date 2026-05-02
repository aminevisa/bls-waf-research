var _0x2d90a9 = require("./832.js");
require("./116.js");
_0x2d90a9.mgf = _0x2d90a9.mgf || {};
(module.exports = _0x2d90a9.mgf.mgf1 = _0x2d90a9.mgf1 = _0x2d90a9.mgf1 || {}).create = function (_0x5e68f6) {
  return {
    generate: function (_0xcc3fa5, _0x5bfafa) {
      var _0x5590b1 = new _0x2d90a9.util.ByteBuffer();
      for (var _0x2b1b02 = Math.ceil(_0x5bfafa / _0x5e68f6.digestLength), _0x3c1925 = 0; _0x3c1925 < _0x2b1b02; _0x3c1925++) {
        var _0x5af10a = new _0x2d90a9.util.ByteBuffer();
        _0x5af10a.putInt32(_0x3c1925);
        _0x5e68f6.start();
        _0x5e68f6.update(_0xcc3fa5 + _0x5af10a.getBytes());
        _0x5590b1.putBuffer(_0x5e68f6.digest());
      }
      _0x5590b1.truncate(_0x5590b1.length() - _0x5bfafa);
      return _0x5590b1.getBytes();
    }
  };
};