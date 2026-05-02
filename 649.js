var _0x2b07db = require("./832.js");
require("./116.js");
module.exports = _0x2b07db.cipher = _0x2b07db.cipher || {};
_0x2b07db.cipher.algorithms = _0x2b07db.cipher.algorithms || {};
_0x2b07db.cipher.createCipher = function (_0x4a15ad, _0x368907) {
  var _0x51ce50 = _0x4a15ad;
  if (typeof _0x51ce50 == "string" && (_0x51ce50 = _0x2b07db.cipher.getAlgorithm(_0x51ce50))) {
    _0x51ce50 = _0x51ce50();
  }
  if (!_0x51ce50) {
    throw new Error("Unsupported algorithm: " + _0x4a15ad);
  }
  return new _0x2b07db.cipher.BlockCipher({
    algorithm: _0x51ce50,
    key: _0x368907,
    decrypt: false
  });
};
_0x2b07db.cipher.createDecipher = function (_0x417c9a, _0x28f760) {
  var _0x1a6ed9 = _0x417c9a;
  if (typeof _0x1a6ed9 == "string" && (_0x1a6ed9 = _0x2b07db.cipher.getAlgorithm(_0x1a6ed9))) {
    _0x1a6ed9 = _0x1a6ed9();
  }
  if (!_0x1a6ed9) {
    throw new Error("Unsupported algorithm: " + _0x417c9a);
  }
  return new _0x2b07db.cipher.BlockCipher({
    algorithm: _0x1a6ed9,
    key: _0x28f760,
    decrypt: true
  });
};
_0x2b07db.cipher.registerAlgorithm = function (_0x10995c, _0x44ad26) {
  _0x10995c = _0x10995c.toUpperCase();
  _0x2b07db.cipher.algorithms[_0x10995c] = _0x44ad26;
};
_0x2b07db.cipher.getAlgorithm = function (_0x13a8b9) {
  if ((_0x13a8b9 = _0x13a8b9.toUpperCase()) in _0x2b07db.cipher.algorithms) {
    return _0x2b07db.cipher.algorithms[_0x13a8b9];
  } else {
    return null;
  }
};
var _0x18d710 = _0x2b07db.cipher.BlockCipher = function (_0xbfd1c1) {
  this.algorithm = _0xbfd1c1.algorithm;
  this.mode = this.algorithm.mode;
  this.blockSize = this.mode.blockSize;
  this._finish = false;
  this._input = null;
  this.output = null;
  this._op = _0xbfd1c1.decrypt ? this.mode.decrypt : this.mode.encrypt;
  this._decrypt = _0xbfd1c1.decrypt;
  this.algorithm.initialize(_0xbfd1c1);
};
_0x18d710.prototype.start = function (_0x2f29fa) {
  _0x2f29fa = _0x2f29fa || {};
  var _0x389427 = {};
  for (var _0x260d78 in _0x2f29fa) {
    _0x389427[_0x260d78] = _0x2f29fa[_0x260d78];
  }
  _0x389427.decrypt = this._decrypt;
  this._finish = false;
  this._input = _0x2b07db.util.createBuffer();
  this.output = _0x2f29fa.output || _0x2b07db.util.createBuffer();
  this.mode.start(_0x389427);
};
_0x18d710.prototype.update = function (_0x19ac51) {
  for (_0x19ac51 && this._input.putBuffer(_0x19ac51); !this._op.call(this.mode, this._input, this.output, this._finish) && !this._finish;);
  this._input.compact();
};
_0x18d710.prototype.finish = function (_0x4e0f41) {
  if (!!_0x4e0f41 && (this.mode.name === "ECB" || this.mode.name === "CBC")) {
    this.mode.pad = function (_0x5b13eb) {
      return _0x4e0f41(this.blockSize, _0x5b13eb, false);
    };
    this.mode.unpad = function (_0x5afa8b) {
      return _0x4e0f41(this.blockSize, _0x5afa8b, true);
    };
  }
  var _0x1bed90 = {
    decrypt: this._decrypt
  };
  _0x1bed90.overflow = this._input.length() % this.blockSize;
  return (!!this._decrypt || !this.mode.pad || !!this.mode.pad(this._input, _0x1bed90)) && (this._finish = true, this.update(), (!this._decrypt || !this.mode.unpad || !!this.mode.unpad(this.output, _0x1bed90)) && (!this.mode.afterFinish || !!this.mode.afterFinish(this.output, _0x1bed90)));
};