var _0x2e4c8e = require("./832.js");
require("./116.js");
require("./563.js");
require("./137.js");
var _0x41116d = module.exports = _0x2e4c8e.pkcs1 = _0x2e4c8e.pkcs1 || {};
function _0x20991c(_0x5e3f6b, _0x43d92d, _0x526ae4) {
  _0x526ae4 ||= _0x2e4c8e.md.sha1.create();
  var _0x3c04c4 = "";
  for (var _0x214597 = Math.ceil(_0x43d92d / _0x526ae4.digestLength), _0x27a349 = 0; _0x27a349 < _0x214597; ++_0x27a349) {
    var _0x3f4375 = String.fromCharCode(_0x27a349 >> 24 & 255, _0x27a349 >> 16 & 255, _0x27a349 >> 8 & 255, _0x27a349 & 255);
    _0x526ae4.start();
    _0x526ae4.update(_0x5e3f6b + _0x3f4375);
    _0x3c04c4 += _0x526ae4.digest().getBytes();
  }
  return _0x3c04c4.substring(0, _0x43d92d);
}
_0x41116d.encode_rsa_oaep = function (_0xe11a19, _0x5a22da, _0x41829f) {
  var _0x4ee5d9;
  var _0xfe4799;
  var _0x2f4bc2;
  var _0x5ab66d;
  if (typeof _0x41829f == "string") {
    _0x4ee5d9 = _0x41829f;
    _0xfe4799 = arguments[3] || undefined;
    _0x2f4bc2 = arguments[4] || undefined;
  } else if (_0x41829f) {
    _0x4ee5d9 = _0x41829f.label || undefined;
    _0xfe4799 = _0x41829f.seed || undefined;
    _0x2f4bc2 = _0x41829f.md || undefined;
    if (_0x41829f.mgf1 && _0x41829f.mgf1.md) {
      _0x5ab66d = _0x41829f.mgf1.md;
    }
  }
  if (_0x2f4bc2) {
    _0x2f4bc2.start();
  } else {
    _0x2f4bc2 = _0x2e4c8e.md.sha1.create();
  }
  _0x5ab66d ||= _0x2f4bc2;
  var _0x5ad349 = Math.ceil(_0xe11a19.n.bitLength() / 8);
  var _0x5d8b56 = _0x5ad349 - _0x2f4bc2.digestLength * 2 - 2;
  if (_0x5a22da.length > _0x5d8b56) {
    (_0x2e1aec = new Error("RSAES-OAEP input message length is too long.")).length = _0x5a22da.length;
    _0x2e1aec.maxLength = _0x5d8b56;
    throw _0x2e1aec;
  }
  _0x4ee5d9 ||= "";
  _0x2f4bc2.update(_0x4ee5d9, "raw");
  var _0x28e436 = _0x2f4bc2.digest();
  var _0x35ada4 = "";
  for (var _0x2a15bd = _0x5d8b56 - _0x5a22da.length, _0x339cd8 = 0; _0x339cd8 < _0x2a15bd; _0x339cd8++) {
    _0x35ada4 += "\0";
  }
  var _0x252ab8 = _0x28e436.getBytes() + _0x35ada4 + "" + _0x5a22da;
  if (_0xfe4799) {
    if (_0xfe4799.length !== _0x2f4bc2.digestLength) {
      var _0x2e1aec;
      (_0x2e1aec = new Error("Invalid RSAES-OAEP seed. The seed length must match the digest length.")).seedLength = _0xfe4799.length;
      _0x2e1aec.digestLength = _0x2f4bc2.digestLength;
      throw _0x2e1aec;
    }
  } else {
    _0xfe4799 = _0x2e4c8e.random.getBytes(_0x2f4bc2.digestLength);
  }
  var _0x51c1ea = _0x20991c(_0xfe4799, _0x5ad349 - _0x2f4bc2.digestLength - 1, _0x5ab66d);
  var _0x598596 = _0x2e4c8e.util.xorBytes(_0x252ab8, _0x51c1ea, _0x252ab8.length);
  var _0x4dc776 = _0x20991c(_0x598596, _0x2f4bc2.digestLength, _0x5ab66d);
  var _0x7698b = _0x2e4c8e.util.xorBytes(_0xfe4799, _0x4dc776, _0xfe4799.length);
  return "\0" + _0x7698b + _0x598596;
};
_0x41116d.decode_rsa_oaep = function (_0x785c80, _0x1476aa, _0xfb8df0) {
  var _0x1e2451;
  var _0x3ea7dc;
  var _0x2ff233;
  if (typeof _0xfb8df0 == "string") {
    _0x1e2451 = _0xfb8df0;
    _0x3ea7dc = arguments[3] || undefined;
  } else if (_0xfb8df0) {
    _0x1e2451 = _0xfb8df0.label || undefined;
    _0x3ea7dc = _0xfb8df0.md || undefined;
    if (_0xfb8df0.mgf1 && _0xfb8df0.mgf1.md) {
      _0x2ff233 = _0xfb8df0.mgf1.md;
    }
  }
  var _0x38f645 = Math.ceil(_0x785c80.n.bitLength() / 8);
  if (_0x1476aa.length !== _0x38f645) {
    (_0x44c639 = new Error("RSAES-OAEP encoded message length is invalid.")).length = _0x1476aa.length;
    _0x44c639.expectedLength = _0x38f645;
    throw _0x44c639;
  }
  if (_0x3ea7dc === undefined) {
    _0x3ea7dc = _0x2e4c8e.md.sha1.create();
  } else {
    _0x3ea7dc.start();
  }
  _0x2ff233 ||= _0x3ea7dc;
  if (_0x38f645 < _0x3ea7dc.digestLength * 2 + 2) {
    throw new Error("RSAES-OAEP key is too short for the hash function.");
  }
  _0x1e2451 ||= "";
  _0x3ea7dc.update(_0x1e2451, "raw");
  var _0x5843f9 = _0x3ea7dc.digest().getBytes();
  var _0x370788 = _0x1476aa.charAt(0);
  var _0x1019bd = _0x1476aa.substring(1, _0x3ea7dc.digestLength + 1);
  var _0x198a54 = _0x1476aa.substring(1 + _0x3ea7dc.digestLength);
  var _0x25665f = _0x20991c(_0x198a54, _0x3ea7dc.digestLength, _0x2ff233);
  var _0x5bb324 = _0x2e4c8e.util.xorBytes(_0x1019bd, _0x25665f, _0x1019bd.length);
  var _0x33330e = _0x20991c(_0x5bb324, _0x38f645 - _0x3ea7dc.digestLength - 1, _0x2ff233);
  var _0x1ebbb9 = _0x2e4c8e.util.xorBytes(_0x198a54, _0x33330e, _0x198a54.length);
  var _0x4eedff = _0x1ebbb9.substring(0, _0x3ea7dc.digestLength);
  var _0x44c639 = _0x370788 !== "\0";
  for (var _0x183420 = 0; _0x183420 < _0x3ea7dc.digestLength; ++_0x183420) {
    _0x44c639 |= _0x5843f9.charAt(_0x183420) !== _0x4eedff.charAt(_0x183420);
  }
  var _0x3115f0 = 1;
  var _0x334232 = _0x3ea7dc.digestLength;
  for (var _0x1ecc15 = _0x3ea7dc.digestLength; _0x1ecc15 < _0x1ebbb9.length; _0x1ecc15++) {
    var _0x1c9e9a = _0x1ebbb9.charCodeAt(_0x1ecc15);
    var _0x592897 = _0x1c9e9a & 1 ^ 1;
    var _0x43bb2f = _0x3115f0 ? 65534 : 0;
    _0x44c639 |= _0x1c9e9a & _0x43bb2f;
    _0x334232 += _0x3115f0 &= _0x592897;
  }
  if (_0x44c639 || _0x1ebbb9.charCodeAt(_0x334232) !== 1) {
    throw new Error("Invalid RSAES-OAEP padding.");
  }
  return _0x1ebbb9.substring(_0x334232 + 1);
};