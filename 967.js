var _0x1b2928 = require("./832.js");
require("./116.js");
_0x1b2928.cipher = _0x1b2928.cipher || {};
var _0x5ea3ae = module.exports = _0x1b2928.cipher.modes = _0x1b2928.cipher.modes || {};
function _0x5d0e06(_0x1b6901, _0x384de5) {
  if (typeof _0x1b6901 == "string") {
    _0x1b6901 = _0x1b2928.util.createBuffer(_0x1b6901);
  }
  if (_0x1b2928.util.isArray(_0x1b6901) && _0x1b6901.length > 4) {
    var _0x19aa66 = _0x1b6901;
    _0x1b6901 = _0x1b2928.util.createBuffer();
    for (var _0x1dec1c = 0; _0x1dec1c < _0x19aa66.length; ++_0x1dec1c) {
      _0x1b6901.putByte(_0x19aa66[_0x1dec1c]);
    }
  }
  if (_0x1b6901.length() < _0x384de5) {
    throw new Error("Invalid IV length; got " + _0x1b6901.length() + " bytes and expected " + _0x384de5 + " bytes.");
  }
  if (!_0x1b2928.util.isArray(_0x1b6901)) {
    var _0x287f94 = [];
    var _0x1fdb29 = _0x384de5 / 4;
    for (_0x1dec1c = 0; _0x1dec1c < _0x1fdb29; ++_0x1dec1c) {
      _0x287f94.push(_0x1b6901.getInt32());
    }
    _0x1b6901 = _0x287f94;
  }
  return _0x1b6901;
}
function _0x547a24(_0x4e548b) {
  _0x4e548b[_0x4e548b.length - 1] = _0x4e548b[_0x4e548b.length - 1] + 1 & -1;
}
function _0xfb2d75(_0x25c18b) {
  return [_0x25c18b / 4294967296 | 0, _0x25c18b & -1];
}
_0x5ea3ae.ecb = function (_0x313135) {
  _0x313135 = _0x313135 || {};
  this.name = "ECB";
  this.cipher = _0x313135.cipher;
  this.blockSize = _0x313135.blockSize || 16;
  this._ints = this.blockSize / 4;
  this._inBlock = new Array(this._ints);
  this._outBlock = new Array(this._ints);
};
_0x5ea3ae.ecb.prototype.start = function (_0x32aaaf) {};
_0x5ea3ae.ecb.prototype.encrypt = function (_0x5ae2b5, _0x4fd136, _0x3d2f7b) {
  if (_0x5ae2b5.length() < this.blockSize && (!_0x3d2f7b || !(_0x5ae2b5.length() > 0))) {
    return true;
  }
  for (var _0xf154fa = 0; _0xf154fa < this._ints; ++_0xf154fa) {
    this._inBlock[_0xf154fa] = _0x5ae2b5.getInt32();
  }
  this.cipher.encrypt(this._inBlock, this._outBlock);
  for (_0xf154fa = 0; _0xf154fa < this._ints; ++_0xf154fa) {
    _0x4fd136.putInt32(this._outBlock[_0xf154fa]);
  }
};
_0x5ea3ae.ecb.prototype.decrypt = function (_0x5bd754, _0x5359cf, _0x1e03a1) {
  if (_0x5bd754.length() < this.blockSize && (!_0x1e03a1 || !(_0x5bd754.length() > 0))) {
    return true;
  }
  for (var _0x2bff10 = 0; _0x2bff10 < this._ints; ++_0x2bff10) {
    this._inBlock[_0x2bff10] = _0x5bd754.getInt32();
  }
  this.cipher.decrypt(this._inBlock, this._outBlock);
  for (_0x2bff10 = 0; _0x2bff10 < this._ints; ++_0x2bff10) {
    _0x5359cf.putInt32(this._outBlock[_0x2bff10]);
  }
};
_0x5ea3ae.ecb.prototype.pad = function (_0xcffa62, _0x44a879) {
  var _0x4ff5bd = _0xcffa62.length() === this.blockSize ? this.blockSize : this.blockSize - _0xcffa62.length();
  _0xcffa62.fillWithByte(_0x4ff5bd, _0x4ff5bd);
  return true;
};
_0x5ea3ae.ecb.prototype.unpad = function (_0x276741, _0x4df7dd) {
  if (_0x4df7dd.overflow > 0) {
    return false;
  }
  var _0x489c6b = _0x276741.length();
  var _0x50c2aa = _0x276741.at(_0x489c6b - 1);
  return !(_0x50c2aa > this.blockSize << 2) && (_0x276741.truncate(_0x50c2aa), true);
};
_0x5ea3ae.cbc = function (_0x838183) {
  _0x838183 = _0x838183 || {};
  this.name = "CBC";
  this.cipher = _0x838183.cipher;
  this.blockSize = _0x838183.blockSize || 16;
  this._ints = this.blockSize / 4;
  this._inBlock = new Array(this._ints);
  this._outBlock = new Array(this._ints);
};
_0x5ea3ae.cbc.prototype.start = function (_0x4cdd77) {
  if (_0x4cdd77.iv === null) {
    if (!this._prev) {
      throw new Error("Invalid IV parameter.");
    }
    this._iv = this._prev.slice(0);
  } else {
    if (!("iv" in _0x4cdd77)) {
      throw new Error("Invalid IV parameter.");
    }
    this._iv = _0x5d0e06(_0x4cdd77.iv, this.blockSize);
    this._prev = this._iv.slice(0);
  }
};
_0x5ea3ae.cbc.prototype.encrypt = function (_0x4ec5dc, _0x251cd0, _0xf5d4c) {
  if (_0x4ec5dc.length() < this.blockSize && (!_0xf5d4c || !(_0x4ec5dc.length() > 0))) {
    return true;
  }
  for (var _0x339f53 = 0; _0x339f53 < this._ints; ++_0x339f53) {
    this._inBlock[_0x339f53] = this._prev[_0x339f53] ^ _0x4ec5dc.getInt32();
  }
  this.cipher.encrypt(this._inBlock, this._outBlock);
  for (_0x339f53 = 0; _0x339f53 < this._ints; ++_0x339f53) {
    _0x251cd0.putInt32(this._outBlock[_0x339f53]);
  }
  this._prev = this._outBlock;
};
_0x5ea3ae.cbc.prototype.decrypt = function (_0x5d9ffe, _0x491ba7, _0x252b1a) {
  if (_0x5d9ffe.length() < this.blockSize && (!_0x252b1a || !(_0x5d9ffe.length() > 0))) {
    return true;
  }
  for (var _0x513440 = 0; _0x513440 < this._ints; ++_0x513440) {
    this._inBlock[_0x513440] = _0x5d9ffe.getInt32();
  }
  this.cipher.decrypt(this._inBlock, this._outBlock);
  for (_0x513440 = 0; _0x513440 < this._ints; ++_0x513440) {
    _0x491ba7.putInt32(this._prev[_0x513440] ^ this._outBlock[_0x513440]);
  }
  this._prev = this._inBlock.slice(0);
};
_0x5ea3ae.cbc.prototype.pad = function (_0xb83fd2, _0x1fdb7d) {
  var _0x38869d = _0xb83fd2.length() === this.blockSize ? this.blockSize : this.blockSize - _0xb83fd2.length();
  _0xb83fd2.fillWithByte(_0x38869d, _0x38869d);
  return true;
};
_0x5ea3ae.cbc.prototype.unpad = function (_0xcb9f5a, _0x17d05c) {
  if (_0x17d05c.overflow > 0) {
    return false;
  }
  var _0xec721c = _0xcb9f5a.length();
  var _0x1a0b28 = _0xcb9f5a.at(_0xec721c - 1);
  return !(_0x1a0b28 > this.blockSize << 2) && (_0xcb9f5a.truncate(_0x1a0b28), true);
};
_0x5ea3ae.cfb = function (_0x4f74cf) {
  _0x4f74cf = _0x4f74cf || {};
  this.name = "CFB";
  this.cipher = _0x4f74cf.cipher;
  this.blockSize = _0x4f74cf.blockSize || 16;
  this._ints = this.blockSize / 4;
  this._inBlock = null;
  this._outBlock = new Array(this._ints);
  this._partialBlock = new Array(this._ints);
  this._partialOutput = _0x1b2928.util.createBuffer();
  this._partialBytes = 0;
};
_0x5ea3ae.cfb.prototype.start = function (_0x1db4c4) {
  if (!("iv" in _0x1db4c4)) {
    throw new Error("Invalid IV parameter.");
  }
  this._iv = _0x5d0e06(_0x1db4c4.iv, this.blockSize);
  this._inBlock = this._iv.slice(0);
  this._partialBytes = 0;
};
_0x5ea3ae.cfb.prototype.encrypt = function (_0x36e32b, _0xc41b28, _0x2a6738) {
  var _0x5b2c57 = _0x36e32b.length();
  if (_0x5b2c57 === 0) {
    return true;
  }
  this.cipher.encrypt(this._inBlock, this._outBlock);
  if (this._partialBytes === 0 && _0x5b2c57 >= this.blockSize) {
    for (var _0x760040 = 0; _0x760040 < this._ints; ++_0x760040) {
      this._inBlock[_0x760040] = _0x36e32b.getInt32() ^ this._outBlock[_0x760040];
      _0xc41b28.putInt32(this._inBlock[_0x760040]);
    }
  } else {
    var _0x5e8962 = (this.blockSize - _0x5b2c57) % this.blockSize;
    if (_0x5e8962 > 0) {
      _0x5e8962 = this.blockSize - _0x5e8962;
    }
    this._partialOutput.clear();
    for (_0x760040 = 0; _0x760040 < this._ints; ++_0x760040) {
      this._partialBlock[_0x760040] = _0x36e32b.getInt32() ^ this._outBlock[_0x760040];
      this._partialOutput.putInt32(this._partialBlock[_0x760040]);
    }
    if (_0x5e8962 > 0) {
      _0x36e32b.read -= this.blockSize;
    } else {
      for (_0x760040 = 0; _0x760040 < this._ints; ++_0x760040) {
        this._inBlock[_0x760040] = this._partialBlock[_0x760040];
      }
    }
    if (this._partialBytes > 0) {
      this._partialOutput.getBytes(this._partialBytes);
    }
    if (_0x5e8962 > 0 && !_0x2a6738) {
      _0xc41b28.putBytes(this._partialOutput.getBytes(_0x5e8962 - this._partialBytes));
      this._partialBytes = _0x5e8962;
      return true;
    }
    _0xc41b28.putBytes(this._partialOutput.getBytes(_0x5b2c57 - this._partialBytes));
    this._partialBytes = 0;
  }
};
_0x5ea3ae.cfb.prototype.decrypt = function (_0x1cce0e, _0x3c7241, _0x46a845) {
  var _0x5b9645 = _0x1cce0e.length();
  if (_0x5b9645 === 0) {
    return true;
  }
  this.cipher.encrypt(this._inBlock, this._outBlock);
  if (this._partialBytes === 0 && _0x5b9645 >= this.blockSize) {
    for (var _0x37c02e = 0; _0x37c02e < this._ints; ++_0x37c02e) {
      this._inBlock[_0x37c02e] = _0x1cce0e.getInt32();
      _0x3c7241.putInt32(this._inBlock[_0x37c02e] ^ this._outBlock[_0x37c02e]);
    }
  } else {
    var _0x52935c = (this.blockSize - _0x5b9645) % this.blockSize;
    if (_0x52935c > 0) {
      _0x52935c = this.blockSize - _0x52935c;
    }
    this._partialOutput.clear();
    for (_0x37c02e = 0; _0x37c02e < this._ints; ++_0x37c02e) {
      this._partialBlock[_0x37c02e] = _0x1cce0e.getInt32();
      this._partialOutput.putInt32(this._partialBlock[_0x37c02e] ^ this._outBlock[_0x37c02e]);
    }
    if (_0x52935c > 0) {
      _0x1cce0e.read -= this.blockSize;
    } else {
      for (_0x37c02e = 0; _0x37c02e < this._ints; ++_0x37c02e) {
        this._inBlock[_0x37c02e] = this._partialBlock[_0x37c02e];
      }
    }
    if (this._partialBytes > 0) {
      this._partialOutput.getBytes(this._partialBytes);
    }
    if (_0x52935c > 0 && !_0x46a845) {
      _0x3c7241.putBytes(this._partialOutput.getBytes(_0x52935c - this._partialBytes));
      this._partialBytes = _0x52935c;
      return true;
    }
    _0x3c7241.putBytes(this._partialOutput.getBytes(_0x5b9645 - this._partialBytes));
    this._partialBytes = 0;
  }
};
_0x5ea3ae.ofb = function (_0x2a3a65) {
  _0x2a3a65 = _0x2a3a65 || {};
  this.name = "OFB";
  this.cipher = _0x2a3a65.cipher;
  this.blockSize = _0x2a3a65.blockSize || 16;
  this._ints = this.blockSize / 4;
  this._inBlock = null;
  this._outBlock = new Array(this._ints);
  this._partialOutput = _0x1b2928.util.createBuffer();
  this._partialBytes = 0;
};
_0x5ea3ae.ofb.prototype.start = function (_0x5a9d2a) {
  if (!("iv" in _0x5a9d2a)) {
    throw new Error("Invalid IV parameter.");
  }
  this._iv = _0x5d0e06(_0x5a9d2a.iv, this.blockSize);
  this._inBlock = this._iv.slice(0);
  this._partialBytes = 0;
};
_0x5ea3ae.ofb.prototype.encrypt = function (_0x2454a1, _0x3b0402, _0x5947cc) {
  var _0x2874e0 = _0x2454a1.length();
  if (_0x2454a1.length() === 0) {
    return true;
  }
  this.cipher.encrypt(this._inBlock, this._outBlock);
  if (this._partialBytes === 0 && _0x2874e0 >= this.blockSize) {
    for (var _0x46df1c = 0; _0x46df1c < this._ints; ++_0x46df1c) {
      _0x3b0402.putInt32(_0x2454a1.getInt32() ^ this._outBlock[_0x46df1c]);
      this._inBlock[_0x46df1c] = this._outBlock[_0x46df1c];
    }
  } else {
    var _0x1532aa = (this.blockSize - _0x2874e0) % this.blockSize;
    if (_0x1532aa > 0) {
      _0x1532aa = this.blockSize - _0x1532aa;
    }
    this._partialOutput.clear();
    for (_0x46df1c = 0; _0x46df1c < this._ints; ++_0x46df1c) {
      this._partialOutput.putInt32(_0x2454a1.getInt32() ^ this._outBlock[_0x46df1c]);
    }
    if (_0x1532aa > 0) {
      _0x2454a1.read -= this.blockSize;
    } else {
      for (_0x46df1c = 0; _0x46df1c < this._ints; ++_0x46df1c) {
        this._inBlock[_0x46df1c] = this._outBlock[_0x46df1c];
      }
    }
    if (this._partialBytes > 0) {
      this._partialOutput.getBytes(this._partialBytes);
    }
    if (_0x1532aa > 0 && !_0x5947cc) {
      _0x3b0402.putBytes(this._partialOutput.getBytes(_0x1532aa - this._partialBytes));
      this._partialBytes = _0x1532aa;
      return true;
    }
    _0x3b0402.putBytes(this._partialOutput.getBytes(_0x2874e0 - this._partialBytes));
    this._partialBytes = 0;
  }
};
_0x5ea3ae.ofb.prototype.decrypt = _0x5ea3ae.ofb.prototype.encrypt;
_0x5ea3ae.ctr = function (_0x2a66e0) {
  _0x2a66e0 = _0x2a66e0 || {};
  this.name = "CTR";
  this.cipher = _0x2a66e0.cipher;
  this.blockSize = _0x2a66e0.blockSize || 16;
  this._ints = this.blockSize / 4;
  this._inBlock = null;
  this._outBlock = new Array(this._ints);
  this._partialOutput = _0x1b2928.util.createBuffer();
  this._partialBytes = 0;
};
_0x5ea3ae.ctr.prototype.start = function (_0x3849a3) {
  if (!("iv" in _0x3849a3)) {
    throw new Error("Invalid IV parameter.");
  }
  this._iv = _0x5d0e06(_0x3849a3.iv, this.blockSize);
  this._inBlock = this._iv.slice(0);
  this._partialBytes = 0;
};
_0x5ea3ae.ctr.prototype.encrypt = function (_0x3e63c5, _0x54feb5, _0x233119) {
  var _0x486a48 = _0x3e63c5.length();
  if (_0x486a48 === 0) {
    return true;
  }
  this.cipher.encrypt(this._inBlock, this._outBlock);
  if (this._partialBytes === 0 && _0x486a48 >= this.blockSize) {
    for (var _0x2bd4da = 0; _0x2bd4da < this._ints; ++_0x2bd4da) {
      _0x54feb5.putInt32(_0x3e63c5.getInt32() ^ this._outBlock[_0x2bd4da]);
    }
  } else {
    var _0x1e43fd = (this.blockSize - _0x486a48) % this.blockSize;
    if (_0x1e43fd > 0) {
      _0x1e43fd = this.blockSize - _0x1e43fd;
    }
    this._partialOutput.clear();
    for (_0x2bd4da = 0; _0x2bd4da < this._ints; ++_0x2bd4da) {
      this._partialOutput.putInt32(_0x3e63c5.getInt32() ^ this._outBlock[_0x2bd4da]);
    }
    if (_0x1e43fd > 0) {
      _0x3e63c5.read -= this.blockSize;
    }
    if (this._partialBytes > 0) {
      this._partialOutput.getBytes(this._partialBytes);
    }
    if (_0x1e43fd > 0 && !_0x233119) {
      _0x54feb5.putBytes(this._partialOutput.getBytes(_0x1e43fd - this._partialBytes));
      this._partialBytes = _0x1e43fd;
      return true;
    }
    _0x54feb5.putBytes(this._partialOutput.getBytes(_0x486a48 - this._partialBytes));
    this._partialBytes = 0;
  }
  _0x547a24(this._inBlock);
};
_0x5ea3ae.ctr.prototype.decrypt = _0x5ea3ae.ctr.prototype.encrypt;
_0x5ea3ae.gcm = function (_0x3062cc) {
  _0x3062cc = _0x3062cc || {};
  this.name = "GCM";
  this.cipher = _0x3062cc.cipher;
  this.blockSize = _0x3062cc.blockSize || 16;
  this._ints = this.blockSize / 4;
  this._inBlock = new Array(this._ints);
  this._outBlock = new Array(this._ints);
  this._partialOutput = _0x1b2928.util.createBuffer();
  this._partialBytes = 0;
  this._R = 3774873600;
};
_0x5ea3ae.gcm.prototype.start = function (_0x465482) {
  if (!("iv" in _0x465482)) {
    throw new Error("Invalid IV parameter.");
  }
  var _0x350a55;
  var _0x39854b = _0x1b2928.util.createBuffer(_0x465482.iv);
  this._cipherLength = 0;
  _0x350a55 = "additionalData" in _0x465482 ? _0x1b2928.util.createBuffer(_0x465482.additionalData) : _0x1b2928.util.createBuffer();
  this._tagLength = "tagLength" in _0x465482 ? _0x465482.tagLength : 128;
  this._tag = null;
  if (_0x465482.decrypt && (this._tag = _0x1b2928.util.createBuffer(_0x465482.tag).getBytes(), this._tag.length !== this._tagLength / 8)) {
    throw new Error("Authentication tag does not match tag length.");
  }
  this._hashBlock = new Array(this._ints);
  this.tag = null;
  this._hashSubkey = new Array(this._ints);
  this.cipher.encrypt([0, 0, 0, 0], this._hashSubkey);
  this.componentBits = 4;
  this._m = this.generateHashTable(this._hashSubkey, this.componentBits);
  var _0x52fb23 = _0x39854b.length();
  if (_0x52fb23 === 12) {
    this._j0 = [_0x39854b.getInt32(), _0x39854b.getInt32(), _0x39854b.getInt32(), 1];
  } else {
    for (this._j0 = [0, 0, 0, 0]; _0x39854b.length() > 0;) {
      this._j0 = this.ghash(this._hashSubkey, this._j0, [_0x39854b.getInt32(), _0x39854b.getInt32(), _0x39854b.getInt32(), _0x39854b.getInt32()]);
    }
    this._j0 = this.ghash(this._hashSubkey, this._j0, [0, 0].concat(_0xfb2d75(_0x52fb23 * 8)));
  }
  this._inBlock = this._j0.slice(0);
  _0x547a24(this._inBlock);
  this._partialBytes = 0;
  _0x350a55 = _0x1b2928.util.createBuffer(_0x350a55);
  this._aDataLength = _0xfb2d75(_0x350a55.length() * 8);
  var _0x5a1474 = _0x350a55.length() % this.blockSize;
  if (_0x5a1474) {
    _0x350a55.fillWithByte(0, this.blockSize - _0x5a1474);
  }
  this._s = [0, 0, 0, 0];
  while (_0x350a55.length() > 0) {
    this._s = this.ghash(this._hashSubkey, this._s, [_0x350a55.getInt32(), _0x350a55.getInt32(), _0x350a55.getInt32(), _0x350a55.getInt32()]);
  }
};
_0x5ea3ae.gcm.prototype.encrypt = function (_0x3b9315, _0x2d40c2, _0x32414e) {
  var _0x4171e6 = _0x3b9315.length();
  if (_0x4171e6 === 0) {
    return true;
  }
  this.cipher.encrypt(this._inBlock, this._outBlock);
  if (this._partialBytes === 0 && _0x4171e6 >= this.blockSize) {
    for (var _0x208a27 = 0; _0x208a27 < this._ints; ++_0x208a27) {
      _0x2d40c2.putInt32(this._outBlock[_0x208a27] ^= _0x3b9315.getInt32());
    }
    this._cipherLength += this.blockSize;
  } else {
    var _0x116db2 = (this.blockSize - _0x4171e6) % this.blockSize;
    if (_0x116db2 > 0) {
      _0x116db2 = this.blockSize - _0x116db2;
    }
    this._partialOutput.clear();
    for (_0x208a27 = 0; _0x208a27 < this._ints; ++_0x208a27) {
      this._partialOutput.putInt32(_0x3b9315.getInt32() ^ this._outBlock[_0x208a27]);
    }
    if (_0x116db2 <= 0 || _0x32414e) {
      if (_0x32414e) {
        var _0x2ac289 = _0x4171e6 % this.blockSize;
        this._cipherLength += _0x2ac289;
        this._partialOutput.truncate(this.blockSize - _0x2ac289);
      } else {
        this._cipherLength += this.blockSize;
      }
      for (_0x208a27 = 0; _0x208a27 < this._ints; ++_0x208a27) {
        this._outBlock[_0x208a27] = this._partialOutput.getInt32();
      }
      this._partialOutput.read -= this.blockSize;
    }
    if (this._partialBytes > 0) {
      this._partialOutput.getBytes(this._partialBytes);
    }
    if (_0x116db2 > 0 && !_0x32414e) {
      _0x3b9315.read -= this.blockSize;
      _0x2d40c2.putBytes(this._partialOutput.getBytes(_0x116db2 - this._partialBytes));
      this._partialBytes = _0x116db2;
      return true;
    }
    _0x2d40c2.putBytes(this._partialOutput.getBytes(_0x4171e6 - this._partialBytes));
    this._partialBytes = 0;
  }
  this._s = this.ghash(this._hashSubkey, this._s, this._outBlock);
  _0x547a24(this._inBlock);
};
_0x5ea3ae.gcm.prototype.decrypt = function (_0x30a688, _0x39f726, _0x1453a9) {
  var _0x3c2bc4 = _0x30a688.length();
  if (_0x3c2bc4 < this.blockSize && (!_0x1453a9 || !(_0x3c2bc4 > 0))) {
    return true;
  }
  this.cipher.encrypt(this._inBlock, this._outBlock);
  _0x547a24(this._inBlock);
  this._hashBlock[0] = _0x30a688.getInt32();
  this._hashBlock[1] = _0x30a688.getInt32();
  this._hashBlock[2] = _0x30a688.getInt32();
  this._hashBlock[3] = _0x30a688.getInt32();
  this._s = this.ghash(this._hashSubkey, this._s, this._hashBlock);
  for (var _0x30f671 = 0; _0x30f671 < this._ints; ++_0x30f671) {
    _0x39f726.putInt32(this._outBlock[_0x30f671] ^ this._hashBlock[_0x30f671]);
  }
  if (_0x3c2bc4 < this.blockSize) {
    this._cipherLength += _0x3c2bc4 % this.blockSize;
  } else {
    this._cipherLength += this.blockSize;
  }
};
_0x5ea3ae.gcm.prototype.afterFinish = function (_0x3fe116, _0x6314fa) {
  var _0xade078 = true;
  if (_0x6314fa.decrypt && _0x6314fa.overflow) {
    _0x3fe116.truncate(this.blockSize - _0x6314fa.overflow);
  }
  this.tag = _0x1b2928.util.createBuffer();
  var _0x139041 = this._aDataLength.concat(_0xfb2d75(this._cipherLength * 8));
  this._s = this.ghash(this._hashSubkey, this._s, _0x139041);
  var _0x98bb76 = [];
  this.cipher.encrypt(this._j0, _0x98bb76);
  for (var _0x429d0d = 0; _0x429d0d < this._ints; ++_0x429d0d) {
    this.tag.putInt32(this._s[_0x429d0d] ^ _0x98bb76[_0x429d0d]);
  }
  this.tag.truncate(this.tag.length() % (this._tagLength / 8));
  if (_0x6314fa.decrypt && this.tag.bytes() !== this._tag) {
    _0xade078 = false;
  }
  return _0xade078;
};
_0x5ea3ae.gcm.prototype.multiply = function (_0x46815e, _0x548510) {
  var _0x3b2e3e = [0, 0, 0, 0];
  var _0x10d64a = _0x548510.slice(0);
  for (var _0x56b550 = 0; _0x56b550 < 128; ++_0x56b550) {
    if (_0x46815e[_0x56b550 / 32 | 0] & 1 << 31 - _0x56b550 % 32) {
      _0x3b2e3e[0] ^= _0x10d64a[0];
      _0x3b2e3e[1] ^= _0x10d64a[1];
      _0x3b2e3e[2] ^= _0x10d64a[2];
      _0x3b2e3e[3] ^= _0x10d64a[3];
    }
    this.pow(_0x10d64a, _0x10d64a);
  }
  return _0x3b2e3e;
};
_0x5ea3ae.gcm.prototype.pow = function (_0x4e5af7, _0x3cdb01) {
  var _0x2ab49b = _0x4e5af7[3] & 1;
  for (var _0xdc5d9e = 3; _0xdc5d9e > 0; --_0xdc5d9e) {
    _0x3cdb01[_0xdc5d9e] = _0x4e5af7[_0xdc5d9e] >>> 1 | (_0x4e5af7[_0xdc5d9e - 1] & 1) << 31;
  }
  _0x3cdb01[0] = _0x4e5af7[0] >>> 1;
  if (_0x2ab49b) {
    _0x3cdb01[0] ^= this._R;
  }
};
_0x5ea3ae.gcm.prototype.tableMultiply = function (_0x4f2bf0) {
  var _0x31fe7d = [0, 0, 0, 0];
  for (var _0x304b62 = 0; _0x304b62 < 32; ++_0x304b62) {
    var _0x414edc = _0x4f2bf0[_0x304b62 / 8 | 0] >>> (7 - _0x304b62 % 8) * 4 & 15;
    var _0x3a73ed = this._m[_0x304b62][_0x414edc];
    _0x31fe7d[0] ^= _0x3a73ed[0];
    _0x31fe7d[1] ^= _0x3a73ed[1];
    _0x31fe7d[2] ^= _0x3a73ed[2];
    _0x31fe7d[3] ^= _0x3a73ed[3];
  }
  return _0x31fe7d;
};
_0x5ea3ae.gcm.prototype.ghash = function (_0x64b889, _0x2872ed, _0x12fc4c) {
  _0x2872ed[0] ^= _0x12fc4c[0];
  _0x2872ed[1] ^= _0x12fc4c[1];
  _0x2872ed[2] ^= _0x12fc4c[2];
  _0x2872ed[3] ^= _0x12fc4c[3];
  return this.tableMultiply(_0x2872ed);
};
_0x5ea3ae.gcm.prototype.generateHashTable = function (_0x4f0fe8, _0x5c72f6) {
  var _0x58e4b3 = 8 / _0x5c72f6;
  var _0x4f63da = _0x58e4b3 * 4;
  for (var _0x59fe03 = _0x58e4b3 * 16, _0x19c1b2 = new Array(_0x59fe03), _0x3b848f = 0; _0x3b848f < _0x59fe03; ++_0x3b848f) {
    var _0xd778dc = [0, 0, 0, 0];
    var _0x584a56 = (_0x4f63da - 1 - _0x3b848f % _0x4f63da) * _0x5c72f6;
    _0xd778dc[_0x3b848f / _0x4f63da | 0] = 1 << _0x5c72f6 - 1 << _0x584a56;
    _0x19c1b2[_0x3b848f] = this.generateSubHashTable(this.multiply(_0xd778dc, _0x4f0fe8), _0x5c72f6);
  }
  return _0x19c1b2;
};
_0x5ea3ae.gcm.prototype.generateSubHashTable = function (_0x10f878, _0x5d3a1a) {
  var _0xd171c2 = 1 << _0x5d3a1a;
  var _0x36cbfa = _0xd171c2 >>> 1;
  var _0x3eddaf = new Array(_0xd171c2);
  _0x3eddaf[_0x36cbfa] = _0x10f878.slice(0);
  for (var _0x5cab94 = _0x36cbfa >>> 1; _0x5cab94 > 0;) {
    this.pow(_0x3eddaf[_0x5cab94 * 2], _0x3eddaf[_0x5cab94] = []);
    _0x5cab94 >>= 1;
  }
  for (_0x5cab94 = 2; _0x5cab94 < _0x36cbfa;) {
    for (var _0x288c2d = 1; _0x288c2d < _0x5cab94; ++_0x288c2d) {
      var _0x4bf295 = _0x3eddaf[_0x5cab94];
      var _0x3d8076 = _0x3eddaf[_0x288c2d];
      _0x3eddaf[_0x5cab94 + _0x288c2d] = [_0x4bf295[0] ^ _0x3d8076[0], _0x4bf295[1] ^ _0x3d8076[1], _0x4bf295[2] ^ _0x3d8076[2], _0x4bf295[3] ^ _0x3d8076[3]];
    }
    _0x5cab94 *= 2;
  }
  _0x3eddaf[0] = [0, 0, 0, 0];
  _0x5cab94 = _0x36cbfa + 1;
  for (; _0x5cab94 < _0xd171c2; ++_0x5cab94) {
    var _0x3b058e = _0x3eddaf[_0x5cab94 ^ _0x36cbfa];
    _0x3eddaf[_0x5cab94] = [_0x10f878[0] ^ _0x3b058e[0], _0x10f878[1] ^ _0x3b058e[1], _0x10f878[2] ^ _0x3b058e[2], _0x10f878[3] ^ _0x3b058e[3]];
  }
  return _0x3eddaf;
};