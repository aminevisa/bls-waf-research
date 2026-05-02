var _0x5d3e2c = require("./832.js");
require("./116.js");
require("./270.js");
var _0x419167 = module.exports = _0x5d3e2c.asn1 = _0x5d3e2c.asn1 || {};
function _0x3750e3(_0x4ed9cd, _0x513239, _0x57079d) {
  if (_0x57079d > _0x513239) {
    var _0x41ff72 = new Error("Too few bytes to parse DER.");
    _0x41ff72.available = _0x4ed9cd.length();
    _0x41ff72.remaining = _0x513239;
    _0x41ff72.requested = _0x57079d;
    throw _0x41ff72;
  }
}
_0x419167.Class = {
  UNIVERSAL: 0,
  APPLICATION: 64,
  CONTEXT_SPECIFIC: 128,
  PRIVATE: 192
};
_0x419167.Type = {
  NONE: 0,
  BOOLEAN: 1,
  INTEGER: 2,
  BITSTRING: 3,
  OCTETSTRING: 4,
  NULL: 5,
  OID: 6,
  ODESC: 7,
  EXTERNAL: 8,
  REAL: 9,
  ENUMERATED: 10,
  EMBEDDED: 11,
  UTF8: 12,
  ROID: 13,
  SEQUENCE: 16,
  SET: 17,
  PRINTABLESTRING: 19,
  IA5STRING: 22,
  UTCTIME: 23,
  GENERALIZEDTIME: 24,
  BMPSTRING: 30
};
_0x419167.create = function (_0x16e582, _0x35292d, _0x7c69ea, _0x5dac5c, _0xa5eaeb) {
  if (_0x5d3e2c.util.isArray(_0x5dac5c)) {
    var _0xd2738b = [];
    for (var _0x22f255 = 0; _0x22f255 < _0x5dac5c.length; ++_0x22f255) {
      if (_0x5dac5c[_0x22f255] !== undefined) {
        _0xd2738b.push(_0x5dac5c[_0x22f255]);
      }
    }
    _0x5dac5c = _0xd2738b;
  }
  var _0x3566c0 = {
    tagClass: _0x16e582,
    type: _0x35292d,
    constructed: _0x7c69ea,
    composed: _0x7c69ea || _0x5d3e2c.util.isArray(_0x5dac5c),
    value: _0x5dac5c
  };
  if (_0xa5eaeb && "bitStringContents" in _0xa5eaeb) {
    _0x3566c0.bitStringContents = _0xa5eaeb.bitStringContents;
    _0x3566c0.original = _0x419167.copy(_0x3566c0);
  }
  return _0x3566c0;
};
_0x419167.copy = function (_0x19e989, _0x530e91) {
  var _0x13d299;
  if (_0x5d3e2c.util.isArray(_0x19e989)) {
    _0x13d299 = [];
    for (var _0x31efc3 = 0; _0x31efc3 < _0x19e989.length; ++_0x31efc3) {
      _0x13d299.push(_0x419167.copy(_0x19e989[_0x31efc3], _0x530e91));
    }
    return _0x13d299;
  }
  if (typeof _0x19e989 == "string") {
    return _0x19e989;
  } else {
    _0x13d299 = {
      tagClass: _0x19e989.tagClass,
      type: _0x19e989.type,
      constructed: _0x19e989.constructed,
      composed: _0x19e989.composed,
      value: _0x419167.copy(_0x19e989.value, _0x530e91)
    };
    if (_0x530e91 && !_0x530e91.excludeBitStringContents) {
      _0x13d299.bitStringContents = _0x19e989.bitStringContents;
    }
    return _0x13d299;
  }
};
_0x419167.equals = function (_0x20435f, _0x3ad04e, _0x422096) {
  if (_0x5d3e2c.util.isArray(_0x20435f)) {
    if (!_0x5d3e2c.util.isArray(_0x3ad04e)) {
      return false;
    }
    if (_0x20435f.length !== _0x3ad04e.length) {
      return false;
    }
    for (var _0x47d740 = 0; _0x47d740 < _0x20435f.length; ++_0x47d740) {
      if (!_0x419167.equals(_0x20435f[_0x47d740], _0x3ad04e[_0x47d740])) {
        return false;
      }
    }
    return true;
  }
  if (typeof _0x20435f != typeof _0x3ad04e) {
    return false;
  }
  if (typeof _0x20435f == "string") {
    return _0x20435f === _0x3ad04e;
  }
  var _0x244498 = _0x20435f.tagClass === _0x3ad04e.tagClass && _0x20435f.type === _0x3ad04e.type && _0x20435f.constructed === _0x3ad04e.constructed && _0x20435f.composed === _0x3ad04e.composed && _0x419167.equals(_0x20435f.value, _0x3ad04e.value);
  if (_0x422096 && _0x422096.includeBitStringContents) {
    _0x244498 = _0x244498 && _0x20435f.bitStringContents === _0x3ad04e.bitStringContents;
  }
  return _0x244498;
};
_0x419167.getBerValueLength = function (_0x3f4dfc) {
  var _0x8f5c54 = _0x3f4dfc.getByte();
  if (_0x8f5c54 !== 128) {
    if (_0x8f5c54 & 128) {
      return _0x3f4dfc.getInt((_0x8f5c54 & 127) << 3);
    } else {
      return _0x8f5c54;
    }
  }
};
function _0xb22ab1(_0x30b93e, _0x44f972, _0x5cee0c, _0x5c6747) {
  var _0xf63d0b;
  _0x3750e3(_0x30b93e, _0x44f972, 2);
  var _0x3d0830 = _0x30b93e.getByte();
  _0x44f972--;
  var _0x289f95 = _0x3d0830 & 192;
  var _0x42aa5e = _0x3d0830 & 31;
  _0xf63d0b = _0x30b93e.length();
  var _0x2a1ad8;
  var _0x2dd6d4;
  var _0x2027df = function (_0x5026ce, _0x36d490) {
    var _0xea845c = _0x5026ce.getByte();
    _0x36d490--;
    if (_0xea845c !== 128) {
      var _0x2dd698;
      if (_0xea845c & 128) {
        var _0x2cddfa = _0xea845c & 127;
        _0x3750e3(_0x5026ce, _0x36d490, _0x2cddfa);
        _0x2dd698 = _0x5026ce.getInt(_0x2cddfa << 3);
      } else {
        _0x2dd698 = _0xea845c;
      }
      if (_0x2dd698 < 0) {
        throw new Error("Negative length: " + _0x2dd698);
      }
      return _0x2dd698;
    }
  }(_0x30b93e, _0x44f972);
  _0x44f972 -= _0xf63d0b - _0x30b93e.length();
  if (_0x2027df !== undefined && _0x2027df > _0x44f972) {
    if (_0x5c6747.strict) {
      var _0x1894bc = new Error("Too few bytes to read ASN.1 value.");
      _0x1894bc.available = _0x30b93e.length();
      _0x1894bc.remaining = _0x44f972;
      _0x1894bc.requested = _0x2027df;
      throw _0x1894bc;
    }
    _0x2027df = _0x44f972;
  }
  var _0x1adbde = (_0x3d0830 & 32) == 32;
  if (_0x1adbde) {
    _0x2a1ad8 = [];
    if (_0x2027df === undefined) {
      while (true) {
        _0x3750e3(_0x30b93e, _0x44f972, 2);
        if (_0x30b93e.bytes(2) === String.fromCharCode(0, 0)) {
          _0x30b93e.getBytes(2);
          _0x44f972 -= 2;
          break;
        }
        _0xf63d0b = _0x30b93e.length();
        _0x2a1ad8.push(_0xb22ab1(_0x30b93e, _0x44f972, _0x5cee0c + 1, _0x5c6747));
        _0x44f972 -= _0xf63d0b - _0x30b93e.length();
      }
    } else {
      while (_0x2027df > 0) {
        _0xf63d0b = _0x30b93e.length();
        _0x2a1ad8.push(_0xb22ab1(_0x30b93e, _0x2027df, _0x5cee0c + 1, _0x5c6747));
        _0x44f972 -= _0xf63d0b - _0x30b93e.length();
        _0x2027df -= _0xf63d0b - _0x30b93e.length();
      }
    }
  }
  if (_0x2a1ad8 === undefined && _0x289f95 === _0x419167.Class.UNIVERSAL && _0x42aa5e === _0x419167.Type.BITSTRING) {
    _0x2dd6d4 = _0x30b93e.bytes(_0x2027df);
  }
  if (_0x2a1ad8 === undefined && _0x5c6747.decodeBitStrings && _0x289f95 === _0x419167.Class.UNIVERSAL && _0x42aa5e === _0x419167.Type.BITSTRING && _0x2027df > 1) {
    var _0x53fceb = _0x30b93e.read;
    var _0x151495 = _0x44f972;
    var _0x456f50 = 0;
    if (_0x42aa5e === _0x419167.Type.BITSTRING) {
      _0x3750e3(_0x30b93e, _0x44f972, 1);
      _0x456f50 = _0x30b93e.getByte();
      _0x44f972--;
    }
    if (_0x456f50 === 0) {
      try {
        _0xf63d0b = _0x30b93e.length();
        var _0x21f88b = _0xb22ab1(_0x30b93e, _0x44f972, _0x5cee0c + 1, {
          strict: true,
          decodeBitStrings: true
        });
        var _0x22dba3 = _0xf63d0b - _0x30b93e.length();
        _0x44f972 -= _0x22dba3;
        if (_0x42aa5e == _0x419167.Type.BITSTRING) {
          _0x22dba3++;
        }
        var _0x569c5f = _0x21f88b.tagClass;
        if (_0x22dba3 === _0x2027df && (_0x569c5f === _0x419167.Class.UNIVERSAL || _0x569c5f === _0x419167.Class.CONTEXT_SPECIFIC)) {
          _0x2a1ad8 = [_0x21f88b];
        }
      } catch (_0x4c0259) {}
    }
    if (_0x2a1ad8 === undefined) {
      _0x30b93e.read = _0x53fceb;
      _0x44f972 = _0x151495;
    }
  }
  if (_0x2a1ad8 === undefined) {
    if (_0x2027df === undefined) {
      if (_0x5c6747.strict) {
        throw new Error("Non-constructed ASN.1 object of indefinite length.");
      }
      _0x2027df = _0x44f972;
    }
    if (_0x42aa5e === _0x419167.Type.BMPSTRING) {
      for (_0x2a1ad8 = ""; _0x2027df > 0; _0x2027df -= 2) {
        _0x3750e3(_0x30b93e, _0x44f972, 2);
        _0x2a1ad8 += String.fromCharCode(_0x30b93e.getInt16());
        _0x44f972 -= 2;
      }
    } else {
      _0x2a1ad8 = _0x30b93e.getBytes(_0x2027df);
      _0x44f972 -= _0x2027df;
    }
  }
  var _0x175ad0 = _0x2dd6d4 === undefined ? null : {
    bitStringContents: _0x2dd6d4
  };
  return _0x419167.create(_0x289f95, _0x42aa5e, _0x1adbde, _0x2a1ad8, _0x175ad0);
}
_0x419167.fromDer = function (_0x398adf, _0x2d98e1 = {
  strict: true,
  parseAllBytes: true,
  decodeBitStrings: true
}) {
  if (typeof _0x2d98e1 == "boolean") {
    _0x2d98e1 = {
      strict: _0x2d98e1,
      parseAllBytes: true,
      decodeBitStrings: true
    };
  }
  if (!("strict" in _0x2d98e1)) {
    _0x2d98e1.strict = true;
  }
  if (!("parseAllBytes" in _0x2d98e1)) {
    _0x2d98e1.parseAllBytes = true;
  }
  if (!("decodeBitStrings" in _0x2d98e1)) {
    _0x2d98e1.decodeBitStrings = true;
  }
  if (typeof _0x398adf == "string") {
    _0x398adf = _0x5d3e2c.util.createBuffer(_0x398adf);
  }
  var _0x38f650 = _0x398adf.length();
  var _0x21ce71 = _0xb22ab1(_0x398adf, _0x398adf.length(), 0, _0x2d98e1);
  if (_0x2d98e1.parseAllBytes && _0x398adf.length() !== 0) {
    var _0x2a1d0d = new Error("Unparsed DER bytes remain after ASN.1 parsing.");
    _0x2a1d0d.byteCount = _0x38f650;
    _0x2a1d0d.remaining = _0x398adf.length();
    throw _0x2a1d0d;
  }
  return _0x21ce71;
};
_0x419167.toDer = function (_0x3d7f6d) {
  var _0x4e9f45 = _0x5d3e2c.util.createBuffer();
  var _0x122a4e = _0x3d7f6d.tagClass | _0x3d7f6d.type;
  var _0x29c9b2 = _0x5d3e2c.util.createBuffer();
  var _0x298f6f = false;
  if ("bitStringContents" in _0x3d7f6d) {
    _0x298f6f = true;
    if (_0x3d7f6d.original) {
      _0x298f6f = _0x419167.equals(_0x3d7f6d, _0x3d7f6d.original);
    }
  }
  if (_0x298f6f) {
    _0x29c9b2.putBytes(_0x3d7f6d.bitStringContents);
  } else if (_0x3d7f6d.composed) {
    if (_0x3d7f6d.constructed) {
      _0x122a4e |= 32;
    } else {
      _0x29c9b2.putByte(0);
    }
    for (var _0x38da77 = 0; _0x38da77 < _0x3d7f6d.value.length; ++_0x38da77) {
      if (_0x3d7f6d.value[_0x38da77] !== undefined) {
        _0x29c9b2.putBuffer(_0x419167.toDer(_0x3d7f6d.value[_0x38da77]));
      }
    }
  } else if (_0x3d7f6d.type === _0x419167.Type.BMPSTRING) {
    for (_0x38da77 = 0; _0x38da77 < _0x3d7f6d.value.length; ++_0x38da77) {
      _0x29c9b2.putInt16(_0x3d7f6d.value.charCodeAt(_0x38da77));
    }
  } else if (_0x3d7f6d.type === _0x419167.Type.INTEGER && _0x3d7f6d.value.length > 1 && (_0x3d7f6d.value.charCodeAt(0) === 0 && (_0x3d7f6d.value.charCodeAt(1) & 128) == 0 || _0x3d7f6d.value.charCodeAt(0) === 255 && (_0x3d7f6d.value.charCodeAt(1) & 128) == 128)) {
    _0x29c9b2.putBytes(_0x3d7f6d.value.substr(1));
  } else {
    _0x29c9b2.putBytes(_0x3d7f6d.value);
  }
  _0x4e9f45.putByte(_0x122a4e);
  if (_0x29c9b2.length() <= 127) {
    _0x4e9f45.putByte(_0x29c9b2.length() & 127);
  } else {
    var _0x58f3bb = _0x29c9b2.length();
    var _0x12b0a5 = "";
    do {
      _0x12b0a5 += String.fromCharCode(_0x58f3bb & 255);
      _0x58f3bb >>>= 8;
    } while (_0x58f3bb > 0);
    _0x4e9f45.putByte(_0x12b0a5.length | 128);
    for (_0x38da77 = _0x12b0a5.length - 1; _0x38da77 >= 0; --_0x38da77) {
      _0x4e9f45.putByte(_0x12b0a5.charCodeAt(_0x38da77));
    }
  }
  _0x4e9f45.putBuffer(_0x29c9b2);
  return _0x4e9f45;
};
_0x419167.oidToDer = function (_0x40e264) {
  var _0x532100;
  var _0x57c6ad;
  var _0x288670;
  var _0x5d6118;
  var _0x2b1312 = _0x40e264.split(".");
  var _0x4ec543 = _0x5d3e2c.util.createBuffer();
  _0x4ec543.putByte(parseInt(_0x2b1312[0], 10) * 40 + parseInt(_0x2b1312[1], 10));
  for (var _0x3f82e7 = 2; _0x3f82e7 < _0x2b1312.length; ++_0x3f82e7) {
    _0x532100 = true;
    _0x57c6ad = [];
    _0x288670 = parseInt(_0x2b1312[_0x3f82e7], 10);
    do {
      _0x5d6118 = _0x288670 & 127;
      _0x288670 >>>= 7;
      if (!_0x532100) {
        _0x5d6118 |= 128;
      }
      _0x57c6ad.push(_0x5d6118);
      _0x532100 = false;
    } while (_0x288670 > 0);
    for (var _0x13b6ba = _0x57c6ad.length - 1; _0x13b6ba >= 0; --_0x13b6ba) {
      _0x4ec543.putByte(_0x57c6ad[_0x13b6ba]);
    }
  }
  return _0x4ec543;
};
_0x419167.derToOid = function (_0x451987) {
  var _0x31023c;
  if (typeof _0x451987 == "string") {
    _0x451987 = _0x5d3e2c.util.createBuffer(_0x451987);
  }
  var _0xa23f0c = _0x451987.getByte();
  _0x31023c = Math.floor(_0xa23f0c / 40) + "." + _0xa23f0c % 40;
  for (var _0xb64ea5 = 0; _0x451987.length() > 0;) {
    _0xb64ea5 <<= 7;
    if ((_0xa23f0c = _0x451987.getByte()) & 128) {
      _0xb64ea5 += _0xa23f0c & 127;
    } else {
      _0x31023c += "." + (_0xb64ea5 + _0xa23f0c);
      _0xb64ea5 = 0;
    }
  }
  return _0x31023c;
};
_0x419167.utcTimeToDate = function (_0xebf98d) {
  var _0x432d33 = new Date();
  var _0x42fff3 = parseInt(_0xebf98d.substr(0, 2), 10);
  _0x42fff3 = _0x42fff3 >= 50 ? 1900 + _0x42fff3 : 2000 + _0x42fff3;
  var _0x535450 = parseInt(_0xebf98d.substr(2, 2), 10) - 1;
  var _0x42e786 = parseInt(_0xebf98d.substr(4, 2), 10);
  var _0x47208b = parseInt(_0xebf98d.substr(6, 2), 10);
  var _0x5d265f = parseInt(_0xebf98d.substr(8, 2), 10);
  var _0x385c2e = 0;
  if (_0xebf98d.length > 11) {
    var _0x2f9559 = _0xebf98d.charAt(10);
    var _0x2fed51 = 10;
    if (_0x2f9559 !== "+" && _0x2f9559 !== "-") {
      _0x385c2e = parseInt(_0xebf98d.substr(10, 2), 10);
      _0x2fed51 += 2;
    }
  }
  _0x432d33.setUTCFullYear(_0x42fff3, _0x535450, _0x42e786);
  _0x432d33.setUTCHours(_0x47208b, _0x5d265f, _0x385c2e, 0);
  if (_0x2fed51 && ((_0x2f9559 = _0xebf98d.charAt(_0x2fed51)) === "+" || _0x2f9559 === "-")) {
    var _0x2c2b55 = parseInt(_0xebf98d.substr(_0x2fed51 + 1, 2), 10) * 60 + parseInt(_0xebf98d.substr(_0x2fed51 + 4, 2), 10);
    _0x2c2b55 *= 60000;
    if (_0x2f9559 === "+") {
      _0x432d33.setTime(+_0x432d33 - _0x2c2b55);
    } else {
      _0x432d33.setTime(+_0x432d33 + _0x2c2b55);
    }
  }
  return _0x432d33;
};
_0x419167.generalizedTimeToDate = function (_0x619cd2) {
  var _0x3e1ddc = new Date();
  var _0x1e4cdb = parseInt(_0x619cd2.substr(0, 4), 10);
  var _0x218415 = parseInt(_0x619cd2.substr(4, 2), 10) - 1;
  var _0x319eea = parseInt(_0x619cd2.substr(6, 2), 10);
  var _0x168ee1 = parseInt(_0x619cd2.substr(8, 2), 10);
  var _0x4757e3 = parseInt(_0x619cd2.substr(10, 2), 10);
  var _0x4e9e6b = parseInt(_0x619cd2.substr(12, 2), 10);
  var _0x2af5cd = 0;
  var _0x25bac1 = 0;
  var _0x250cd0 = false;
  if (_0x619cd2.charAt(_0x619cd2.length - 1) === "Z") {
    _0x250cd0 = true;
  }
  var _0x294656 = _0x619cd2.length - 5;
  var _0x1448d2 = _0x619cd2.charAt(_0x294656);
  if (_0x1448d2 === "+" || _0x1448d2 === "-") {
    _0x25bac1 = parseInt(_0x619cd2.substr(_0x294656 + 1, 2), 10) * 60 + parseInt(_0x619cd2.substr(_0x294656 + 4, 2), 10);
    _0x25bac1 *= 60000;
    if (_0x1448d2 === "+") {
      _0x25bac1 *= -1;
    }
    _0x250cd0 = true;
  }
  if (_0x619cd2.charAt(14) === ".") {
    _0x2af5cd = parseFloat(_0x619cd2.substr(14), 10) * 1000;
  }
  if (_0x250cd0) {
    _0x3e1ddc.setUTCFullYear(_0x1e4cdb, _0x218415, _0x319eea);
    _0x3e1ddc.setUTCHours(_0x168ee1, _0x4757e3, _0x4e9e6b, _0x2af5cd);
    _0x3e1ddc.setTime(+_0x3e1ddc + _0x25bac1);
  } else {
    _0x3e1ddc.setFullYear(_0x1e4cdb, _0x218415, _0x319eea);
    _0x3e1ddc.setHours(_0x168ee1, _0x4757e3, _0x4e9e6b, _0x2af5cd);
  }
  return _0x3e1ddc;
};
_0x419167.dateToUtcTime = function (_0x5f0bab) {
  if (typeof _0x5f0bab == "string") {
    return _0x5f0bab;
  }
  var _0x986239 = "";
  var _0x3dc264 = [];
  _0x3dc264.push(("" + _0x5f0bab.getUTCFullYear()).substr(2));
  _0x3dc264.push("" + (_0x5f0bab.getUTCMonth() + 1));
  _0x3dc264.push("" + _0x5f0bab.getUTCDate());
  _0x3dc264.push("" + _0x5f0bab.getUTCHours());
  _0x3dc264.push("" + _0x5f0bab.getUTCMinutes());
  _0x3dc264.push("" + _0x5f0bab.getUTCSeconds());
  for (var _0x1469cc = 0; _0x1469cc < _0x3dc264.length; ++_0x1469cc) {
    if (_0x3dc264[_0x1469cc].length < 2) {
      _0x986239 += "0";
    }
    _0x986239 += _0x3dc264[_0x1469cc];
  }
  return _0x986239 += "Z";
};
_0x419167.dateToGeneralizedTime = function (_0x3c74be) {
  if (typeof _0x3c74be == "string") {
    return _0x3c74be;
  }
  var _0x3bd8ab = "";
  var _0xa2924f = [];
  _0xa2924f.push("" + _0x3c74be.getUTCFullYear());
  _0xa2924f.push("" + (_0x3c74be.getUTCMonth() + 1));
  _0xa2924f.push("" + _0x3c74be.getUTCDate());
  _0xa2924f.push("" + _0x3c74be.getUTCHours());
  _0xa2924f.push("" + _0x3c74be.getUTCMinutes());
  _0xa2924f.push("" + _0x3c74be.getUTCSeconds());
  for (var _0x4a4440 = 0; _0x4a4440 < _0xa2924f.length; ++_0x4a4440) {
    if (_0xa2924f[_0x4a4440].length < 2) {
      _0x3bd8ab += "0";
    }
    _0x3bd8ab += _0xa2924f[_0x4a4440];
  }
  return _0x3bd8ab += "Z";
};
_0x419167.integerToDer = function (_0x3aabd7) {
  var _0x806ba6 = _0x5d3e2c.util.createBuffer();
  if (_0x3aabd7 >= -128 && _0x3aabd7 < 128) {
    return _0x806ba6.putSignedInt(_0x3aabd7, 8);
  }
  if (_0x3aabd7 >= -32768 && _0x3aabd7 < 32768) {
    return _0x806ba6.putSignedInt(_0x3aabd7, 16);
  }
  if (_0x3aabd7 >= -8388608 && _0x3aabd7 < 8388608) {
    return _0x806ba6.putSignedInt(_0x3aabd7, 24);
  }
  if (_0x3aabd7 >= -2147483648 && _0x3aabd7 < 2147483648) {
    return _0x806ba6.putSignedInt(_0x3aabd7, 32);
  }
  var _0x515119 = new Error("Integer too large; max is 32-bits.");
  _0x515119.integer = _0x3aabd7;
  throw _0x515119;
};
_0x419167.derToInteger = function (_0x4dc072) {
  if (typeof _0x4dc072 == "string") {
    _0x4dc072 = _0x5d3e2c.util.createBuffer(_0x4dc072);
  }
  var _0x1baa64 = _0x4dc072.length() * 8;
  if (_0x1baa64 > 32) {
    throw new Error("Integer too large; max is 32-bits.");
  }
  return _0x4dc072.getSignedInt(_0x1baa64);
};
_0x419167.validate = function (_0x155a0d, _0xf30d8, _0xc61abd, _0x29cc0d) {
  var _0x22aae6 = false;
  if (_0x155a0d.tagClass !== _0xf30d8.tagClass && _0xf30d8.tagClass !== undefined || _0x155a0d.type !== _0xf30d8.type && _0xf30d8.type !== undefined) {
    if (_0x29cc0d) {
      if (_0x155a0d.tagClass !== _0xf30d8.tagClass) {
        _0x29cc0d.push("[" + _0xf30d8.name + "] Expected tag class \"" + _0xf30d8.tagClass + "\", got \"" + _0x155a0d.tagClass + "\"");
      }
      if (_0x155a0d.type !== _0xf30d8.type) {
        _0x29cc0d.push("[" + _0xf30d8.name + "] Expected type \"" + _0xf30d8.type + "\", got \"" + _0x155a0d.type + "\"");
      }
    }
  } else if (_0x155a0d.constructed === _0xf30d8.constructed || _0xf30d8.constructed === undefined) {
    _0x22aae6 = true;
    if (_0xf30d8.value && _0x5d3e2c.util.isArray(_0xf30d8.value)) {
      var _0xdeb388 = 0;
      for (var _0x478846 = 0; _0x22aae6 && _0x478846 < _0xf30d8.value.length; ++_0x478846) {
        _0x22aae6 = _0xf30d8.value[_0x478846].optional || false;
        if (_0x155a0d.value[_0xdeb388]) {
          if (_0x22aae6 = _0x419167.validate(_0x155a0d.value[_0xdeb388], _0xf30d8.value[_0x478846], _0xc61abd, _0x29cc0d)) {
            ++_0xdeb388;
          } else if (_0xf30d8.value[_0x478846].optional) {
            _0x22aae6 = true;
          }
        }
        if (!_0x22aae6 && _0x29cc0d) {
          _0x29cc0d.push("[" + _0xf30d8.name + "] Tag class \"" + _0xf30d8.tagClass + "\", type \"" + _0xf30d8.type + "\" expected value length \"" + _0xf30d8.value.length + "\", got \"" + _0x155a0d.value.length + "\"");
        }
      }
    }
    if (_0x22aae6 && _0xc61abd) {
      if (_0xf30d8.capture) {
        _0xc61abd[_0xf30d8.capture] = _0x155a0d.value;
      }
      if (_0xf30d8.captureAsn1) {
        _0xc61abd[_0xf30d8.captureAsn1] = _0x155a0d;
      }
      if (_0xf30d8.captureBitStringContents && "bitStringContents" in _0x155a0d) {
        _0xc61abd[_0xf30d8.captureBitStringContents] = _0x155a0d.bitStringContents;
      }
      if (_0xf30d8.captureBitStringValue && "bitStringContents" in _0x155a0d) {
        if (_0x155a0d.bitStringContents.length < 2) {
          _0xc61abd[_0xf30d8.captureBitStringValue] = "";
        } else {
          if (_0x155a0d.bitStringContents.charCodeAt(0) !== 0) {
            throw new Error("captureBitStringValue only supported for zero unused bits");
          }
          _0xc61abd[_0xf30d8.captureBitStringValue] = _0x155a0d.bitStringContents.slice(1);
        }
      }
    }
  } else if (_0x29cc0d) {
    _0x29cc0d.push("[" + _0xf30d8.name + "] Expected constructed \"" + _0xf30d8.constructed + "\", got \"" + _0x155a0d.constructed + "\"");
  }
  return _0x22aae6;
};
var _0x47796d = /[^\\u0000-\\u00ff]/;
_0x419167.prettyPrint = function (_0x210687, _0x5c0613, _0xe5e544) {
  var _0x1b4ab7 = "";
  _0xe5e544 = _0xe5e544 || 2;
  if ((_0x5c0613 = _0x5c0613 || 0) > 0) {
    _0x1b4ab7 += "\n";
  }
  var _0x1835fd = "";
  for (var _0x19326b = 0; _0x19326b < _0x5c0613 * _0xe5e544; ++_0x19326b) {
    _0x1835fd += " ";
  }
  _0x1b4ab7 += _0x1835fd + "Tag: ";
  switch (_0x210687.tagClass) {
    case _0x419167.Class.UNIVERSAL:
      _0x1b4ab7 += "Universal:";
      break;
    case _0x419167.Class.APPLICATION:
      _0x1b4ab7 += "Application:";
      break;
    case _0x419167.Class.CONTEXT_SPECIFIC:
      _0x1b4ab7 += "Context-Specific:";
      break;
    case _0x419167.Class.PRIVATE:
      _0x1b4ab7 += "Private:";
  }
  if (_0x210687.tagClass === _0x419167.Class.UNIVERSAL) {
    _0x1b4ab7 += _0x210687.type;
    switch (_0x210687.type) {
      case _0x419167.Type.NONE:
        _0x1b4ab7 += " (None)";
        break;
      case _0x419167.Type.BOOLEAN:
        _0x1b4ab7 += " (Boolean)";
        break;
      case _0x419167.Type.INTEGER:
        _0x1b4ab7 += " (Integer)";
        break;
      case _0x419167.Type.BITSTRING:
        _0x1b4ab7 += " (Bit string)";
        break;
      case _0x419167.Type.OCTETSTRING:
        _0x1b4ab7 += " (Octet string)";
        break;
      case _0x419167.Type.NULL:
        _0x1b4ab7 += " (Null)";
        break;
      case _0x419167.Type.OID:
        _0x1b4ab7 += " (Object Identifier)";
        break;
      case _0x419167.Type.ODESC:
        _0x1b4ab7 += " (Object Descriptor)";
        break;
      case _0x419167.Type.EXTERNAL:
        _0x1b4ab7 += " (External or Instance of)";
        break;
      case _0x419167.Type.REAL:
        _0x1b4ab7 += " (Real)";
        break;
      case _0x419167.Type.ENUMERATED:
        _0x1b4ab7 += " (Enumerated)";
        break;
      case _0x419167.Type.EMBEDDED:
        _0x1b4ab7 += " (Embedded PDV)";
        break;
      case _0x419167.Type.UTF8:
        _0x1b4ab7 += " (UTF8)";
        break;
      case _0x419167.Type.ROID:
        _0x1b4ab7 += " (Relative Object Identifier)";
        break;
      case _0x419167.Type.SEQUENCE:
        _0x1b4ab7 += " (Sequence)";
        break;
      case _0x419167.Type.SET:
        _0x1b4ab7 += " (Set)";
        break;
      case _0x419167.Type.PRINTABLESTRING:
        _0x1b4ab7 += " (Printable String)";
        break;
      case _0x419167.Type.IA5String:
        _0x1b4ab7 += " (IA5String (ASCII))";
        break;
      case _0x419167.Type.UTCTIME:
        _0x1b4ab7 += " (UTC time)";
        break;
      case _0x419167.Type.GENERALIZEDTIME:
        _0x1b4ab7 += " (Generalized time)";
        break;
      case _0x419167.Type.BMPSTRING:
        _0x1b4ab7 += " (BMP String)";
    }
  } else {
    _0x1b4ab7 += _0x210687.type;
  }
  _0x1b4ab7 += "\n";
  _0x1b4ab7 += _0x1835fd + "Constructed: " + _0x210687.constructed + "\n";
  if (_0x210687.composed) {
    var _0x539a28 = 0;
    var _0x347802 = "";
    for (_0x19326b = 0; _0x19326b < _0x210687.value.length; ++_0x19326b) {
      if (_0x210687.value[_0x19326b] !== undefined) {
        _0x539a28 += 1;
        _0x347802 += _0x419167.prettyPrint(_0x210687.value[_0x19326b], _0x5c0613 + 1, _0xe5e544);
        if (_0x19326b + 1 < _0x210687.value.length) {
          _0x347802 += ",";
        }
      }
    }
    _0x1b4ab7 += _0x1835fd + "Sub values: " + _0x539a28 + _0x347802;
  } else {
    _0x1b4ab7 += _0x1835fd + "Value: ";
    if (_0x210687.type === _0x419167.Type.OID) {
      var _0x575fcd = _0x419167.derToOid(_0x210687.value);
      _0x1b4ab7 += _0x575fcd;
      if (_0x5d3e2c.pki && _0x5d3e2c.pki.oids && _0x575fcd in _0x5d3e2c.pki.oids) {
        _0x1b4ab7 += " (" + _0x5d3e2c.pki.oids[_0x575fcd] + ") ";
      }
    }
    if (_0x210687.type === _0x419167.Type.INTEGER) {
      try {
        _0x1b4ab7 += _0x419167.derToInteger(_0x210687.value);
      } catch (_0x2bde0a) {
        _0x1b4ab7 += "0x" + _0x5d3e2c.util.bytesToHex(_0x210687.value);
      }
    } else if (_0x210687.type === _0x419167.Type.BITSTRING) {
      if (_0x210687.value.length > 1) {
        _0x1b4ab7 += "0x" + _0x5d3e2c.util.bytesToHex(_0x210687.value.slice(1));
      } else {
        _0x1b4ab7 += "(none)";
      }
      if (_0x210687.value.length > 0) {
        var _0xe6e58d = _0x210687.value.charCodeAt(0);
        if (_0xe6e58d == 1) {
          _0x1b4ab7 += " (1 unused bit shown)";
        } else if (_0xe6e58d > 1) {
          _0x1b4ab7 += " (" + _0xe6e58d + " unused bits shown)";
        }
      }
    } else if (_0x210687.type === _0x419167.Type.OCTETSTRING) {
      if (!_0x47796d.test(_0x210687.value)) {
        _0x1b4ab7 += "(" + _0x210687.value + ") ";
      }
      _0x1b4ab7 += "0x" + _0x5d3e2c.util.bytesToHex(_0x210687.value);
    } else if (_0x210687.type === _0x419167.Type.UTF8) {
      try {
        _0x1b4ab7 += _0x5d3e2c.util.decodeUtf8(_0x210687.value);
      } catch (_0x3cf72c) {
        if (_0x3cf72c.message !== "URI malformed") {
          throw _0x3cf72c;
        }
        _0x1b4ab7 += "0x" + _0x5d3e2c.util.bytesToHex(_0x210687.value) + " (malformed UTF8)";
      }
    } else if (_0x210687.type === _0x419167.Type.PRINTABLESTRING || _0x210687.type === _0x419167.Type.IA5String) {
      _0x1b4ab7 += _0x210687.value;
    } else if (_0x47796d.test(_0x210687.value)) {
      _0x1b4ab7 += "0x" + _0x5d3e2c.util.bytesToHex(_0x210687.value);
    } else if (_0x210687.value.length === 0) {
      _0x1b4ab7 += "[null]";
    } else {
      _0x1b4ab7 += _0x210687.value;
    }
  }
  return _0x1b4ab7;
};