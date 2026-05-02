var _0x4dc92c = require("./832.js");
var _0x1cce20 = require("./807.js");
var _0x10bb74 = module.exports = _0x4dc92c.util = _0x4dc92c.util || {};
function _0x48e283(_0x13295f) {
  if (_0x13295f !== 8 && _0x13295f !== 16 && _0x13295f !== 24 && _0x13295f !== 32) {
    throw new Error("Only 8, 16, 24, or 32 bits supported: " + _0x13295f);
  }
}
function _0x5c3a7d(_0x64bc23) {
  this.data = "";
  this.read = 0;
  if (typeof _0x64bc23 == "string") {
    this.data = _0x64bc23;
  } else if (_0x10bb74.isArrayBuffer(_0x64bc23) || _0x10bb74.isArrayBufferView(_0x64bc23)) {
    if (typeof Buffer != "undefined" && _0x64bc23 instanceof Buffer) {
      this.data = _0x64bc23.toString("binary");
    } else {
      var _0x5873b2 = new Uint8Array(_0x64bc23);
      try {
        this.data = String.fromCharCode.apply(null, _0x5873b2);
      } catch (_0x426127) {
        for (var _0x85d554 = 0; _0x85d554 < _0x5873b2.length; ++_0x85d554) {
          this.putByte(_0x5873b2[_0x85d554]);
        }
      }
    }
  } else if (_0x64bc23 instanceof _0x5c3a7d || typeof _0x64bc23 == "object" && typeof _0x64bc23.data == "string" && typeof _0x64bc23.read == "number") {
    this.data = _0x64bc23.data;
    this.read = _0x64bc23.read;
  }
  this._constructedStringLength = 0;
}
(function () {
  if (typeof process != "undefined" && process.nextTick && !process.browser) {
    _0x10bb74.nextTick = process.nextTick;
    if (typeof setImmediate == "function") {
      _0x10bb74.setImmediate = setImmediate;
    } else {
      _0x10bb74.setImmediate = _0x10bb74.nextTick;
    }
    return;
  }
  if (typeof setImmediate == "function") {
    _0x10bb74.setImmediate = function () {
      return setImmediate.apply(undefined, arguments);
    };
    _0x10bb74.nextTick = function (_0x5b9626) {
      return setImmediate(_0x5b9626);
    };
    return;
  }
  _0x10bb74.setImmediate = function (_0xc51493) {
    setTimeout(_0xc51493, 0);
  };
  if (typeof window != "undefined" && typeof window.postMessage == "function") {
    var _0x36135d = "forge.setImmediate";
    var _0x2e6548 = [];
    _0x10bb74.setImmediate = function (_0x89e9a8) {
      _0x2e6548.push(_0x89e9a8);
      if (_0x2e6548.length === 1) {
        window.postMessage(_0x36135d, "*");
      }
    };
    window.addEventListener("message", function (_0x2848c7) {
      if (_0x2848c7.source === window && _0x2848c7.data === _0x36135d) {
        _0x2848c7.stopPropagation();
        var _0x9d47b5 = _0x2e6548.slice();
        _0x2e6548.length = 0;
        _0x9d47b5.forEach(function (_0x3f0cdc) {
          _0x3f0cdc();
        });
      }
    }, true);
  }
  if (typeof MutationObserver != "undefined") {
    var _0x4d8c66 = Date.now();
    var _0x2d4dd9 = true;
    var _0x2e7ec0 = document.createElement("div");
    _0x2e6548 = [];
    new MutationObserver(function () {
      var _0x17d6dc = _0x2e6548.slice();
      _0x2e6548.length = 0;
      _0x17d6dc.forEach(function (_0x39457c) {
        _0x39457c();
      });
    }).observe(_0x2e7ec0, {
      attributes: true
    });
    var _0x49c549 = _0x10bb74.setImmediate;
    _0x10bb74.setImmediate = function (_0x3c767f) {
      if (Date.now() - _0x4d8c66 > 15) {
        _0x4d8c66 = Date.now();
        _0x49c549(_0x3c767f);
      } else {
        _0x2e6548.push(_0x3c767f);
        if (_0x2e6548.length === 1) {
          _0x2e7ec0.setAttribute("a", _0x2d4dd9 = !_0x2d4dd9);
        }
      }
    };
  }
  _0x10bb74.nextTick = _0x10bb74.setImmediate;
})();
_0x10bb74.isNodejs = typeof process != "undefined" && process.versions && process.versions.node;
_0x10bb74.globalScope = _0x10bb74.isNodejs ? global : typeof self == "undefined" ? window : self;
_0x10bb74.isArray = Array.isArray || function (_0x4775b6) {
  return Object.prototype.toString.call(_0x4775b6) === "[object Array]";
};
_0x10bb74.isArrayBuffer = function (_0x2b80dc) {
  return typeof ArrayBuffer != "undefined" && _0x2b80dc instanceof ArrayBuffer;
};
_0x10bb74.isArrayBufferView = function (_0x1a8ea9) {
  return _0x1a8ea9 && _0x10bb74.isArrayBuffer(_0x1a8ea9.buffer) && _0x1a8ea9.byteLength !== undefined;
};
_0x10bb74.ByteBuffer = _0x5c3a7d;
_0x10bb74.ByteStringBuffer = _0x5c3a7d;
_0x10bb74.ByteStringBuffer.prototype._optimizeConstructedString = function (_0x486c72) {
  this._constructedStringLength += _0x486c72;
  if (this._constructedStringLength > 4096) {
    this.data.substr(0, 1);
    this._constructedStringLength = 0;
  }
};
_0x10bb74.ByteStringBuffer.prototype.length = function () {
  return this.data.length - this.read;
};
_0x10bb74.ByteStringBuffer.prototype.isEmpty = function () {
  return this.length() <= 0;
};
_0x10bb74.ByteStringBuffer.prototype.putByte = function (_0x5bc609) {
  return this.putBytes(String.fromCharCode(_0x5bc609));
};
_0x10bb74.ByteStringBuffer.prototype.fillWithByte = function (_0x5076ec, _0x312444) {
  _0x5076ec = String.fromCharCode(_0x5076ec);
  var _0x39a9be = this.data;
  for (; _0x312444 > 0;) {
    if (_0x312444 & 1) {
      _0x39a9be += _0x5076ec;
    }
    if ((_0x312444 >>>= 1) > 0) {
      _0x5076ec += _0x5076ec;
    }
  }
  this.data = _0x39a9be;
  this._optimizeConstructedString(_0x312444);
  return this;
};
_0x10bb74.ByteStringBuffer.prototype.putBytes = function (_0x45b342) {
  this.data += _0x45b342;
  this._optimizeConstructedString(_0x45b342.length);
  return this;
};
_0x10bb74.ByteStringBuffer.prototype.putString = function (_0x4d113a) {
  return this.putBytes(_0x10bb74.encodeUtf8(_0x4d113a));
};
_0x10bb74.ByteStringBuffer.prototype.putInt16 = function (_0x32e7c2) {
  return this.putBytes(String.fromCharCode(_0x32e7c2 >> 8 & 255) + String.fromCharCode(_0x32e7c2 & 255));
};
_0x10bb74.ByteStringBuffer.prototype.putInt24 = function (_0x2640ec) {
  return this.putBytes(String.fromCharCode(_0x2640ec >> 16 & 255) + String.fromCharCode(_0x2640ec >> 8 & 255) + String.fromCharCode(_0x2640ec & 255));
};
_0x10bb74.ByteStringBuffer.prototype.putInt32 = function (_0x5891bd) {
  return this.putBytes(String.fromCharCode(_0x5891bd >> 24 & 255) + String.fromCharCode(_0x5891bd >> 16 & 255) + String.fromCharCode(_0x5891bd >> 8 & 255) + String.fromCharCode(_0x5891bd & 255));
};
_0x10bb74.ByteStringBuffer.prototype.putInt16Le = function (_0x2fd756) {
  return this.putBytes(String.fromCharCode(_0x2fd756 & 255) + String.fromCharCode(_0x2fd756 >> 8 & 255));
};
_0x10bb74.ByteStringBuffer.prototype.putInt24Le = function (_0x2a5b30) {
  return this.putBytes(String.fromCharCode(_0x2a5b30 & 255) + String.fromCharCode(_0x2a5b30 >> 8 & 255) + String.fromCharCode(_0x2a5b30 >> 16 & 255));
};
_0x10bb74.ByteStringBuffer.prototype.putInt32Le = function (_0x34670a) {
  return this.putBytes(String.fromCharCode(_0x34670a & 255) + String.fromCharCode(_0x34670a >> 8 & 255) + String.fromCharCode(_0x34670a >> 16 & 255) + String.fromCharCode(_0x34670a >> 24 & 255));
};
_0x10bb74.ByteStringBuffer.prototype.putInt = function (_0x4c256b, _0xb36c7c) {
  _0x48e283(_0xb36c7c);
  var _0x42a837 = "";
  do {
    _0xb36c7c -= 8;
    _0x42a837 += String.fromCharCode(_0x4c256b >> _0xb36c7c & 255);
  } while (_0xb36c7c > 0);
  return this.putBytes(_0x42a837);
};
_0x10bb74.ByteStringBuffer.prototype.putSignedInt = function (_0x48a512, _0x4b5710) {
  if (_0x48a512 < 0) {
    _0x48a512 += 2 << _0x4b5710 - 1;
  }
  return this.putInt(_0x48a512, _0x4b5710);
};
_0x10bb74.ByteStringBuffer.prototype.putBuffer = function (_0x27eac4) {
  return this.putBytes(_0x27eac4.getBytes());
};
_0x10bb74.ByteStringBuffer.prototype.getByte = function () {
  return this.data.charCodeAt(this.read++);
};
_0x10bb74.ByteStringBuffer.prototype.getInt16 = function () {
  var _0x239fee = this.data.charCodeAt(this.read) << 8 ^ this.data.charCodeAt(this.read + 1);
  this.read += 2;
  return _0x239fee;
};
_0x10bb74.ByteStringBuffer.prototype.getInt24 = function () {
  var _0x545b99 = this.data.charCodeAt(this.read) << 16 ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2);
  this.read += 3;
  return _0x545b99;
};
_0x10bb74.ByteStringBuffer.prototype.getInt32 = function () {
  var _0xb04c58 = this.data.charCodeAt(this.read) << 24 ^ this.data.charCodeAt(this.read + 1) << 16 ^ this.data.charCodeAt(this.read + 2) << 8 ^ this.data.charCodeAt(this.read + 3);
  this.read += 4;
  return _0xb04c58;
};
_0x10bb74.ByteStringBuffer.prototype.getInt16Le = function () {
  var _0x367fd6 = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8;
  this.read += 2;
  return _0x367fd6;
};
_0x10bb74.ByteStringBuffer.prototype.getInt24Le = function () {
  var _0x140bb0 = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16;
  this.read += 3;
  return _0x140bb0;
};
_0x10bb74.ByteStringBuffer.prototype.getInt32Le = function () {
  var _0x509ffb = this.data.charCodeAt(this.read) ^ this.data.charCodeAt(this.read + 1) << 8 ^ this.data.charCodeAt(this.read + 2) << 16 ^ this.data.charCodeAt(this.read + 3) << 24;
  this.read += 4;
  return _0x509ffb;
};
_0x10bb74.ByteStringBuffer.prototype.getInt = function (_0x3993fa) {
  _0x48e283(_0x3993fa);
  var _0x434083 = 0;
  do {
    _0x434083 = (_0x434083 << 8) + this.data.charCodeAt(this.read++);
    _0x3993fa -= 8;
  } while (_0x3993fa > 0);
  return _0x434083;
};
_0x10bb74.ByteStringBuffer.prototype.getSignedInt = function (_0x29802b) {
  var _0x220caf = this.getInt(_0x29802b);
  var _0x1edbcb = 2 << _0x29802b - 2;
  if (_0x220caf >= _0x1edbcb) {
    _0x220caf -= _0x1edbcb << 1;
  }
  return _0x220caf;
};
_0x10bb74.ByteStringBuffer.prototype.getBytes = function (_0x61e381) {
  var _0x4159d4;
  if (_0x61e381) {
    _0x61e381 = Math.min(this.length(), _0x61e381);
    _0x4159d4 = this.data.slice(this.read, this.read + _0x61e381);
    this.read += _0x61e381;
  } else if (_0x61e381 === 0) {
    _0x4159d4 = "";
  } else {
    _0x4159d4 = this.read === 0 ? this.data : this.data.slice(this.read);
    this.clear();
  }
  return _0x4159d4;
};
_0x10bb74.ByteStringBuffer.prototype.bytes = function (_0x15153b) {
  if (_0x15153b === undefined) {
    return this.data.slice(this.read);
  } else {
    return this.data.slice(this.read, this.read + _0x15153b);
  }
};
_0x10bb74.ByteStringBuffer.prototype.at = function (_0x25a55d) {
  return this.data.charCodeAt(this.read + _0x25a55d);
};
_0x10bb74.ByteStringBuffer.prototype.setAt = function (_0x10c4e1, _0x29ce99) {
  this.data = this.data.substr(0, this.read + _0x10c4e1) + String.fromCharCode(_0x29ce99) + this.data.substr(this.read + _0x10c4e1 + 1);
  return this;
};
_0x10bb74.ByteStringBuffer.prototype.last = function () {
  return this.data.charCodeAt(this.data.length - 1);
};
_0x10bb74.ByteStringBuffer.prototype.copy = function () {
  var _0x1909d2 = _0x10bb74.createBuffer(this.data);
  _0x1909d2.read = this.read;
  return _0x1909d2;
};
_0x10bb74.ByteStringBuffer.prototype.compact = function () {
  if (this.read > 0) {
    this.data = this.data.slice(this.read);
    this.read = 0;
  }
  return this;
};
_0x10bb74.ByteStringBuffer.prototype.clear = function () {
  this.data = "";
  this.read = 0;
  return this;
};
_0x10bb74.ByteStringBuffer.prototype.truncate = function (_0x459508) {
  var _0x2e8648 = Math.max(0, this.length() - _0x459508);
  this.data = this.data.substr(this.read, _0x2e8648);
  this.read = 0;
  return this;
};
_0x10bb74.ByteStringBuffer.prototype.toHex = function () {
  var _0x1966ad = "";
  for (var _0x2e5b44 = this.read; _0x2e5b44 < this.data.length; ++_0x2e5b44) {
    var _0x33f288 = this.data.charCodeAt(_0x2e5b44);
    if (_0x33f288 < 16) {
      _0x1966ad += "0";
    }
    _0x1966ad += _0x33f288.toString(16);
  }
  return _0x1966ad;
};
_0x10bb74.ByteStringBuffer.prototype.toString = function () {
  return _0x10bb74.decodeUtf8(this.bytes());
};
_0x10bb74.DataBuffer = function (_0x16131e, _0x13211d) {
  _0x13211d = _0x13211d || {};
  this.read = _0x13211d.readOffset || 0;
  this.growSize = _0x13211d.growSize || 1024;
  var _0x237dae = _0x10bb74.isArrayBuffer(_0x16131e);
  var _0x201a67 = _0x10bb74.isArrayBufferView(_0x16131e);
  if (_0x237dae || _0x201a67) {
    this.data = _0x237dae ? new DataView(_0x16131e) : new DataView(_0x16131e.buffer, _0x16131e.byteOffset, _0x16131e.byteLength);
    this.write = "writeOffset" in _0x13211d ? _0x13211d.writeOffset : this.data.byteLength;
    return;
  }
  this.data = new DataView(new ArrayBuffer(0));
  this.write = 0;
  if (_0x16131e != null) {
    this.putBytes(_0x16131e);
  }
  if ("writeOffset" in _0x13211d) {
    this.write = _0x13211d.writeOffset;
  }
};
_0x10bb74.DataBuffer.prototype.length = function () {
  return this.write - this.read;
};
_0x10bb74.DataBuffer.prototype.isEmpty = function () {
  return this.length() <= 0;
};
_0x10bb74.DataBuffer.prototype.accommodate = function (_0x8e9a32, _0x2dda33) {
  if (this.length() >= _0x8e9a32) {
    return this;
  }
  _0x2dda33 = Math.max(_0x2dda33 || this.growSize, _0x8e9a32);
  var _0x3fa443 = new Uint8Array(this.data.buffer, this.data.byteOffset, this.data.byteLength);
  var _0x5926ae = new Uint8Array(this.length() + _0x2dda33);
  _0x5926ae.set(_0x3fa443);
  this.data = new DataView(_0x5926ae.buffer);
  return this;
};
_0x10bb74.DataBuffer.prototype.putByte = function (_0x31cc84) {
  this.accommodate(1);
  this.data.setUint8(this.write++, _0x31cc84);
  return this;
};
_0x10bb74.DataBuffer.prototype.fillWithByte = function (_0x18dbb9, _0x319d41) {
  this.accommodate(_0x319d41);
  for (var _0x4e78de = 0; _0x4e78de < _0x319d41; ++_0x4e78de) {
    this.data.setUint8(_0x18dbb9);
  }
  return this;
};
_0x10bb74.DataBuffer.prototype.putBytes = function (_0x3684fb, _0x2bf72e) {
  if (_0x10bb74.isArrayBufferView(_0x3684fb)) {
    var _0x49bf57 = (_0x2152d7 = new Uint8Array(_0x3684fb.buffer, _0x3684fb.byteOffset, _0x3684fb.byteLength)).byteLength - _0x2152d7.byteOffset;
    this.accommodate(_0x49bf57);
    new Uint8Array(this.data.buffer, this.write).set(_0x2152d7);
    this.write += _0x49bf57;
    return this;
  }
  if (_0x10bb74.isArrayBuffer(_0x3684fb)) {
    var _0x2152d7 = new Uint8Array(_0x3684fb);
    this.accommodate(_0x2152d7.byteLength);
    new Uint8Array(this.data.buffer).set(_0x2152d7, this.write);
    this.write += _0x2152d7.byteLength;
    return this;
  }
  if (_0x3684fb instanceof _0x10bb74.DataBuffer || typeof _0x3684fb == "object" && typeof _0x3684fb.read == "number" && typeof _0x3684fb.write == "number" && _0x10bb74.isArrayBufferView(_0x3684fb.data)) {
    _0x2152d7 = new Uint8Array(_0x3684fb.data.byteLength, _0x3684fb.read, _0x3684fb.length());
    this.accommodate(_0x2152d7.byteLength);
    new Uint8Array(_0x3684fb.data.byteLength, this.write).set(_0x2152d7);
    this.write += _0x2152d7.byteLength;
    return this;
  }
  if (_0x3684fb instanceof _0x10bb74.ByteStringBuffer) {
    _0x3684fb = _0x3684fb.data;
    _0x2bf72e = "binary";
  }
  _0x2bf72e = _0x2bf72e || "binary";
  if (typeof _0x3684fb == "string") {
    var _0x3b501c;
    if (_0x2bf72e === "hex") {
      this.accommodate(Math.ceil(_0x3684fb.length / 2));
      _0x3b501c = new Uint8Array(this.data.buffer, this.write);
      this.write += _0x10bb74.binary.hex.decode(_0x3684fb, _0x3b501c, this.write);
      return this;
    }
    if (_0x2bf72e === "base64") {
      this.accommodate(Math.ceil(_0x3684fb.length / 4) * 3);
      _0x3b501c = new Uint8Array(this.data.buffer, this.write);
      this.write += _0x10bb74.binary.base64.decode(_0x3684fb, _0x3b501c, this.write);
      return this;
    }
    if (_0x2bf72e === "utf8") {
      _0x3684fb = _0x10bb74.encodeUtf8(_0x3684fb);
      _0x2bf72e = "binary";
    }
    if (_0x2bf72e === "binary" || _0x2bf72e === "raw") {
      this.accommodate(_0x3684fb.length);
      _0x3b501c = new Uint8Array(this.data.buffer, this.write);
      this.write += _0x10bb74.binary.raw.decode(_0x3b501c);
      return this;
    }
    if (_0x2bf72e === "utf16") {
      this.accommodate(_0x3684fb.length * 2);
      _0x3b501c = new Uint16Array(this.data.buffer, this.write);
      this.write += _0x10bb74.text.utf16.encode(_0x3b501c);
      return this;
    }
    throw new Error("Invalid encoding: " + _0x2bf72e);
  }
  throw Error("Invalid parameter: " + _0x3684fb);
};
_0x10bb74.DataBuffer.prototype.putBuffer = function (_0x6bf866) {
  this.putBytes(_0x6bf866);
  _0x6bf866.clear();
  return this;
};
_0x10bb74.DataBuffer.prototype.putString = function (_0xdee12a) {
  return this.putBytes(_0xdee12a, "utf16");
};
_0x10bb74.DataBuffer.prototype.putInt16 = function (_0x433b70) {
  this.accommodate(2);
  this.data.setInt16(this.write, _0x433b70);
  this.write += 2;
  return this;
};
_0x10bb74.DataBuffer.prototype.putInt24 = function (_0x1dfc2c) {
  this.accommodate(3);
  this.data.setInt16(this.write, _0x1dfc2c >> 8 & 65535);
  this.data.setInt8(this.write, _0x1dfc2c >> 16 & 255);
  this.write += 3;
  return this;
};
_0x10bb74.DataBuffer.prototype.putInt32 = function (_0x5a13f2) {
  this.accommodate(4);
  this.data.setInt32(this.write, _0x5a13f2);
  this.write += 4;
  return this;
};
_0x10bb74.DataBuffer.prototype.putInt16Le = function (_0x3a2fa0) {
  this.accommodate(2);
  this.data.setInt16(this.write, _0x3a2fa0, true);
  this.write += 2;
  return this;
};
_0x10bb74.DataBuffer.prototype.putInt24Le = function (_0x1d73f7) {
  this.accommodate(3);
  this.data.setInt8(this.write, _0x1d73f7 >> 16 & 255);
  this.data.setInt16(this.write, _0x1d73f7 >> 8 & 65535, true);
  this.write += 3;
  return this;
};
_0x10bb74.DataBuffer.prototype.putInt32Le = function (_0x4ba3a4) {
  this.accommodate(4);
  this.data.setInt32(this.write, _0x4ba3a4, true);
  this.write += 4;
  return this;
};
_0x10bb74.DataBuffer.prototype.putInt = function (_0x15b72e, _0x10a258) {
  _0x48e283(_0x10a258);
  this.accommodate(_0x10a258 / 8);
  do {
    _0x10a258 -= 8;
    this.data.setInt8(this.write++, _0x15b72e >> _0x10a258 & 255);
  } while (_0x10a258 > 0);
  return this;
};
_0x10bb74.DataBuffer.prototype.putSignedInt = function (_0x37e85b, _0x2ed9d9) {
  _0x48e283(_0x2ed9d9);
  this.accommodate(_0x2ed9d9 / 8);
  if (_0x37e85b < 0) {
    _0x37e85b += 2 << _0x2ed9d9 - 1;
  }
  return this.putInt(_0x37e85b, _0x2ed9d9);
};
_0x10bb74.DataBuffer.prototype.getByte = function () {
  return this.data.getInt8(this.read++);
};
_0x10bb74.DataBuffer.prototype.getInt16 = function () {
  var _0x5620f7 = this.data.getInt16(this.read);
  this.read += 2;
  return _0x5620f7;
};
_0x10bb74.DataBuffer.prototype.getInt24 = function () {
  var _0x4c9528 = this.data.getInt16(this.read) << 8 ^ this.data.getInt8(this.read + 2);
  this.read += 3;
  return _0x4c9528;
};
_0x10bb74.DataBuffer.prototype.getInt32 = function () {
  var _0x2d37a5 = this.data.getInt32(this.read);
  this.read += 4;
  return _0x2d37a5;
};
_0x10bb74.DataBuffer.prototype.getInt16Le = function () {
  var _0xa8df1c = this.data.getInt16(this.read, true);
  this.read += 2;
  return _0xa8df1c;
};
_0x10bb74.DataBuffer.prototype.getInt24Le = function () {
  var _0x1d837c = this.data.getInt8(this.read) ^ this.data.getInt16(this.read + 1, true) << 8;
  this.read += 3;
  return _0x1d837c;
};
_0x10bb74.DataBuffer.prototype.getInt32Le = function () {
  var _0x3e95f5 = this.data.getInt32(this.read, true);
  this.read += 4;
  return _0x3e95f5;
};
_0x10bb74.DataBuffer.prototype.getInt = function (_0x3ef2fa) {
  _0x48e283(_0x3ef2fa);
  var _0x3fcc87 = 0;
  do {
    _0x3fcc87 = (_0x3fcc87 << 8) + this.data.getInt8(this.read++);
    _0x3ef2fa -= 8;
  } while (_0x3ef2fa > 0);
  return _0x3fcc87;
};
_0x10bb74.DataBuffer.prototype.getSignedInt = function (_0xd91fe2) {
  var _0x368d1c = this.getInt(_0xd91fe2);
  var _0x501c93 = 2 << _0xd91fe2 - 2;
  if (_0x368d1c >= _0x501c93) {
    _0x368d1c -= _0x501c93 << 1;
  }
  return _0x368d1c;
};
_0x10bb74.DataBuffer.prototype.getBytes = function (_0x2a623d) {
  var _0x28923c;
  if (_0x2a623d) {
    _0x2a623d = Math.min(this.length(), _0x2a623d);
    _0x28923c = this.data.slice(this.read, this.read + _0x2a623d);
    this.read += _0x2a623d;
  } else if (_0x2a623d === 0) {
    _0x28923c = "";
  } else {
    _0x28923c = this.read === 0 ? this.data : this.data.slice(this.read);
    this.clear();
  }
  return _0x28923c;
};
_0x10bb74.DataBuffer.prototype.bytes = function (_0x1bf3a2) {
  if (_0x1bf3a2 === undefined) {
    return this.data.slice(this.read);
  } else {
    return this.data.slice(this.read, this.read + _0x1bf3a2);
  }
};
_0x10bb74.DataBuffer.prototype.at = function (_0x2afc34) {
  return this.data.getUint8(this.read + _0x2afc34);
};
_0x10bb74.DataBuffer.prototype.setAt = function (_0x37f6e5, _0x488500) {
  this.data.setUint8(_0x37f6e5, _0x488500);
  return this;
};
_0x10bb74.DataBuffer.prototype.last = function () {
  return this.data.getUint8(this.write - 1);
};
_0x10bb74.DataBuffer.prototype.copy = function () {
  return new _0x10bb74.DataBuffer(this);
};
_0x10bb74.DataBuffer.prototype.compact = function () {
  if (this.read > 0) {
    var _0x95c9f3 = new Uint8Array(this.data.buffer, this.read);
    var _0x51acd8 = new Uint8Array(_0x95c9f3.byteLength);
    _0x51acd8.set(_0x95c9f3);
    this.data = new DataView(_0x51acd8);
    this.write -= this.read;
    this.read = 0;
  }
  return this;
};
_0x10bb74.DataBuffer.prototype.clear = function () {
  this.data = new DataView(new ArrayBuffer(0));
  this.read = this.write = 0;
  return this;
};
_0x10bb74.DataBuffer.prototype.truncate = function (_0x553f0a) {
  this.write = Math.max(0, this.length() - _0x553f0a);
  this.read = Math.min(this.read, this.write);
  return this;
};
_0x10bb74.DataBuffer.prototype.toHex = function () {
  var _0x1684c1 = "";
  for (var _0x1e2012 = this.read; _0x1e2012 < this.data.byteLength; ++_0x1e2012) {
    var _0x1e9bf5 = this.data.getUint8(_0x1e2012);
    if (_0x1e9bf5 < 16) {
      _0x1684c1 += "0";
    }
    _0x1684c1 += _0x1e9bf5.toString(16);
  }
  return _0x1684c1;
};
_0x10bb74.DataBuffer.prototype.toString = function (_0x16cf89) {
  var _0x217f46 = new Uint8Array(this.data, this.read, this.length());
  if ((_0x16cf89 = _0x16cf89 || "utf8") === "binary" || _0x16cf89 === "raw") {
    return _0x10bb74.binary.raw.encode(_0x217f46);
  }
  if (_0x16cf89 === "hex") {
    return _0x10bb74.binary.hex.encode(_0x217f46);
  }
  if (_0x16cf89 === "base64") {
    return _0x10bb74.binary.base64.encode(_0x217f46);
  }
  if (_0x16cf89 === "utf8") {
    return _0x10bb74.text.utf8.decode(_0x217f46);
  }
  if (_0x16cf89 === "utf16") {
    return _0x10bb74.text.utf16.decode(_0x217f46);
  }
  throw new Error("Invalid encoding: " + _0x16cf89);
};
_0x10bb74.createBuffer = function (_0x18296b, _0x482a7c) {
  _0x482a7c = _0x482a7c || "raw";
  if (_0x18296b !== undefined && _0x482a7c === "utf8") {
    _0x18296b = _0x10bb74.encodeUtf8(_0x18296b);
  }
  return new _0x10bb74.ByteBuffer(_0x18296b);
};
_0x10bb74.fillString = function (_0x1a3ac6, _0x464f7e) {
  var _0x6744dc = "";
  for (; _0x464f7e > 0;) {
    if (_0x464f7e & 1) {
      _0x6744dc += _0x1a3ac6;
    }
    if ((_0x464f7e >>>= 1) > 0) {
      _0x1a3ac6 += _0x1a3ac6;
    }
  }
  return _0x6744dc;
};
_0x10bb74.xorBytes = function (_0x3ab278, _0x4b7ec3, _0x211fd5) {
  var _0x15a948 = "";
  var _0x317fba = "";
  var _0x1640dc = "";
  for (var _0x446daa = 0, _0x16f5e5 = 0; _0x211fd5 > 0; --_0x211fd5, ++_0x446daa) {
    _0x317fba = _0x3ab278.charCodeAt(_0x446daa) ^ _0x4b7ec3.charCodeAt(_0x446daa);
    if (_0x16f5e5 >= 10) {
      _0x15a948 += _0x1640dc;
      _0x1640dc = "";
      _0x16f5e5 = 0;
    }
    _0x1640dc += String.fromCharCode(_0x317fba);
    ++_0x16f5e5;
  }
  return _0x15a948 += _0x1640dc;
};
_0x10bb74.hexToBytes = function (_0x150543) {
  var _0x1973be = "";
  var _0x4572b2 = 0;
  for (_0x150543.length & true && (_0x4572b2 = 1, _0x1973be += String.fromCharCode(parseInt(_0x150543[0], 16))); _0x4572b2 < _0x150543.length; _0x4572b2 += 2) {
    _0x1973be += String.fromCharCode(parseInt(_0x150543.substr(_0x4572b2, 2), 16));
  }
  return _0x1973be;
};
_0x10bb74.bytesToHex = function (_0x538505) {
  return _0x10bb74.createBuffer(_0x538505).toHex();
};
_0x10bb74.int32ToBytes = function (_0xe79f80) {
  return String.fromCharCode(_0xe79f80 >> 24 & 255) + String.fromCharCode(_0xe79f80 >> 16 & 255) + String.fromCharCode(_0xe79f80 >> 8 & 255) + String.fromCharCode(_0xe79f80 & 255);
};
var _0x1678d9 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var _0x5f102a = [62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 64, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
var _0x26ed66 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
_0x10bb74.encode64 = function (_0x1a0788, _0x2c945a) {
  var _0x26c822;
  var _0x8790b1;
  var _0x576579;
  for (var _0x13ecff = "", _0x1fef89 = "", _0x15bf82 = 0; _0x15bf82 < _0x1a0788.length;) {
    _0x26c822 = _0x1a0788.charCodeAt(_0x15bf82++);
    _0x8790b1 = _0x1a0788.charCodeAt(_0x15bf82++);
    _0x576579 = _0x1a0788.charCodeAt(_0x15bf82++);
    _0x13ecff += _0x1678d9.charAt(_0x26c822 >> 2);
    _0x13ecff += _0x1678d9.charAt((_0x26c822 & 3) << 4 | _0x8790b1 >> 4);
    if (isNaN(_0x8790b1)) {
      _0x13ecff += "==";
    } else {
      _0x13ecff += _0x1678d9.charAt((_0x8790b1 & 15) << 2 | _0x576579 >> 6);
      _0x13ecff += isNaN(_0x576579) ? "=" : _0x1678d9.charAt(_0x576579 & 63);
    }
    if (_0x2c945a && _0x13ecff.length > _0x2c945a) {
      _0x1fef89 += _0x13ecff.substr(0, _0x2c945a) + "\r\n";
      _0x13ecff = _0x13ecff.substr(_0x2c945a);
    }
  }
  return _0x1fef89 += _0x13ecff;
};
_0x10bb74.decode64 = function (_0x54ab5b) {
  _0x54ab5b = _0x54ab5b.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  var _0x15b923;
  var _0xcc462b;
  var _0x40647a;
  var _0x1711f3;
  for (var _0x50394a = "", _0xe6d35c = 0; _0xe6d35c < _0x54ab5b.length;) {
    _0x15b923 = _0x5f102a[_0x54ab5b.charCodeAt(_0xe6d35c++) - 43];
    _0xcc462b = _0x5f102a[_0x54ab5b.charCodeAt(_0xe6d35c++) - 43];
    _0x40647a = _0x5f102a[_0x54ab5b.charCodeAt(_0xe6d35c++) - 43];
    _0x1711f3 = _0x5f102a[_0x54ab5b.charCodeAt(_0xe6d35c++) - 43];
    _0x50394a += String.fromCharCode(_0x15b923 << 2 | _0xcc462b >> 4);
    if (_0x40647a !== 64) {
      _0x50394a += String.fromCharCode((_0xcc462b & 15) << 4 | _0x40647a >> 2);
      if (_0x1711f3 !== 64) {
        _0x50394a += String.fromCharCode((_0x40647a & 3) << 6 | _0x1711f3);
      }
    }
  }
  return _0x50394a;
};
_0x10bb74.encodeUtf8 = function (_0x1fce7f) {
  return unescape(encodeURIComponent(_0x1fce7f));
};
_0x10bb74.decodeUtf8 = function (_0x5c9130) {
  return decodeURIComponent(escape(_0x5c9130));
};
_0x10bb74.binary = {
  raw: {},
  hex: {},
  base64: {},
  base58: {},
  baseN: {
    encode: _0x1cce20.encode,
    decode: _0x1cce20.decode
  }
};
_0x10bb74.binary.raw.encode = function (_0x7891fc) {
  return String.fromCharCode.apply(null, _0x7891fc);
};
_0x10bb74.binary.raw.decode = function (_0x373212, _0x4f4287, _0x555ed8) {
  var _0x1eb17a = _0x4f4287;
  _0x1eb17a ||= new Uint8Array(_0x373212.length);
  var _0x19438a = _0x555ed8 = _0x555ed8 || 0;
  for (var _0x4a4f00 = 0; _0x4a4f00 < _0x373212.length; ++_0x4a4f00) {
    _0x1eb17a[_0x19438a++] = _0x373212.charCodeAt(_0x4a4f00);
  }
  if (_0x4f4287) {
    return _0x19438a - _0x555ed8;
  } else {
    return _0x1eb17a;
  }
};
_0x10bb74.binary.hex.encode = _0x10bb74.bytesToHex;
_0x10bb74.binary.hex.decode = function (_0xe5ef43, _0x982334, _0x1b1217) {
  var _0x3120be = _0x982334;
  _0x3120be ||= new Uint8Array(Math.ceil(_0xe5ef43.length / 2));
  var _0x32f774 = 0;
  var _0x2e482d = _0x1b1217 = _0x1b1217 || 0;
  for (_0xe5ef43.length & 1 && (_0x32f774 = 1, _0x3120be[_0x2e482d++] = parseInt(_0xe5ef43[0], 16)); _0x32f774 < _0xe5ef43.length; _0x32f774 += 2) {
    _0x3120be[_0x2e482d++] = parseInt(_0xe5ef43.substr(_0x32f774, 2), 16);
  }
  if (_0x982334) {
    return _0x2e482d - _0x1b1217;
  } else {
    return _0x3120be;
  }
};
_0x10bb74.binary.base64.encode = function (_0x3304bf, _0x50daa9) {
  var _0x20ad58;
  var _0x5b0b7a;
  var _0x154678;
  for (var _0x2ab7f9 = "", _0x289411 = "", _0x489afb = 0; _0x489afb < _0x3304bf.byteLength;) {
    _0x20ad58 = _0x3304bf[_0x489afb++];
    _0x5b0b7a = _0x3304bf[_0x489afb++];
    _0x154678 = _0x3304bf[_0x489afb++];
    _0x2ab7f9 += _0x1678d9.charAt(_0x20ad58 >> 2);
    _0x2ab7f9 += _0x1678d9.charAt((_0x20ad58 & 3) << 4 | _0x5b0b7a >> 4);
    if (isNaN(_0x5b0b7a)) {
      _0x2ab7f9 += "==";
    } else {
      _0x2ab7f9 += _0x1678d9.charAt((_0x5b0b7a & 15) << 2 | _0x154678 >> 6);
      _0x2ab7f9 += isNaN(_0x154678) ? "=" : _0x1678d9.charAt(_0x154678 & 63);
    }
    if (_0x50daa9 && _0x2ab7f9.length > _0x50daa9) {
      _0x289411 += _0x2ab7f9.substr(0, _0x50daa9) + "\r\n";
      _0x2ab7f9 = _0x2ab7f9.substr(_0x50daa9);
    }
  }
  return _0x289411 += _0x2ab7f9;
};
_0x10bb74.binary.base64.decode = function (_0x1be7bd, _0x1ac314, _0x4ab8e1) {
  var _0x88a764;
  var _0x360355;
  var _0x52df8f;
  var _0x5adbdf;
  var _0x10d996 = _0x1ac314;
  _0x10d996 ||= new Uint8Array(Math.ceil(_0x1be7bd.length / 4) * 3);
  _0x1be7bd = _0x1be7bd.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  for (var _0x4860c1 = 0, _0x42042b = _0x4ab8e1 = _0x4ab8e1 || 0; _0x4860c1 < _0x1be7bd.length;) {
    _0x88a764 = _0x5f102a[_0x1be7bd.charCodeAt(_0x4860c1++) - 43];
    _0x360355 = _0x5f102a[_0x1be7bd.charCodeAt(_0x4860c1++) - 43];
    _0x52df8f = _0x5f102a[_0x1be7bd.charCodeAt(_0x4860c1++) - 43];
    _0x5adbdf = _0x5f102a[_0x1be7bd.charCodeAt(_0x4860c1++) - 43];
    _0x10d996[_0x42042b++] = _0x88a764 << 2 | _0x360355 >> 4;
    if (_0x52df8f !== 64) {
      _0x10d996[_0x42042b++] = (_0x360355 & 15) << 4 | _0x52df8f >> 2;
      if (_0x5adbdf !== 64) {
        _0x10d996[_0x42042b++] = (_0x52df8f & 3) << 6 | _0x5adbdf;
      }
    }
  }
  if (_0x1ac314) {
    return _0x42042b - _0x4ab8e1;
  } else {
    return _0x10d996.subarray(0, _0x42042b);
  }
};
_0x10bb74.binary.base58.encode = function (_0x3b6cef, _0x575f17) {
  return _0x10bb74.binary.baseN.encode(_0x3b6cef, _0x26ed66, _0x575f17);
};
_0x10bb74.binary.base58.decode = function (_0x497f69, _0x230f80) {
  return _0x10bb74.binary.baseN.decode(_0x497f69, _0x26ed66, _0x230f80);
};
_0x10bb74.text = {
  utf8: {},
  utf16: {}
};
_0x10bb74.text.utf8.encode = function (_0x3ee86b, _0x12ad3c, _0x3f7865) {
  _0x3ee86b = _0x10bb74.encodeUtf8(_0x3ee86b);
  var _0x59e6cf = _0x12ad3c;
  _0x59e6cf ||= new Uint8Array(_0x3ee86b.length);
  var _0x503865 = _0x3f7865 = _0x3f7865 || 0;
  for (var _0x18a529 = 0; _0x18a529 < _0x3ee86b.length; ++_0x18a529) {
    _0x59e6cf[_0x503865++] = _0x3ee86b.charCodeAt(_0x18a529);
  }
  if (_0x12ad3c) {
    return _0x503865 - _0x3f7865;
  } else {
    return _0x59e6cf;
  }
};
_0x10bb74.text.utf8.decode = function (_0x18ff2d) {
  return _0x10bb74.decodeUtf8(String.fromCharCode.apply(null, _0x18ff2d));
};
_0x10bb74.text.utf16.encode = function (_0x1a7a8b, _0x3d4cba, _0x13ea7b) {
  var _0x2c3666 = _0x3d4cba;
  _0x2c3666 ||= new Uint8Array(_0x1a7a8b.length * 2);
  var _0x7af094 = new Uint16Array(_0x2c3666.buffer);
  var _0x3503e0 = _0x13ea7b = _0x13ea7b || 0;
  var _0x42bb86 = _0x13ea7b;
  for (var _0x4d1384 = 0; _0x4d1384 < _0x1a7a8b.length; ++_0x4d1384) {
    _0x7af094[_0x42bb86++] = _0x1a7a8b.charCodeAt(_0x4d1384);
    _0x3503e0 += 2;
  }
  if (_0x3d4cba) {
    return _0x3503e0 - _0x13ea7b;
  } else {
    return _0x2c3666;
  }
};
_0x10bb74.text.utf16.decode = function (_0x1bdea0) {
  return String.fromCharCode.apply(null, new Uint16Array(_0x1bdea0.buffer));
};
_0x10bb74.deflate = function (_0x35ca08, _0x1b4b7d, _0x298199) {
  _0x1b4b7d = _0x10bb74.decode64(_0x35ca08.deflate(_0x10bb74.encode64(_0x1b4b7d)).rval);
  if (_0x298199) {
    var _0x35a75f = 2;
    if (_0x1b4b7d.charCodeAt(1) & 32) {
      _0x35a75f = 6;
    }
    _0x1b4b7d = _0x1b4b7d.substring(_0x35a75f, _0x1b4b7d.length - 4);
  }
  return _0x1b4b7d;
};
_0x10bb74.inflate = function (_0x1f95cb, _0x3f78f9, _0x1bd01c) {
  var _0x2c680c = _0x1f95cb.inflate(_0x10bb74.encode64(_0x3f78f9)).rval;
  if (_0x2c680c === null) {
    return null;
  } else {
    return _0x10bb74.decode64(_0x2c680c);
  }
};
function _0x109f53(_0x4f61c3, _0x23eacb, _0x4ad7c0) {
  if (!_0x4f61c3) {
    throw new Error("WebStorage not available.");
  }
  var _0x4a13a7;
  if (_0x4ad7c0 === null) {
    _0x4a13a7 = _0x4f61c3.removeItem(_0x23eacb);
  } else {
    _0x4ad7c0 = _0x10bb74.encode64(JSON.stringify(_0x4ad7c0));
    _0x4a13a7 = _0x4f61c3.setItem(_0x23eacb, _0x4ad7c0);
  }
  if (_0x4a13a7 !== undefined && _0x4a13a7.rval !== true) {
    var _0x21d344 = new Error(_0x4a13a7.error.message);
    _0x21d344.id = _0x4a13a7.error.id;
    _0x21d344.name = _0x4a13a7.error.name;
    throw _0x21d344;
  }
}
function _0x600c10(_0x56d455, _0x12ae17) {
  if (!_0x56d455) {
    throw new Error("WebStorage not available.");
  }
  var _0x4c54c7 = _0x56d455.getItem(_0x12ae17);
  if (_0x56d455.init) {
    if (_0x4c54c7.rval === null) {
      if (_0x4c54c7.error) {
        var _0x52e306 = new Error(_0x4c54c7.error.message);
        _0x52e306.id = _0x4c54c7.error.id;
        _0x52e306.name = _0x4c54c7.error.name;
        throw _0x52e306;
      }
      _0x4c54c7 = null;
    } else {
      _0x4c54c7 = _0x4c54c7.rval;
    }
  }
  if (_0x4c54c7 !== null) {
    _0x4c54c7 = JSON.parse(_0x10bb74.decode64(_0x4c54c7));
  }
  return _0x4c54c7;
}
function _0x193f40(_0x1cb576, _0x38a18c, _0x583aa4, _0x319eb0) {
  var _0x194e31 = _0x600c10(_0x1cb576, _0x38a18c);
  if (_0x194e31 === null) {
    _0x194e31 = {};
  }
  _0x194e31[_0x583aa4] = _0x319eb0;
  _0x109f53(_0x1cb576, _0x38a18c, _0x194e31);
}
function _0x562e47(_0x20b850, _0x4bba2d, _0xcd14b6) {
  var _0x1f0475 = _0x600c10(_0x20b850, _0x4bba2d);
  if (_0x1f0475 !== null) {
    _0x1f0475 = _0xcd14b6 in _0x1f0475 ? _0x1f0475[_0xcd14b6] : null;
  }
  return _0x1f0475;
}
function _0x3e17dd(_0x478c65, _0x4a9fef, _0x384fe9) {
  var _0x93aa94 = _0x600c10(_0x478c65, _0x4a9fef);
  if (_0x93aa94 !== null && _0x384fe9 in _0x93aa94) {
    delete _0x93aa94[_0x384fe9];
    var _0x57a38d = true;
    for (var _0x3f23c1 in _0x93aa94) {
      _0x57a38d = false;
      break;
    }
    if (_0x57a38d) {
      _0x93aa94 = null;
    }
    _0x109f53(_0x478c65, _0x4a9fef, _0x93aa94);
  }
}
function _0x114685(_0x35b8c7, _0x3bfc37) {
  _0x109f53(_0x35b8c7, _0x3bfc37, null);
}
function _0x1a71bd(_0xeed5c2, _0x3f22fd, _0x1d9b6b) {
  var _0x11e812;
  var _0x51c114 = null;
  if (_0x1d9b6b === undefined) {
    _0x1d9b6b = ["web", "flash"];
  }
  var _0x4119b0 = false;
  var _0xf2a10f = null;
  for (var _0x52c63e in _0x1d9b6b) {
    _0x11e812 = _0x1d9b6b[_0x52c63e];
    try {
      if (_0x11e812 === "flash" || _0x11e812 === "both") {
        if (_0x3f22fd[0] === null) {
          throw new Error("Flash local storage not available.");
        }
        _0x51c114 = _0xeed5c2.apply(this, _0x3f22fd);
        _0x4119b0 = _0x11e812 === "flash";
      }
      if (_0x11e812 === "web" || _0x11e812 === "both") {
        _0x3f22fd[0] = localStorage;
        _0x51c114 = _0xeed5c2.apply(this, _0x3f22fd);
        _0x4119b0 = true;
      }
    } catch (_0x5ea1e8) {
      _0xf2a10f = _0x5ea1e8;
    }
    if (_0x4119b0) {
      break;
    }
  }
  if (!_0x4119b0) {
    throw _0xf2a10f;
  }
  return _0x51c114;
}
_0x10bb74.setItem = function (_0x5dbb6b, _0x5a618a, _0x5ca16c, _0x56b1a0, _0x568735) {
  _0x1a71bd(_0x193f40, arguments, _0x568735);
};
_0x10bb74.getItem = function (_0x216bd3, _0x3d373d, _0x4f36ee, _0x3a2347) {
  return _0x1a71bd(_0x562e47, arguments, _0x3a2347);
};
_0x10bb74.removeItem = function (_0x321e7f, _0x2ba99c, _0xb0ec6c, _0x16c78c) {
  _0x1a71bd(_0x3e17dd, arguments, _0x16c78c);
};
_0x10bb74.clearItems = function (_0x4d3488, _0x4973d4, _0x87960b) {
  _0x1a71bd(_0x114685, arguments, _0x87960b);
};
_0x10bb74.isEmpty = function (_0xf0727a) {
  for (var _0x1b338b in _0xf0727a) {
    if (_0xf0727a.hasOwnProperty(_0x1b338b)) {
      return false;
    }
  }
  return true;
};
_0x10bb74.format = function (_0xcc2283) {
  for (var _0x2c9ac4, _0x2d0ea3, _0x27de00 = /%./g, _0x444b64 = 0, _0x5bcfc7 = [], _0x50100f = 0; _0x2c9ac4 = _0x27de00.exec(_0xcc2283);) {
    if ((_0x2d0ea3 = _0xcc2283.substring(_0x50100f, _0x27de00.lastIndex - 2)).length > 0) {
      _0x5bcfc7.push(_0x2d0ea3);
    }
    _0x50100f = _0x27de00.lastIndex;
    var _0x392c66 = _0x2c9ac4[0][1];
    switch (_0x392c66) {
      case "s":
      case "o":
        if (_0x444b64 < arguments.length) {
          _0x5bcfc7.push(arguments[1 + _0x444b64++]);
        } else {
          _0x5bcfc7.push("<?>");
        }
        break;
      case "%":
        _0x5bcfc7.push("%");
        break;
      default:
        _0x5bcfc7.push("<%" + _0x392c66 + "?>");
    }
  }
  _0x5bcfc7.push(_0xcc2283.substring(_0x50100f));
  return _0x5bcfc7.join("");
};
_0x10bb74.formatNumber = function (_0x122112, _0x49e14, _0x5b1380, _0x59a314) {
  var _0x50141f = _0x122112;
  var _0x40def2 = isNaN(_0x49e14 = Math.abs(_0x49e14)) ? 2 : _0x49e14;
  var _0x460a93 = _0x5b1380 === undefined ? "," : _0x5b1380;
  var _0x10d1d1 = _0x59a314 === undefined ? "." : _0x59a314;
  var _0x2dc9e0 = _0x50141f < 0 ? "-" : "";
  var _0x1d1336 = parseInt(_0x50141f = Math.abs(+_0x50141f || 0).toFixed(_0x40def2), 10) + "";
  var _0x2fa91d = _0x1d1336.length > 3 ? _0x1d1336.length % 3 : 0;
  return _0x2dc9e0 + (_0x2fa91d ? _0x1d1336.substr(0, _0x2fa91d) + _0x10d1d1 : "") + _0x1d1336.substr(_0x2fa91d).replace(/(\d{3})(?=\d)/g, "$1" + _0x10d1d1) + (_0x40def2 ? _0x460a93 + Math.abs(_0x50141f - _0x1d1336).toFixed(_0x40def2).slice(2) : "");
};
_0x10bb74.formatSize = function (_0x5e268a) {
  return _0x5e268a = _0x5e268a >= 1073741824 ? _0x10bb74.formatNumber(_0x5e268a / 1073741824, 2, ".", "") + " GiB" : _0x5e268a >= 1048576 ? _0x10bb74.formatNumber(_0x5e268a / 1048576, 2, ".", "") + " MiB" : _0x5e268a >= 1024 ? _0x10bb74.formatNumber(_0x5e268a / 1024, 0) + " KiB" : _0x10bb74.formatNumber(_0x5e268a, 0) + " bytes";
};
_0x10bb74.bytesFromIP = function (_0x5bdbdb) {
  if (_0x5bdbdb.indexOf(".") !== -1) {
    return _0x10bb74.bytesFromIPv4(_0x5bdbdb);
  } else if (_0x5bdbdb.indexOf(":") !== -1) {
    return _0x10bb74.bytesFromIPv6(_0x5bdbdb);
  } else {
    return null;
  }
};
_0x10bb74.bytesFromIPv4 = function (_0x448d75) {
  if ((_0x448d75 = _0x448d75.split(".")).length !== 4) {
    return null;
  }
  var _0x5079c8 = _0x10bb74.createBuffer();
  for (var _0x2a0f80 = 0; _0x2a0f80 < _0x448d75.length; ++_0x2a0f80) {
    var _0x31d44f = parseInt(_0x448d75[_0x2a0f80], 10);
    if (isNaN(_0x31d44f)) {
      return null;
    }
    _0x5079c8.putByte(_0x31d44f);
  }
  return _0x5079c8.getBytes();
};
_0x10bb74.bytesFromIPv6 = function (_0x2047f5) {
  var _0x2517e0 = 0;
  var _0x2f150b = (8 - (_0x2047f5 = _0x2047f5.split(":").filter(function (_0x5b8b2e) {
    if (_0x5b8b2e.length === 0) {
      ++_0x2517e0;
    }
    return true;
  })).length + _0x2517e0) * 2;
  var _0x56af72 = _0x10bb74.createBuffer();
  for (var _0x47d40d = 0; _0x47d40d < 8; ++_0x47d40d) {
    if (_0x2047f5[_0x47d40d] && _0x2047f5[_0x47d40d].length !== 0) {
      var _0x103861 = _0x10bb74.hexToBytes(_0x2047f5[_0x47d40d]);
      if (_0x103861.length < 2) {
        _0x56af72.putByte(0);
      }
      _0x56af72.putBytes(_0x103861);
    } else {
      _0x56af72.fillWithByte(0, _0x2f150b);
      _0x2f150b = 0;
    }
  }
  return _0x56af72.getBytes();
};
_0x10bb74.bytesToIP = function (_0x813743) {
  if (_0x813743.length === 4) {
    return _0x10bb74.bytesToIPv4(_0x813743);
  } else if (_0x813743.length === 16) {
    return _0x10bb74.bytesToIPv6(_0x813743);
  } else {
    return null;
  }
};
_0x10bb74.bytesToIPv4 = function (_0x8f3ac5) {
  if (_0x8f3ac5.length !== 4) {
    return null;
  }
  var _0x3a1b64 = [];
  for (var _0x305ccf = 0; _0x305ccf < _0x8f3ac5.length; ++_0x305ccf) {
    _0x3a1b64.push(_0x8f3ac5.charCodeAt(_0x305ccf));
  }
  return _0x3a1b64.join(".");
};
_0x10bb74.bytesToIPv6 = function (_0x520b00) {
  if (_0x520b00.length !== 16) {
    return null;
  }
  var _0xaadab0 = [];
  var _0x530019 = [];
  var _0x494591 = 0;
  for (var _0x53b87d = 0; _0x53b87d < _0x520b00.length; _0x53b87d += 2) {
    for (var _0x22e947 = _0x10bb74.bytesToHex(_0x520b00[_0x53b87d] + _0x520b00[_0x53b87d + 1]); _0x22e947[0] === "0" && _0x22e947 !== "0";) {
      _0x22e947 = _0x22e947.substr(1);
    }
    if (_0x22e947 === "0") {
      var _0x3380d7 = _0x530019[_0x530019.length - 1];
      var _0x2e582b = _0xaadab0.length;
      if (_0x3380d7 && _0x2e582b === _0x3380d7.end + 1) {
        _0x3380d7.end = _0x2e582b;
        if (_0x3380d7.end - _0x3380d7.start > _0x530019[_0x494591].end - _0x530019[_0x494591].start) {
          _0x494591 = _0x530019.length - 1;
        }
      } else {
        _0x530019.push({
          start: _0x2e582b,
          end: _0x2e582b
        });
      }
    }
    _0xaadab0.push(_0x22e947);
  }
  if (_0x530019.length > 0) {
    var _0x1ab22a = _0x530019[_0x494591];
    if (_0x1ab22a.end - _0x1ab22a.start > 0) {
      _0xaadab0.splice(_0x1ab22a.start, _0x1ab22a.end - _0x1ab22a.start + 1, "");
      if (_0x1ab22a.start === 0) {
        _0xaadab0.unshift("");
      }
      if (_0x1ab22a.end === 7) {
        _0xaadab0.push("");
      }
    }
  }
  return _0xaadab0.join(":");
};
_0x10bb74.estimateCores = function (_0xf94a86, _0x54ccd0) {
  if (typeof _0xf94a86 == "function") {
    _0x54ccd0 = _0xf94a86;
    _0xf94a86 = {};
  }
  _0xf94a86 = _0xf94a86 || {};
  if ("cores" in _0x10bb74 && !_0xf94a86.update) {
    return _0x54ccd0(null, _0x10bb74.cores);
  }
  if (typeof navigator != "undefined" && "hardwareConcurrency" in navigator && navigator.hardwareConcurrency > 0) {
    _0x10bb74.cores = navigator.hardwareConcurrency;
    return _0x54ccd0(null, _0x10bb74.cores);
  }
  if (typeof Worker == "undefined") {
    _0x10bb74.cores = 1;
    return _0x54ccd0(null, _0x10bb74.cores);
  }
  if (typeof Blob == "undefined") {
    _0x10bb74.cores = 2;
    return _0x54ccd0(null, _0x10bb74.cores);
  }
  var _0x3dd563 = URL.createObjectURL(new Blob(["(", function () {
    self.addEventListener("message", function (_0x4ff291) {
      var _0x269aa2 = Date.now();
      for (var _0x3a5b86 = _0x269aa2 + 4; Date.now() < _0x3a5b86;);
      self.postMessage({
        st: _0x269aa2,
        et: _0x3a5b86
      });
    });
  }.toString(), ")()"], {
    type: "application/javascript"
  }));
  (function _0x27c50a(_0x1633c2, _0x1e3829, _0x23db02) {
    if (_0x1e3829 === 0) {
      var _0x33be43 = Math.floor(_0x1633c2.reduce(function (_0x4d1200, _0x373f81) {
        return _0x4d1200 + _0x373f81;
      }, 0) / _0x1633c2.length);
      _0x10bb74.cores = Math.max(1, _0x33be43);
      URL.revokeObjectURL(_0x3dd563);
      return _0x54ccd0(null, _0x10bb74.cores);
    }
    (function (_0x3c3584, _0xe7ec14) {
      var _0xe2e812 = [];
      var _0x30654d = [];
      for (var _0x23da9b = 0; _0x23da9b < _0x3c3584; ++_0x23da9b) {
        var _0x584624 = new Worker(_0x3dd563);
        _0x584624.addEventListener("message", function (_0x5cbba3) {
          _0x30654d.push(_0x5cbba3.data);
          if (_0x30654d.length === _0x3c3584) {
            for (var _0x5e26b0 = 0; _0x5e26b0 < _0x3c3584; ++_0x5e26b0) {
              _0xe2e812[_0x5e26b0].terminate();
            }
            _0xe7ec14(null, _0x30654d);
          }
        });
        _0xe2e812.push(_0x584624);
      }
      for (_0x23da9b = 0; _0x23da9b < _0x3c3584; ++_0x23da9b) {
        _0xe2e812[_0x23da9b].postMessage(_0x23da9b);
      }
    })(_0x23db02, function (_0xe1f99c, _0x4b07c0) {
      _0x1633c2.push(function (_0x4008db, _0x58bdc1) {
        var _0xb84057 = [];
        for (var _0x53f3fc = 0; _0x53f3fc < _0x4008db; ++_0x53f3fc) {
          var _0x16469c = _0x58bdc1[_0x53f3fc];
          var _0x47c308 = _0xb84057[_0x53f3fc] = [];
          for (var _0x5dffc4 = 0; _0x5dffc4 < _0x4008db; ++_0x5dffc4) {
            if (_0x53f3fc !== _0x5dffc4) {
              var _0x5e8d4a = _0x58bdc1[_0x5dffc4];
              if (_0x16469c.st > _0x5e8d4a.st && _0x16469c.st < _0x5e8d4a.et || _0x5e8d4a.st > _0x16469c.st && _0x5e8d4a.st < _0x16469c.et) {
                _0x47c308.push(_0x5dffc4);
              }
            }
          }
        }
        return _0xb84057.reduce(function (_0x5275d2, _0x5d8093) {
          return Math.max(_0x5275d2, _0x5d8093.length);
        }, 0);
      }(_0x23db02, _0x4b07c0));
      _0x27c50a(_0x1633c2, _0x1e3829 - 1, _0x23db02);
    });
  })([], 5, 16);
};