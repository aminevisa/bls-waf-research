var _0x4a4ada = {};
module.exports = _0x4a4ada;
var _0x5d4acb = {};
_0x4a4ada.encode = function (_0x5e4854, _0x249e40, _0x3da562) {
  if (typeof _0x249e40 != "string") {
    throw new TypeError("\"alphabet\" must be a string.");
  }
  if (_0x3da562 !== undefined && typeof _0x3da562 != "number") {
    throw new TypeError("\"maxline\" must be a number.");
  }
  var _0x4d597e = "";
  if (_0x5e4854 instanceof Uint8Array) {
    var _0x5974d1 = 0;
    var _0x19ab05 = _0x249e40.length;
    var _0x494047 = _0x249e40.charAt(0);
    var _0x2ab0f4 = [0];
    for (_0x5974d1 = 0; _0x5974d1 < _0x5e4854.length; ++_0x5974d1) {
      for (var _0x27a6df = 0, _0x1c93e3 = _0x5e4854[_0x5974d1]; _0x27a6df < _0x2ab0f4.length; ++_0x27a6df) {
        _0x1c93e3 += _0x2ab0f4[_0x27a6df] << 8;
        _0x2ab0f4[_0x27a6df] = _0x1c93e3 % _0x19ab05;
        _0x1c93e3 = _0x1c93e3 / _0x19ab05 | 0;
      }
      while (_0x1c93e3 > 0) {
        _0x2ab0f4.push(_0x1c93e3 % _0x19ab05);
        _0x1c93e3 = _0x1c93e3 / _0x19ab05 | 0;
      }
    }
    for (_0x5974d1 = 0; _0x5e4854[_0x5974d1] === 0 && _0x5974d1 < _0x5e4854.length - 1; ++_0x5974d1) {
      _0x4d597e += _0x494047;
    }
    for (_0x5974d1 = _0x2ab0f4.length - 1; _0x5974d1 >= 0; --_0x5974d1) {
      _0x4d597e += _0x249e40[_0x2ab0f4[_0x5974d1]];
    }
  } else {
    _0x4d597e = function (_0x58eef6, _0x43bdb6) {
      var _0x117742 = 0;
      var _0x22b7c1 = _0x43bdb6.length;
      var _0x23dc36 = _0x43bdb6.charAt(0);
      var _0x369878 = [0];
      for (_0x117742 = 0; _0x117742 < _0x58eef6.length(); ++_0x117742) {
        for (var _0x4eaea8 = 0, _0x592468 = _0x58eef6.at(_0x117742); _0x4eaea8 < _0x369878.length; ++_0x4eaea8) {
          _0x592468 += _0x369878[_0x4eaea8] << 8;
          _0x369878[_0x4eaea8] = _0x592468 % _0x22b7c1;
          _0x592468 = _0x592468 / _0x22b7c1 | 0;
        }
        while (_0x592468 > 0) {
          _0x369878.push(_0x592468 % _0x22b7c1);
          _0x592468 = _0x592468 / _0x22b7c1 | 0;
        }
      }
      var _0x200906 = "";
      for (_0x117742 = 0; _0x58eef6.at(_0x117742) === 0 && _0x117742 < _0x58eef6.length() - 1; ++_0x117742) {
        _0x200906 += _0x23dc36;
      }
      for (_0x117742 = _0x369878.length - 1; _0x117742 >= 0; --_0x117742) {
        _0x200906 += _0x43bdb6[_0x369878[_0x117742]];
      }
      return _0x200906;
    }(_0x5e4854, _0x249e40);
  }
  if (_0x3da562) {
    var _0xcd88ae = new RegExp(".{1," + _0x3da562 + "}", "g");
    _0x4d597e = _0x4d597e.match(_0xcd88ae).join("\r\n");
  }
  return _0x4d597e;
};
_0x4a4ada.decode = function (_0x47ca19, _0x2c79b3) {
  if (typeof _0x47ca19 != "string") {
    throw new TypeError("\"input\" must be a string.");
  }
  if (typeof _0x2c79b3 != "string") {
    throw new TypeError("\"alphabet\" must be a string.");
  }
  var _0xd29199 = _0x5d4acb[_0x2c79b3];
  if (!_0xd29199) {
    _0xd29199 = _0x5d4acb[_0x2c79b3] = [];
    for (var _0x56e45c = 0; _0x56e45c < _0x2c79b3.length; ++_0x56e45c) {
      _0xd29199[_0x2c79b3.charCodeAt(_0x56e45c)] = _0x56e45c;
    }
  }
  _0x47ca19 = _0x47ca19.replace(/\s/g, "");
  var _0x222e7c = _0x2c79b3.length;
  var _0x4f7e85 = _0x2c79b3.charAt(0);
  var _0x18f591 = [0];
  for (_0x56e45c = 0; _0x56e45c < _0x47ca19.length; _0x56e45c++) {
    var _0x146bf6 = _0xd29199[_0x47ca19.charCodeAt(_0x56e45c)];
    if (_0x146bf6 === undefined) {
      return;
    }
    for (var _0x4eb0c8 = 0, _0x482a95 = _0x146bf6; _0x4eb0c8 < _0x18f591.length; ++_0x4eb0c8) {
      _0x482a95 += _0x18f591[_0x4eb0c8] * _0x222e7c;
      _0x18f591[_0x4eb0c8] = _0x482a95 & 255;
      _0x482a95 >>= 8;
    }
    while (_0x482a95 > 0) {
      _0x18f591.push(_0x482a95 & 255);
      _0x482a95 >>= 8;
    }
  }
  for (var _0x2fd4e3 = 0; _0x47ca19[_0x2fd4e3] === _0x4f7e85 && _0x2fd4e3 < _0x47ca19.length - 1; ++_0x2fd4e3) {
    _0x18f591.push(0);
  }
  if (typeof Buffer != "undefined") {
    return Buffer.from(_0x18f591.reverse());
  } else {
    return new Uint8Array(_0x18f591.reverse());
  }
};