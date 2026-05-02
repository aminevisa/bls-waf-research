var _0x48d4b4 = require("./832.js");
require("./116.js");
require("./563.js");
require("./764.js");
module.exports = _0x48d4b4.kem = _0x48d4b4.kem || {};
var _0xbfc7ba = _0x48d4b4.jsbn.BigInteger;
function _0x214ae7(_0x2ef42c, _0x1bb690, _0x4fb6b8, _0x4238fe) {
  _0x2ef42c.generate = function (_0x658e0e, _0x51f6e7) {
    var _0x1be7b9 = new _0x48d4b4.util.ByteBuffer();
    for (var _0x58bc44 = Math.ceil(_0x51f6e7 / _0x4238fe) + _0x4fb6b8, _0x3a2025 = new _0x48d4b4.util.ByteBuffer(), _0x7eaad9 = _0x4fb6b8; _0x7eaad9 < _0x58bc44; ++_0x7eaad9) {
      _0x3a2025.putInt32(_0x7eaad9);
      _0x1bb690.start();
      _0x1bb690.update(_0x658e0e + _0x3a2025.getBytes());
      var _0x2b8986 = _0x1bb690.digest();
      _0x1be7b9.putBytes(_0x2b8986.getBytes(_0x4238fe));
    }
    _0x1be7b9.truncate(_0x1be7b9.length() - _0x51f6e7);
    return _0x1be7b9.getBytes();
  };
}
_0x48d4b4.kem.rsa = {};
_0x48d4b4.kem.rsa.create = function (_0x1ad1fc, _0x40bdcd) {
  var _0x540491 = (_0x40bdcd = _0x40bdcd || {}).prng || _0x48d4b4.random;
  var _0x35d5f3 = {
    encrypt: function (_0x4a7886, _0x8bbba4) {
      var _0x2039a9;
      var _0x268ffd = Math.ceil(_0x4a7886.n.bitLength() / 8);
      do {
        _0x2039a9 = new _0xbfc7ba(_0x48d4b4.util.bytesToHex(_0x540491.getBytesSync(_0x268ffd)), 16).mod(_0x4a7886.n);
      } while (_0x2039a9.compareTo(_0xbfc7ba.ONE) <= 0);
      var _0x4f263c = _0x268ffd - (_0x2039a9 = _0x48d4b4.util.hexToBytes(_0x2039a9.toString(16))).length;
      if (_0x4f263c > 0) {
        _0x2039a9 = _0x48d4b4.util.fillString(String.fromCharCode(0), _0x4f263c) + _0x2039a9;
      }
      return {
        encapsulation: _0x4a7886.encrypt(_0x2039a9, "NONE"),
        key: _0x1ad1fc.generate(_0x2039a9, _0x8bbba4)
      };
    },
    decrypt: function (_0x23b526, _0x156754, _0x4c8400) {
      var _0x54f411 = _0x23b526.decrypt(_0x156754, "NONE");
      return _0x1ad1fc.generate(_0x54f411, _0x4c8400);
    }
  };
  return _0x35d5f3;
};
_0x48d4b4.kem.kdf1 = function (_0x47ac9c, _0x26043f) {
  _0x214ae7(this, _0x47ac9c, 0, _0x26043f || _0x47ac9c.digestLength);
};
_0x48d4b4.kem.kdf2 = function (_0x2e2ace, _0x3eb52f) {
  _0x214ae7(this, _0x2e2ace, 1, _0x3eb52f || _0x2e2ace.digestLength);
};