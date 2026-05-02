var _0x5005b6 = require("./832.js");
require("./116.js");
var _0x30a319 = [217, 120, 249, 196, 25, 221, 181, 237, 40, 233, 253, 121, 74, 160, 216, 157, 198, 126, 55, 131, 43, 118, 83, 142, 98, 76, 100, 136, 68, 139, 251, 162, 23, 154, 89, 245, 135, 179, 79, 19, 97, 69, 109, 141, 9, 129, 125, 50, 189, 143, 64, 235, 134, 183, 123, 11, 240, 149, 33, 34, 92, 107, 78, 130, 84, 214, 101, 147, 206, 96, 178, 28, 115, 86, 192, 20, 167, 140, 241, 220, 18, 117, 202, 31, 59, 190, 228, 209, 66, 61, 212, 48, 163, 60, 182, 38, 111, 191, 14, 218, 70, 105, 7, 87, 39, 242, 29, 155, 188, 148, 67, 3, 248, 17, 199, 246, 144, 239, 62, 231, 6, 195, 213, 47, 200, 102, 30, 215, 8, 232, 234, 222, 128, 82, 238, 247, 132, 170, 114, 172, 53, 77, 106, 42, 150, 26, 210, 113, 90, 21, 73, 116, 75, 159, 208, 94, 4, 24, 164, 236, 194, 224, 65, 110, 15, 81, 203, 204, 36, 145, 175, 80, 161, 244, 112, 57, 153, 124, 58, 133, 35, 184, 180, 122, 252, 2, 54, 91, 37, 85, 151, 49, 45, 93, 250, 152, 227, 138, 146, 174, 5, 223, 41, 16, 103, 108, 186, 201, 211, 0, 230, 207, 225, 158, 168, 44, 99, 22, 1, 63, 88, 226, 137, 169, 13, 56, 52, 27, 171, 51, 255, 176, 187, 72, 12, 95, 185, 177, 205, 46, 197, 243, 219, 71, 229, 165, 156, 119, 10, 166, 32, 104, 254, 127, 193, 173];
var _0x1d32b3 = [1, 2, 3, 5];
function _0x47f963(_0x2d701a, _0x4c54fd) {
  return _0x2d701a << _0x4c54fd & 65535 | (_0x2d701a & 65535) >> 16 - _0x4c54fd;
}
function _0x3acfeb(_0x2fdd4f, _0x3033e9) {
  return (_0x2fdd4f & 65535) >> _0x3033e9 | _0x2fdd4f << 16 - _0x3033e9 & 65535;
}
module.exports = _0x5005b6.rc2 = _0x5005b6.rc2 || {};
_0x5005b6.rc2.expandKey = function (_0x17f17c, _0x11f97d) {
  if (typeof _0x17f17c == "string") {
    _0x17f17c = _0x5005b6.util.createBuffer(_0x17f17c);
  }
  _0x11f97d = _0x11f97d || 128;
  var _0x1508cd;
  var _0x4ce8ed = _0x17f17c;
  var _0x32375f = _0x17f17c.length();
  var _0x2da6ec = _0x11f97d;
  var _0xc86a91 = Math.ceil(_0x2da6ec / 8);
  var _0x215010 = 255 >> (_0x2da6ec & 7);
  for (_0x1508cd = _0x32375f; _0x1508cd < 128; _0x1508cd++) {
    _0x4ce8ed.putByte(_0x30a319[_0x4ce8ed.at(_0x1508cd - 1) + _0x4ce8ed.at(_0x1508cd - _0x32375f) & 255]);
  }
  _0x4ce8ed.setAt(128 - _0xc86a91, _0x30a319[_0x4ce8ed.at(128 - _0xc86a91) & _0x215010]);
  _0x1508cd = 127 - _0xc86a91;
  for (; _0x1508cd >= 0; _0x1508cd--) {
    _0x4ce8ed.setAt(_0x1508cd, _0x30a319[_0x4ce8ed.at(_0x1508cd + 1) ^ _0x4ce8ed.at(_0x1508cd + _0xc86a91)]);
  }
  return _0x4ce8ed;
};
function _0x227284(_0x21daa9, _0x3bd399, _0x5601fa) {
  var _0x3d2a05;
  var _0x1058c9;
  var _0x216c77;
  var _0x5c00d2;
  var _0x14e53d = false;
  var _0x5bdba1 = null;
  var _0x3b17b1 = null;
  var _0x3c571c = null;
  var _0x3b9160 = [];
  _0x21daa9 = _0x5005b6.rc2.expandKey(_0x21daa9, _0x3bd399);
  _0x216c77 = 0;
  for (; _0x216c77 < 64; _0x216c77++) {
    _0x3b9160.push(_0x21daa9.getInt16Le());
  }
  if (_0x5601fa) {
    _0x3d2a05 = function (_0x5a9b85) {
      for (_0x216c77 = 0; _0x216c77 < 4; _0x216c77++) {
        _0x5a9b85[_0x216c77] += _0x3b9160[_0x5c00d2] + (_0x5a9b85[(_0x216c77 + 3) % 4] & _0x5a9b85[(_0x216c77 + 2) % 4]) + (~_0x5a9b85[(_0x216c77 + 3) % 4] & _0x5a9b85[(_0x216c77 + 1) % 4]);
        _0x5a9b85[_0x216c77] = _0x47f963(_0x5a9b85[_0x216c77], _0x1d32b3[_0x216c77]);
        _0x5c00d2++;
      }
    };
    _0x1058c9 = function (_0x42560f) {
      for (_0x216c77 = 0; _0x216c77 < 4; _0x216c77++) {
        _0x42560f[_0x216c77] += _0x3b9160[_0x42560f[(_0x216c77 + 3) % 4] & 63];
      }
    };
  } else {
    _0x3d2a05 = function (_0x3cc325) {
      for (_0x216c77 = 3; _0x216c77 >= 0; _0x216c77--) {
        _0x3cc325[_0x216c77] = _0x3acfeb(_0x3cc325[_0x216c77], _0x1d32b3[_0x216c77]);
        _0x3cc325[_0x216c77] -= _0x3b9160[_0x5c00d2] + (_0x3cc325[(_0x216c77 + 3) % 4] & _0x3cc325[(_0x216c77 + 2) % 4]) + (~_0x3cc325[(_0x216c77 + 3) % 4] & _0x3cc325[(_0x216c77 + 1) % 4]);
        _0x5c00d2--;
      }
    };
    _0x1058c9 = function (_0x14a2e) {
      for (_0x216c77 = 3; _0x216c77 >= 0; _0x216c77--) {
        _0x14a2e[_0x216c77] -= _0x3b9160[_0x14a2e[(_0x216c77 + 3) % 4] & 63];
      }
    };
  }
  function _0x2b34ce(_0x5e6862) {
    var _0x42ad3c = [];
    for (_0x216c77 = 0; _0x216c77 < 4; _0x216c77++) {
      var _0x287426 = _0x5bdba1.getInt16Le();
      if (_0x3c571c !== null) {
        if (_0x5601fa) {
          _0x287426 ^= _0x3c571c.getInt16Le();
        } else {
          _0x3c571c.putInt16Le(_0x287426);
        }
      }
      _0x42ad3c.push(_0x287426 & 65535);
    }
    _0x5c00d2 = _0x5601fa ? 0 : 63;
    for (var _0x41c5bc = 0; _0x41c5bc < _0x5e6862.length; _0x41c5bc++) {
      for (var _0x26dbdc = 0; _0x26dbdc < _0x5e6862[_0x41c5bc][0]; _0x26dbdc++) {
        _0x5e6862[_0x41c5bc][1](_0x42ad3c);
      }
    }
    for (_0x216c77 = 0; _0x216c77 < 4; _0x216c77++) {
      if (_0x3c571c !== null) {
        if (_0x5601fa) {
          _0x3c571c.putInt16Le(_0x42ad3c[_0x216c77]);
        } else {
          _0x42ad3c[_0x216c77] ^= _0x3c571c.getInt16Le();
        }
      }
      _0x3b17b1.putInt16Le(_0x42ad3c[_0x216c77]);
    }
  }
  var _0x4744a0 = null;
  return _0x4744a0 = {
    start: function (_0x3bdab6, _0x3073ec) {
      if (_0x3bdab6 && typeof _0x3bdab6 == "string") {
        _0x3bdab6 = _0x5005b6.util.createBuffer(_0x3bdab6);
      }
      _0x14e53d = false;
      _0x5bdba1 = _0x5005b6.util.createBuffer();
      _0x3b17b1 = _0x3073ec || new _0x5005b6.util.createBuffer();
      _0x3c571c = _0x3bdab6;
      _0x4744a0.output = _0x3b17b1;
    },
    update: function (_0x5db37f) {
      for (_0x14e53d || _0x5bdba1.putBuffer(_0x5db37f); _0x5bdba1.length() >= 8;) {
        _0x2b34ce([[5, _0x3d2a05], [1, _0x1058c9], [6, _0x3d2a05], [1, _0x1058c9], [5, _0x3d2a05]]);
      }
    },
    finish: function (_0x4ae977) {
      var _0x41a4ee = true;
      if (_0x5601fa) {
        if (_0x4ae977) {
          _0x41a4ee = _0x4ae977(8, _0x5bdba1, !_0x5601fa);
        } else {
          var _0x1da9fc = _0x5bdba1.length() === 8 ? 8 : 8 - _0x5bdba1.length();
          _0x5bdba1.fillWithByte(_0x1da9fc, _0x1da9fc);
        }
      }
      if (_0x41a4ee) {
        _0x14e53d = true;
        _0x4744a0.update();
      }
      if (!_0x5601fa && (_0x41a4ee = _0x5bdba1.length() === 0)) {
        if (_0x4ae977) {
          _0x41a4ee = _0x4ae977(8, _0x3b17b1, !_0x5601fa);
        } else {
          var _0x285191 = _0x3b17b1.length();
          var _0x41a014 = _0x3b17b1.at(_0x285191 - 1);
          if (_0x41a014 > _0x285191) {
            _0x41a4ee = false;
          } else {
            _0x3b17b1.truncate(_0x41a014);
          }
        }
      }
      return _0x41a4ee;
    }
  };
}
_0x5005b6.rc2.startEncrypting = function (_0x23533d, _0x4356fe, _0x3f45b1) {
  var _0x431e12 = _0x5005b6.rc2.createEncryptionCipher(_0x23533d, 128);
  _0x431e12.start(_0x4356fe, _0x3f45b1);
  return _0x431e12;
};
_0x5005b6.rc2.createEncryptionCipher = function (_0x4a5637, _0x45ba64) {
  return _0x227284(_0x4a5637, _0x45ba64, true);
};
_0x5005b6.rc2.startDecrypting = function (_0x4d4979, _0x4d9e7f, _0xfd877e) {
  var _0x4ccea4 = _0x5005b6.rc2.createDecryptionCipher(_0x4d4979, 128);
  _0x4ccea4.start(_0x4d9e7f, _0xfd877e);
  return _0x4ccea4;
};
_0x5005b6.rc2.createDecryptionCipher = function (_0x112ec6, _0x2f6ea1) {
  return _0x227284(_0x112ec6, _0x2f6ea1, false);
};