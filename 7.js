var _0x8a9568 = require("./832.js");
require("./563.js");
require("./116.js");
(module.exports = _0x8a9568.pss = _0x8a9568.pss || {}).create = function (_0xb7f227) {
  if (arguments.length === 3) {
    _0xb7f227 = {
      md: arguments[0],
      mgf: arguments[1],
      saltLength: arguments[2]
    };
  }
  var _0x5d0374;
  var _0x3b6a2b = _0xb7f227.md;
  var _0xf8ce2e = _0xb7f227.mgf;
  var _0x214b6f = _0x3b6a2b.digestLength;
  var _0x48bae1 = _0xb7f227.salt || null;
  if (typeof _0x48bae1 == "string") {
    _0x48bae1 = _0x8a9568.util.createBuffer(_0x48bae1);
  }
  if ("saltLength" in _0xb7f227) {
    _0x5d0374 = _0xb7f227.saltLength;
  } else {
    if (_0x48bae1 === null) {
      throw new Error("Salt length not specified or specific salt not given.");
    }
    _0x5d0374 = _0x48bae1.length();
  }
  if (_0x48bae1 !== null && _0x48bae1.length() !== _0x5d0374) {
    throw new Error("Given salt length does not match length of given salt.");
  }
  var _0x3f0826 = _0xb7f227.prng || _0x8a9568.random;
  var _0x47206b = {
    encode: function (_0x3e6f2b, _0x33adba) {
      var _0x50671b;
      var _0x8900d0;
      var _0x4ea7a7 = _0x33adba - 1;
      var _0x5ee0b8 = Math.ceil(_0x4ea7a7 / 8);
      var _0x2dfc88 = _0x3e6f2b.digest().getBytes();
      if (_0x5ee0b8 < _0x214b6f + _0x5d0374 + 2) {
        throw new Error("Message is too long to encrypt.");
      }
      _0x8900d0 = _0x48bae1 === null ? _0x3f0826.getBytesSync(_0x5d0374) : _0x48bae1.bytes();
      var _0x3cf75a = new _0x8a9568.util.ByteBuffer();
      _0x3cf75a.fillWithByte(0, 8);
      _0x3cf75a.putBytes(_0x2dfc88);
      _0x3cf75a.putBytes(_0x8900d0);
      _0x3b6a2b.start();
      _0x3b6a2b.update(_0x3cf75a.getBytes());
      var _0x10842d = _0x3b6a2b.digest().getBytes();
      var _0x157a7e = new _0x8a9568.util.ByteBuffer();
      _0x157a7e.fillWithByte(0, _0x5ee0b8 - _0x5d0374 - _0x214b6f - 2);
      _0x157a7e.putByte(1);
      _0x157a7e.putBytes(_0x8900d0);
      var _0x7b4bde = _0x157a7e.getBytes();
      var _0xdb4426 = _0x5ee0b8 - _0x214b6f - 1;
      var _0x3479ab = _0xf8ce2e.generate(_0x10842d, _0xdb4426);
      var _0x37c4b4 = "";
      for (_0x50671b = 0; _0x50671b < _0xdb4426; _0x50671b++) {
        _0x37c4b4 += String.fromCharCode(_0x7b4bde.charCodeAt(_0x50671b) ^ _0x3479ab.charCodeAt(_0x50671b));
      }
      var _0x13ff92 = 65280 >> _0x5ee0b8 * 8 - _0x4ea7a7 & 255;
      return (_0x37c4b4 = String.fromCharCode(_0x37c4b4.charCodeAt(0) & ~_0x13ff92) + _0x37c4b4.substr(1)) + _0x10842d + String.fromCharCode(188);
    },
    verify: function (_0x18d0d8, _0x1feb08, _0x1ffc78) {
      var _0x436f83;
      var _0x339fff = _0x1ffc78 - 1;
      var _0x5aa8be = Math.ceil(_0x339fff / 8);
      _0x1feb08 = _0x1feb08.substr(-_0x5aa8be);
      if (_0x5aa8be < _0x214b6f + _0x5d0374 + 2) {
        throw new Error("Inconsistent parameters to PSS signature verification.");
      }
      if (_0x1feb08.charCodeAt(_0x5aa8be - 1) !== 188) {
        throw new Error("Encoded message does not end in 0xBC.");
      }
      var _0x14a917 = _0x5aa8be - _0x214b6f - 1;
      var _0x115100 = _0x1feb08.substr(0, _0x14a917);
      var _0x32156b = _0x1feb08.substr(_0x14a917, _0x214b6f);
      var _0x122b75 = 65280 >> _0x5aa8be * 8 - _0x339fff & 255;
      if ((_0x115100.charCodeAt(0) & _0x122b75) != 0) {
        throw new Error("Bits beyond keysize not zero as expected.");
      }
      var _0xf75444 = _0xf8ce2e.generate(_0x32156b, _0x14a917);
      var _0x5b82cf = "";
      for (_0x436f83 = 0; _0x436f83 < _0x14a917; _0x436f83++) {
        _0x5b82cf += String.fromCharCode(_0x115100.charCodeAt(_0x436f83) ^ _0xf75444.charCodeAt(_0x436f83));
      }
      _0x5b82cf = String.fromCharCode(_0x5b82cf.charCodeAt(0) & ~_0x122b75) + _0x5b82cf.substr(1);
      var _0x11b54f = _0x5aa8be - _0x214b6f - _0x5d0374 - 2;
      for (_0x436f83 = 0; _0x436f83 < _0x11b54f; _0x436f83++) {
        if (_0x5b82cf.charCodeAt(_0x436f83) !== 0) {
          throw new Error("Leftmost octets not zero as expected");
        }
      }
      if (_0x5b82cf.charCodeAt(_0x11b54f) !== 1) {
        throw new Error("Inconsistent PSS signature, 0x01 marker not found");
      }
      var _0x108521 = _0x5b82cf.substr(-_0x5d0374);
      var _0x2ca4b7 = new _0x8a9568.util.ByteBuffer();
      _0x2ca4b7.fillWithByte(0, 8);
      _0x2ca4b7.putBytes(_0x18d0d8);
      _0x2ca4b7.putBytes(_0x108521);
      _0x3b6a2b.start();
      _0x3b6a2b.update(_0x2ca4b7.getBytes());
      return _0x32156b === _0x3b6a2b.digest().getBytes();
    }
  };
  return _0x47206b;
};