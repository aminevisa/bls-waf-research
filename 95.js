var _0x4647a3 = require("./832.js");
require("./68.js");
require("./764.js");
require("./270.js");
require("./936.js");
require("./654.js");
require("./563.js");
require("./116.js");
if (_0x413dfe === undefined) {
  var _0x413dfe = _0x4647a3.jsbn.BigInteger;
}
var _0x2779dc = _0x4647a3.util.isNodejs ? require("./819.js") : null;
var _0x2c4f51 = _0x4647a3.asn1;
var _0x197ca6 = _0x4647a3.util;
_0x4647a3.pki = _0x4647a3.pki || {};
module.exports = _0x4647a3.pki.rsa = _0x4647a3.rsa = _0x4647a3.rsa || {};
var _0x15ae5b = _0x4647a3.pki;
var _0x4f5d9a = [6, 4, 2, 4, 2, 4, 6, 2];
var _0x575b92 = {
  name: "PrivateKeyInfo",
  tagClass: _0x2c4f51.Class.UNIVERSAL,
  type: _0x2c4f51.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "PrivateKeyInfo.version",
    tagClass: _0x2c4f51.Class.UNIVERSAL,
    type: _0x2c4f51.Type.INTEGER,
    constructed: false,
    capture: "privateKeyVersion"
  }, {
    name: "PrivateKeyInfo.privateKeyAlgorithm",
    tagClass: _0x2c4f51.Class.UNIVERSAL,
    type: _0x2c4f51.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "AlgorithmIdentifier.algorithm",
      tagClass: _0x2c4f51.Class.UNIVERSAL,
      type: _0x2c4f51.Type.OID,
      constructed: false,
      capture: "privateKeyOid"
    }]
  }, {
    name: "PrivateKeyInfo",
    tagClass: _0x2c4f51.Class.UNIVERSAL,
    type: _0x2c4f51.Type.OCTETSTRING,
    constructed: false,
    capture: "privateKey"
  }]
};
var _0xe8c343 = {
  name: "RSAPrivateKey",
  tagClass: _0x2c4f51.Class.UNIVERSAL,
  type: _0x2c4f51.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "RSAPrivateKey.version",
    tagClass: _0x2c4f51.Class.UNIVERSAL,
    type: _0x2c4f51.Type.INTEGER,
    constructed: false,
    capture: "privateKeyVersion"
  }, {
    name: "RSAPrivateKey.modulus",
    tagClass: _0x2c4f51.Class.UNIVERSAL,
    type: _0x2c4f51.Type.INTEGER,
    constructed: false,
    capture: "privateKeyModulus"
  }, {
    name: "RSAPrivateKey.publicExponent",
    tagClass: _0x2c4f51.Class.UNIVERSAL,
    type: _0x2c4f51.Type.INTEGER,
    constructed: false,
    capture: "privateKeyPublicExponent"
  }, {
    name: "RSAPrivateKey.privateExponent",
    tagClass: _0x2c4f51.Class.UNIVERSAL,
    type: _0x2c4f51.Type.INTEGER,
    constructed: false,
    capture: "privateKeyPrivateExponent"
  }, {
    name: "RSAPrivateKey.prime1",
    tagClass: _0x2c4f51.Class.UNIVERSAL,
    type: _0x2c4f51.Type.INTEGER,
    constructed: false,
    capture: "privateKeyPrime1"
  }, {
    name: "RSAPrivateKey.prime2",
    tagClass: _0x2c4f51.Class.UNIVERSAL,
    type: _0x2c4f51.Type.INTEGER,
    constructed: false,
    capture: "privateKeyPrime2"
  }, {
    name: "RSAPrivateKey.exponent1",
    tagClass: _0x2c4f51.Class.UNIVERSAL,
    type: _0x2c4f51.Type.INTEGER,
    constructed: false,
    capture: "privateKeyExponent1"
  }, {
    name: "RSAPrivateKey.exponent2",
    tagClass: _0x2c4f51.Class.UNIVERSAL,
    type: _0x2c4f51.Type.INTEGER,
    constructed: false,
    capture: "privateKeyExponent2"
  }, {
    name: "RSAPrivateKey.coefficient",
    tagClass: _0x2c4f51.Class.UNIVERSAL,
    type: _0x2c4f51.Type.INTEGER,
    constructed: false,
    capture: "privateKeyCoefficient"
  }]
};
var _0x5c3c06 = {
  name: "RSAPublicKey",
  tagClass: _0x2c4f51.Class.UNIVERSAL,
  type: _0x2c4f51.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "RSAPublicKey.modulus",
    tagClass: _0x2c4f51.Class.UNIVERSAL,
    type: _0x2c4f51.Type.INTEGER,
    constructed: false,
    capture: "publicKeyModulus"
  }, {
    name: "RSAPublicKey.exponent",
    tagClass: _0x2c4f51.Class.UNIVERSAL,
    type: _0x2c4f51.Type.INTEGER,
    constructed: false,
    capture: "publicKeyExponent"
  }]
};
var _0x510dd4 = _0x4647a3.pki.rsa.publicKeyValidator = {
  name: "SubjectPublicKeyInfo",
  tagClass: _0x2c4f51.Class.UNIVERSAL,
  type: _0x2c4f51.Type.SEQUENCE,
  constructed: true,
  captureAsn1: "subjectPublicKeyInfo",
  value: [{
    name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
    tagClass: _0x2c4f51.Class.UNIVERSAL,
    type: _0x2c4f51.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "AlgorithmIdentifier.algorithm",
      tagClass: _0x2c4f51.Class.UNIVERSAL,
      type: _0x2c4f51.Type.OID,
      constructed: false,
      capture: "publicKeyOid"
    }]
  }, {
    name: "SubjectPublicKeyInfo.subjectPublicKey",
    tagClass: _0x2c4f51.Class.UNIVERSAL,
    type: _0x2c4f51.Type.BITSTRING,
    constructed: false,
    value: [{
      name: "SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey",
      tagClass: _0x2c4f51.Class.UNIVERSAL,
      type: _0x2c4f51.Type.SEQUENCE,
      constructed: true,
      optional: true,
      captureAsn1: "rsaPublicKey"
    }]
  }]
};
var _0x1a1a4c = {
  name: "DigestInfo",
  tagClass: _0x2c4f51.Class.UNIVERSAL,
  type: _0x2c4f51.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "DigestInfo.DigestAlgorithm",
    tagClass: _0x2c4f51.Class.UNIVERSAL,
    type: _0x2c4f51.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "DigestInfo.DigestAlgorithm.algorithmIdentifier",
      tagClass: _0x2c4f51.Class.UNIVERSAL,
      type: _0x2c4f51.Type.OID,
      constructed: false,
      capture: "algorithmIdentifier"
    }, {
      name: "DigestInfo.DigestAlgorithm.parameters",
      tagClass: _0x2c4f51.Class.UNIVERSAL,
      type: _0x2c4f51.Type.NULL,
      capture: "parameters",
      optional: true,
      constructed: false
    }]
  }, {
    name: "DigestInfo.digest",
    tagClass: _0x2c4f51.Class.UNIVERSAL,
    type: _0x2c4f51.Type.OCTETSTRING,
    constructed: false,
    capture: "digest"
  }]
};
function _0xda14b2(_0x58d855) {
  var _0xde9cd9;
  if (!(_0x58d855.algorithm in _0x15ae5b.oids)) {
    var _0x3ba824 = new Error("Unknown message digest algorithm.");
    _0x3ba824.algorithm = _0x58d855.algorithm;
    throw _0x3ba824;
  }
  _0xde9cd9 = _0x15ae5b.oids[_0x58d855.algorithm];
  var _0x2ffe78 = _0x2c4f51.oidToDer(_0xde9cd9).getBytes();
  var _0x41fe30 = _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.SEQUENCE, true, []);
  var _0x3a4550 = _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.SEQUENCE, true, []);
  _0x3a4550.value.push(_0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.OID, false, _0x2ffe78));
  _0x3a4550.value.push(_0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.NULL, false, ""));
  var _0x250742 = _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.OCTETSTRING, false, _0x58d855.digest().getBytes());
  _0x41fe30.value.push(_0x3a4550);
  _0x41fe30.value.push(_0x250742);
  return _0x2c4f51.toDer(_0x41fe30).getBytes();
}
function _0x37561f(_0x444ec4, _0x2653c3, _0x58defd) {
  if (_0x58defd) {
    return _0x444ec4.modPow(_0x2653c3.e, _0x2653c3.n);
  }
  if (!_0x2653c3.p || !_0x2653c3.q) {
    return _0x444ec4.modPow(_0x2653c3.d, _0x2653c3.n);
  }
  var _0x3a48d8;
  _0x2653c3.dP ||= _0x2653c3.d.mod(_0x2653c3.p.subtract(_0x413dfe.ONE));
  _0x2653c3.dQ ||= _0x2653c3.d.mod(_0x2653c3.q.subtract(_0x413dfe.ONE));
  _0x2653c3.qInv ||= _0x2653c3.q.modInverse(_0x2653c3.p);
  do {
    _0x3a48d8 = new _0x413dfe(_0x4647a3.util.bytesToHex(_0x4647a3.random.getBytes(_0x2653c3.n.bitLength() / 8)), 16);
  } while (_0x3a48d8.compareTo(_0x2653c3.n) >= 0 || !_0x3a48d8.gcd(_0x2653c3.n).equals(_0x413dfe.ONE));
  for (var _0x252e88 = (_0x444ec4 = _0x444ec4.multiply(_0x3a48d8.modPow(_0x2653c3.e, _0x2653c3.n)).mod(_0x2653c3.n)).mod(_0x2653c3.p).modPow(_0x2653c3.dP, _0x2653c3.p), _0x38fe10 = _0x444ec4.mod(_0x2653c3.q).modPow(_0x2653c3.dQ, _0x2653c3.q); _0x252e88.compareTo(_0x38fe10) < 0;) {
    _0x252e88 = _0x252e88.add(_0x2653c3.p);
  }
  var _0x2582ee = _0x252e88.subtract(_0x38fe10).multiply(_0x2653c3.qInv).mod(_0x2653c3.p).multiply(_0x2653c3.q).add(_0x38fe10);
  return _0x2582ee = _0x2582ee.multiply(_0x3a48d8.modInverse(_0x2653c3.n)).mod(_0x2653c3.n);
}
function _0x33b812(_0xf9f592, _0x312186, _0x24acd5) {
  var _0x598ca1 = _0x4647a3.util.createBuffer();
  var _0x58dd6d = Math.ceil(_0x312186.n.bitLength() / 8);
  if (_0xf9f592.length > _0x58dd6d - 11) {
    var _0x582c15 = new Error("Message is too long for PKCS#1 v1.5 padding.");
    _0x582c15.length = _0xf9f592.length;
    _0x582c15.max = _0x58dd6d - 11;
    throw _0x582c15;
  }
  _0x598ca1.putByte(0);
  _0x598ca1.putByte(_0x24acd5);
  var _0x25f82d;
  var _0x47bb6e = _0x58dd6d - 3 - _0xf9f592.length;
  if (_0x24acd5 === 0 || _0x24acd5 === 1) {
    _0x25f82d = _0x24acd5 === 0 ? 0 : 255;
    for (var _0x5b5e63 = 0; _0x5b5e63 < _0x47bb6e; ++_0x5b5e63) {
      _0x598ca1.putByte(_0x25f82d);
    }
  } else {
    while (_0x47bb6e > 0) {
      var _0x55ea59 = 0;
      var _0x2f5407 = _0x4647a3.random.getBytes(_0x47bb6e);
      for (_0x5b5e63 = 0; _0x5b5e63 < _0x47bb6e; ++_0x5b5e63) {
        if ((_0x25f82d = _0x2f5407.charCodeAt(_0x5b5e63)) === 0) {
          ++_0x55ea59;
        } else {
          _0x598ca1.putByte(_0x25f82d);
        }
      }
      _0x47bb6e = _0x55ea59;
    }
  }
  _0x598ca1.putByte(0);
  _0x598ca1.putBytes(_0xf9f592);
  return _0x598ca1;
}
function _0x5ad1a2(_0x16cc44, _0x4fbf78, _0x2d8d3d, _0x2bef46) {
  var _0x55673b = Math.ceil(_0x4fbf78.n.bitLength() / 8);
  var _0x281760 = _0x4647a3.util.createBuffer(_0x16cc44);
  var _0x59bc76 = _0x281760.getByte();
  var _0x182839 = _0x281760.getByte();
  if (_0x59bc76 !== 0 || _0x2d8d3d && _0x182839 !== 0 && _0x182839 !== 1 || !_0x2d8d3d && _0x182839 != 2 || _0x2d8d3d && _0x182839 === 0 && _0x2bef46 === undefined) {
    throw new Error("Encryption block is invalid.");
  }
  var _0x3aaa7 = 0;
  if (_0x182839 === 0) {
    _0x3aaa7 = _0x55673b - 3 - _0x2bef46;
    for (var _0x1382cf = 0; _0x1382cf < _0x3aaa7; ++_0x1382cf) {
      if (_0x281760.getByte() !== 0) {
        throw new Error("Encryption block is invalid.");
      }
    }
  } else if (_0x182839 === 1) {
    for (_0x3aaa7 = 0; _0x281760.length() > 1;) {
      if (_0x281760.getByte() !== 255) {
        --_0x281760.read;
        break;
      }
      ++_0x3aaa7;
    }
  } else if (_0x182839 === 2) {
    for (_0x3aaa7 = 0; _0x281760.length() > 1;) {
      if (_0x281760.getByte() === 0) {
        --_0x281760.read;
        break;
      }
      ++_0x3aaa7;
    }
  }
  if (_0x281760.getByte() !== 0 || _0x3aaa7 !== _0x55673b - 3 - _0x281760.length()) {
    throw new Error("Encryption block is invalid.");
  }
  return _0x281760.getBytes();
}
function _0x550891(_0x5d4f4e, _0x516ae9, _0x172e50) {
  if (typeof _0x516ae9 == "function") {
    _0x172e50 = _0x516ae9;
    _0x516ae9 = {};
  }
  var _0x2a0582 = {
    algorithm: {
      name: (_0x516ae9 = _0x516ae9 || {}).algorithm || "PRIMEINC",
      options: {
        workers: _0x516ae9.workers || 2,
        workLoad: _0x516ae9.workLoad || 100,
        workerScript: _0x516ae9.workerScript
      }
    }
  };
  function _0xc1ef84() {
    _0x5611c9(_0x5d4f4e.pBits, function (_0x56e7ab, _0x4fbb01) {
      if (_0x56e7ab) {
        return _0x172e50(_0x56e7ab);
      } else {
        _0x5d4f4e.p = _0x4fbb01;
        if (_0x5d4f4e.q !== null) {
          return _0x373f35(_0x56e7ab, _0x5d4f4e.q);
        } else {
          _0x5611c9(_0x5d4f4e.qBits, _0x373f35);
          return;
        }
      }
    });
  }
  function _0x5611c9(_0xf42c55, _0x99c2fc) {
    _0x4647a3.prime.generateProbablePrime(_0xf42c55, _0x2a0582, _0x99c2fc);
  }
  function _0x373f35(_0x34635d, _0x3a7618) {
    if (_0x34635d) {
      return _0x172e50(_0x34635d);
    }
    _0x5d4f4e.q = _0x3a7618;
    if (_0x5d4f4e.p.compareTo(_0x5d4f4e.q) < 0) {
      var _0x1a3195 = _0x5d4f4e.p;
      _0x5d4f4e.p = _0x5d4f4e.q;
      _0x5d4f4e.q = _0x1a3195;
    }
    if (_0x5d4f4e.p.subtract(_0x413dfe.ONE).gcd(_0x5d4f4e.e).compareTo(_0x413dfe.ONE) !== 0) {
      _0x5d4f4e.p = null;
      _0xc1ef84();
      return;
    }
    if (_0x5d4f4e.q.subtract(_0x413dfe.ONE).gcd(_0x5d4f4e.e).compareTo(_0x413dfe.ONE) !== 0) {
      _0x5d4f4e.q = null;
      _0x5611c9(_0x5d4f4e.qBits, _0x373f35);
      return;
    }
    _0x5d4f4e.p1 = _0x5d4f4e.p.subtract(_0x413dfe.ONE);
    _0x5d4f4e.q1 = _0x5d4f4e.q.subtract(_0x413dfe.ONE);
    _0x5d4f4e.phi = _0x5d4f4e.p1.multiply(_0x5d4f4e.q1);
    if (_0x5d4f4e.phi.gcd(_0x5d4f4e.e).compareTo(_0x413dfe.ONE) !== 0) {
      _0x5d4f4e.p = _0x5d4f4e.q = null;
      _0xc1ef84();
      return;
    }
    _0x5d4f4e.n = _0x5d4f4e.p.multiply(_0x5d4f4e.q);
    if (_0x5d4f4e.n.bitLength() !== _0x5d4f4e.bits) {
      _0x5d4f4e.q = null;
      _0x5611c9(_0x5d4f4e.qBits, _0x373f35);
      return;
    }
    var _0x314237 = _0x5d4f4e.e.modInverse(_0x5d4f4e.phi);
    _0x5d4f4e.keys = {
      privateKey: _0x15ae5b.rsa.setPrivateKey(_0x5d4f4e.n, _0x5d4f4e.e, _0x314237, _0x5d4f4e.p, _0x5d4f4e.q, _0x314237.mod(_0x5d4f4e.p1), _0x314237.mod(_0x5d4f4e.q1), _0x5d4f4e.q.modInverse(_0x5d4f4e.p)),
      publicKey: _0x15ae5b.rsa.setPublicKey(_0x5d4f4e.n, _0x5d4f4e.e)
    };
    _0x172e50(null, _0x5d4f4e.keys);
  }
  if ("prng" in _0x516ae9) {
    _0x2a0582.prng = _0x516ae9.prng;
  }
  _0xc1ef84();
}
function _0x2f1ac6(_0x2361c6) {
  var _0x56609b = _0x2361c6.toString(16);
  if (_0x56609b[0] >= "8") {
    _0x56609b = "00" + _0x56609b;
  }
  var _0x33f048 = _0x4647a3.util.hexToBytes(_0x56609b);
  if (_0x33f048.length > 1 && (_0x33f048.charCodeAt(0) === 0 && (_0x33f048.charCodeAt(1) & 128) == 0 || _0x33f048.charCodeAt(0) === 255 && (_0x33f048.charCodeAt(1) & 128) == 128)) {
    return _0x33f048.substr(1);
  } else {
    return _0x33f048;
  }
}
function _0x40efad(_0x546057) {
  if (_0x546057 <= 100) {
    return 27;
  } else if (_0x546057 <= 150) {
    return 18;
  } else if (_0x546057 <= 200) {
    return 15;
  } else if (_0x546057 <= 250) {
    return 12;
  } else if (_0x546057 <= 300) {
    return 9;
  } else if (_0x546057 <= 350) {
    return 8;
  } else if (_0x546057 <= 400) {
    return 7;
  } else if (_0x546057 <= 500) {
    return 6;
  } else if (_0x546057 <= 600) {
    return 5;
  } else if (_0x546057 <= 800) {
    return 4;
  } else if (_0x546057 <= 1250) {
    return 3;
  } else {
    return 2;
  }
}
function _0x2210b6(_0xb111d3) {
  return _0x4647a3.util.isNodejs && typeof _0x2779dc[_0xb111d3] == "function";
}
function _0x192970(_0x473aaf) {
  return _0x197ca6.globalScope !== undefined && typeof _0x197ca6.globalScope.crypto == "object" && typeof _0x197ca6.globalScope.crypto.subtle == "object" && typeof _0x197ca6.globalScope.crypto.subtle[_0x473aaf] == "function";
}
function _0xbbb21f(_0x5cf32d) {
  return _0x197ca6.globalScope !== undefined && typeof _0x197ca6.globalScope.msCrypto == "object" && typeof _0x197ca6.globalScope.msCrypto.subtle == "object" && typeof _0x197ca6.globalScope.msCrypto.subtle[_0x5cf32d] == "function";
}
function _0x1ce77e(_0x36fe3c) {
  for (var _0x3b3db2 = _0x4647a3.util.hexToBytes(_0x36fe3c.toString(16)), _0x418fba = new Uint8Array(_0x3b3db2.length), _0x4f36cc = 0; _0x4f36cc < _0x3b3db2.length; ++_0x4f36cc) {
    _0x418fba[_0x4f36cc] = _0x3b3db2.charCodeAt(_0x4f36cc);
  }
  return _0x418fba;
}
_0x15ae5b.rsa.encrypt = function (_0x1304bc, _0x579c1a, _0xd1fdef) {
  var _0x280835;
  var _0x17fdf1 = _0xd1fdef;
  var _0x1a743d = Math.ceil(_0x579c1a.n.bitLength() / 8);
  if (_0xd1fdef !== false && _0xd1fdef !== true) {
    _0x17fdf1 = _0xd1fdef === 2;
    _0x280835 = _0x33b812(_0x1304bc, _0x579c1a, _0xd1fdef);
  } else {
    (_0x280835 = _0x4647a3.util.createBuffer()).putBytes(_0x1304bc);
  }
  var _0x341305 = new _0x413dfe(_0x280835.toHex(), 16);
  var _0xc39083 = _0x37561f(_0x341305, _0x579c1a, _0x17fdf1).toString(16);
  var _0x332838 = _0x4647a3.util.createBuffer();
  for (var _0x1b16c3 = _0x1a743d - Math.ceil(_0xc39083.length / 2); _0x1b16c3 > 0;) {
    _0x332838.putByte(0);
    --_0x1b16c3;
  }
  _0x332838.putBytes(_0x4647a3.util.hexToBytes(_0xc39083));
  return _0x332838.getBytes();
};
_0x15ae5b.rsa.decrypt = function (_0x262262, _0x2d8dc8, _0x447ed7, _0x1afd6c) {
  var _0x34d166 = Math.ceil(_0x2d8dc8.n.bitLength() / 8);
  if (_0x262262.length !== _0x34d166) {
    var _0x23b8b2 = new Error("Encrypted message length is invalid.");
    _0x23b8b2.length = _0x262262.length;
    _0x23b8b2.expected = _0x34d166;
    throw _0x23b8b2;
  }
  var _0x5ed90d = new _0x413dfe(_0x4647a3.util.createBuffer(_0x262262).toHex(), 16);
  if (_0x5ed90d.compareTo(_0x2d8dc8.n) >= 0) {
    throw new Error("Encrypted message is invalid.");
  }
  var _0x123068 = _0x37561f(_0x5ed90d, _0x2d8dc8, _0x447ed7).toString(16);
  var _0x526966 = _0x4647a3.util.createBuffer();
  for (var _0x2c95f3 = _0x34d166 - Math.ceil(_0x123068.length / 2); _0x2c95f3 > 0;) {
    _0x526966.putByte(0);
    --_0x2c95f3;
  }
  _0x526966.putBytes(_0x4647a3.util.hexToBytes(_0x123068));
  if (_0x1afd6c !== false) {
    return _0x5ad1a2(_0x526966.getBytes(), _0x2d8dc8, _0x447ed7);
  } else {
    return _0x526966.getBytes();
  }
};
_0x15ae5b.rsa.createKeyPairGenerationState = function (_0x270190, _0x169b32, _0x57ee6d) {
  if (typeof _0x270190 == "string") {
    _0x270190 = parseInt(_0x270190, 10);
  }
  _0x270190 = _0x270190 || 2048;
  var _0x47c8bb;
  var _0xb8829c = (_0x57ee6d = _0x57ee6d || {}).prng || _0x4647a3.random;
  var _0x490892 = {
    nextBytes: function (_0xd6ba54) {
      var _0x391de6 = _0xb8829c.getBytesSync(_0xd6ba54.length);
      for (var _0x2a510d = 0; _0x2a510d < _0xd6ba54.length; ++_0x2a510d) {
        _0xd6ba54[_0x2a510d] = _0x391de6.charCodeAt(_0x2a510d);
      }
    }
  };
  var _0x3f6eae = _0x57ee6d.algorithm || "PRIMEINC";
  if (_0x3f6eae !== "PRIMEINC") {
    throw new Error("Invalid key generation algorithm: " + _0x3f6eae);
  }
  (_0x47c8bb = {
    algorithm: _0x3f6eae,
    state: 0,
    bits: _0x270190,
    rng: _0x490892,
    eInt: _0x169b32 || 65537,
    e: new _0x413dfe(null),
    p: null,
    q: null,
    qBits: _0x270190 >> 1,
    pBits: _0x270190 - (_0x270190 >> 1),
    pqState: 0,
    num: null,
    keys: null
  }).e.fromInt(_0x47c8bb.eInt);
  return _0x47c8bb;
};
_0x15ae5b.rsa.stepKeyPairGenerationState = function (_0x4a4411, _0x52a097) {
  if (!("algorithm" in _0x4a4411)) {
    _0x4a4411.algorithm = "PRIMEINC";
  }
  var _0x48c64f = new _0x413dfe(null);
  _0x48c64f.fromInt(30);
  var _0x29e92f;
  for (var _0x2ac835 = 0, _0x473a69 = function (_0x147d53, _0x41b831) {
      return _0x147d53 | _0x41b831;
    }, _0x32ffe4 = +new Date(), _0x579a8a = 0; _0x4a4411.keys === null && (_0x52a097 <= 0 || _0x579a8a < _0x52a097);) {
    if (_0x4a4411.state === 0) {
      var _0x3fe716 = _0x4a4411.p === null ? _0x4a4411.pBits : _0x4a4411.qBits;
      var _0x190ddb = _0x3fe716 - 1;
      if (_0x4a4411.pqState === 0) {
        _0x4a4411.num = new _0x413dfe(_0x3fe716, _0x4a4411.rng);
        if (!_0x4a4411.num.testBit(_0x190ddb)) {
          _0x4a4411.num.bitwiseTo(_0x413dfe.ONE.shiftLeft(_0x190ddb), _0x473a69, _0x4a4411.num);
        }
        _0x4a4411.num.dAddOffset(31 - _0x4a4411.num.mod(_0x48c64f).byteValue(), 0);
        _0x2ac835 = 0;
        ++_0x4a4411.pqState;
      } else if (_0x4a4411.pqState === 1) {
        if (_0x4a4411.num.bitLength() > _0x3fe716) {
          _0x4a4411.pqState = 0;
        } else if (_0x4a4411.num.isProbablePrime(_0x40efad(_0x4a4411.num.bitLength()))) {
          ++_0x4a4411.pqState;
        } else {
          _0x4a4411.num.dAddOffset(_0x4f5d9a[_0x2ac835++ % 8], 0);
        }
      } else if (_0x4a4411.pqState === 2) {
        _0x4a4411.pqState = _0x4a4411.num.subtract(_0x413dfe.ONE).gcd(_0x4a4411.e).compareTo(_0x413dfe.ONE) === 0 ? 3 : 0;
      } else if (_0x4a4411.pqState === 3) {
        _0x4a4411.pqState = 0;
        if (_0x4a4411.p === null) {
          _0x4a4411.p = _0x4a4411.num;
        } else {
          _0x4a4411.q = _0x4a4411.num;
        }
        if (_0x4a4411.p !== null && _0x4a4411.q !== null) {
          ++_0x4a4411.state;
        }
        _0x4a4411.num = null;
      }
    } else if (_0x4a4411.state === 1) {
      if (_0x4a4411.p.compareTo(_0x4a4411.q) < 0) {
        _0x4a4411.num = _0x4a4411.p;
        _0x4a4411.p = _0x4a4411.q;
        _0x4a4411.q = _0x4a4411.num;
      }
      ++_0x4a4411.state;
    } else if (_0x4a4411.state === 2) {
      _0x4a4411.p1 = _0x4a4411.p.subtract(_0x413dfe.ONE);
      _0x4a4411.q1 = _0x4a4411.q.subtract(_0x413dfe.ONE);
      _0x4a4411.phi = _0x4a4411.p1.multiply(_0x4a4411.q1);
      ++_0x4a4411.state;
    } else if (_0x4a4411.state === 3) {
      if (_0x4a4411.phi.gcd(_0x4a4411.e).compareTo(_0x413dfe.ONE) === 0) {
        ++_0x4a4411.state;
      } else {
        _0x4a4411.p = null;
        _0x4a4411.q = null;
        _0x4a4411.state = 0;
      }
    } else if (_0x4a4411.state === 4) {
      _0x4a4411.n = _0x4a4411.p.multiply(_0x4a4411.q);
      if (_0x4a4411.n.bitLength() === _0x4a4411.bits) {
        ++_0x4a4411.state;
      } else {
        _0x4a4411.q = null;
        _0x4a4411.state = 0;
      }
    } else if (_0x4a4411.state === 5) {
      var _0x1389a3 = _0x4a4411.e.modInverse(_0x4a4411.phi);
      _0x4a4411.keys = {
        privateKey: _0x15ae5b.rsa.setPrivateKey(_0x4a4411.n, _0x4a4411.e, _0x1389a3, _0x4a4411.p, _0x4a4411.q, _0x1389a3.mod(_0x4a4411.p1), _0x1389a3.mod(_0x4a4411.q1), _0x4a4411.q.modInverse(_0x4a4411.p)),
        publicKey: _0x15ae5b.rsa.setPublicKey(_0x4a4411.n, _0x4a4411.e)
      };
    }
    _0x579a8a += (_0x29e92f = +new Date()) - _0x32ffe4;
    _0x32ffe4 = _0x29e92f;
  }
  return _0x4a4411.keys !== null;
};
_0x15ae5b.rsa.generateKeyPair = function (_0xa791f1, _0x37db9f, _0x3799e4, _0x1529cd) {
  if (arguments.length === 1) {
    if (typeof _0xa791f1 == "object") {
      _0x3799e4 = _0xa791f1;
      _0xa791f1 = undefined;
    } else if (typeof _0xa791f1 == "function") {
      _0x1529cd = _0xa791f1;
      _0xa791f1 = undefined;
    }
  } else if (arguments.length === 2) {
    if (typeof _0xa791f1 == "number") {
      if (typeof _0x37db9f == "function") {
        _0x1529cd = _0x37db9f;
        _0x37db9f = undefined;
      } else if (typeof _0x37db9f != "number") {
        _0x3799e4 = _0x37db9f;
        _0x37db9f = undefined;
      }
    } else {
      _0x3799e4 = _0xa791f1;
      _0x1529cd = _0x37db9f;
      _0xa791f1 = undefined;
      _0x37db9f = undefined;
    }
  } else if (arguments.length === 3) {
    if (typeof _0x37db9f == "number") {
      if (typeof _0x3799e4 == "function") {
        _0x1529cd = _0x3799e4;
        _0x3799e4 = undefined;
      }
    } else {
      _0x1529cd = _0x3799e4;
      _0x3799e4 = _0x37db9f;
      _0x37db9f = undefined;
    }
  }
  _0x3799e4 = _0x3799e4 || {};
  if (_0xa791f1 === undefined) {
    _0xa791f1 = _0x3799e4.bits || 2048;
  }
  if (_0x37db9f === undefined) {
    _0x37db9f = _0x3799e4.e || 65537;
  }
  if (!_0x4647a3.options.usePureJavaScript && !_0x3799e4.prng && _0xa791f1 >= 256 && _0xa791f1 <= 16384 && (_0x37db9f === 65537 || _0x37db9f === 3)) {
    if (_0x1529cd) {
      if (_0x2210b6("generateKeyPair")) {
        return _0x2779dc.generateKeyPair("rsa", {
          modulusLength: _0xa791f1,
          publicExponent: _0x37db9f,
          publicKeyEncoding: {
            type: "spki",
            format: "pem"
          },
          privateKeyEncoding: {
            type: "pkcs8",
            format: "pem"
          }
        }, function (_0x171180, _0x1944c9, _0x3a0c9f) {
          if (_0x171180) {
            return _0x1529cd(_0x171180);
          }
          _0x1529cd(null, {
            privateKey: _0x15ae5b.privateKeyFromPem(_0x3a0c9f),
            publicKey: _0x15ae5b.publicKeyFromPem(_0x1944c9)
          });
        });
      }
      if (_0x192970("generateKey") && _0x192970("exportKey")) {
        return _0x197ca6.globalScope.crypto.subtle.generateKey({
          name: "RSASSA-PKCS1-v1_5",
          modulusLength: _0xa791f1,
          publicExponent: _0x1ce77e(_0x37db9f),
          hash: {
            name: "SHA-256"
          }
        }, true, ["sign", "verify"]).then(function (_0x3aa7e8) {
          return _0x197ca6.globalScope.crypto.subtle.exportKey("pkcs8", _0x3aa7e8.privateKey);
        }).then(undefined, function (_0x21bd43) {
          _0x1529cd(_0x21bd43);
        }).then(function (_0x1726f6) {
          if (_0x1726f6) {
            var _0x1630fe = _0x15ae5b.privateKeyFromAsn1(_0x2c4f51.fromDer(_0x4647a3.util.createBuffer(_0x1726f6)));
            _0x1529cd(null, {
              privateKey: _0x1630fe,
              publicKey: _0x15ae5b.setRsaPublicKey(_0x1630fe.n, _0x1630fe.e)
            });
          }
        });
      }
      if (_0xbbb21f("generateKey") && _0xbbb21f("exportKey")) {
        var _0x3c179a = _0x197ca6.globalScope.msCrypto.subtle.generateKey({
          name: "RSASSA-PKCS1-v1_5",
          modulusLength: _0xa791f1,
          publicExponent: _0x1ce77e(_0x37db9f),
          hash: {
            name: "SHA-256"
          }
        }, true, ["sign", "verify"]);
        _0x3c179a.oncomplete = function (_0x58e62c) {
          var _0x4711d2 = _0x58e62c.target.result;
          var _0x48c846 = _0x197ca6.globalScope.msCrypto.subtle.exportKey("pkcs8", _0x4711d2.privateKey);
          _0x48c846.oncomplete = function (_0x55fd5d) {
            var _0x5e15d5 = _0x55fd5d.target.result;
            var _0xa96a0d = _0x15ae5b.privateKeyFromAsn1(_0x2c4f51.fromDer(_0x4647a3.util.createBuffer(_0x5e15d5)));
            _0x1529cd(null, {
              privateKey: _0xa96a0d,
              publicKey: _0x15ae5b.setRsaPublicKey(_0xa96a0d.n, _0xa96a0d.e)
            });
          };
          _0x48c846.onerror = function (_0x463c9e) {
            _0x1529cd(_0x463c9e);
          };
        };
        _0x3c179a.onerror = function (_0x4402c5) {
          _0x1529cd(_0x4402c5);
        };
        return;
      }
    } else if (_0x2210b6("generateKeyPairSync")) {
      var _0xd636fe = _0x2779dc.generateKeyPairSync("rsa", {
        modulusLength: _0xa791f1,
        publicExponent: _0x37db9f,
        publicKeyEncoding: {
          type: "spki",
          format: "pem"
        },
        privateKeyEncoding: {
          type: "pkcs8",
          format: "pem"
        }
      });
      return {
        privateKey: _0x15ae5b.privateKeyFromPem(_0xd636fe.privateKey),
        publicKey: _0x15ae5b.publicKeyFromPem(_0xd636fe.publicKey)
      };
    }
  }
  var _0x58c6a6 = _0x15ae5b.rsa.createKeyPairGenerationState(_0xa791f1, _0x37db9f, _0x3799e4);
  if (!_0x1529cd) {
    _0x15ae5b.rsa.stepKeyPairGenerationState(_0x58c6a6, 0);
    return _0x58c6a6.keys;
  }
  _0x550891(_0x58c6a6, _0x3799e4, _0x1529cd);
};
_0x15ae5b.setRsaPublicKey = _0x15ae5b.rsa.setPublicKey = function (_0xe359d0, _0x4f300d) {
  var _0x4f476f = {
    n: _0xe359d0,
    e: _0x4f300d,
    encrypt: function (_0x2bd63c, _0x256214, _0xf884e3) {
      if (typeof _0x256214 == "string") {
        _0x256214 = _0x256214.toUpperCase();
      } else if (_0x256214 === undefined) {
        _0x256214 = "RSAES-PKCS1-V1_5";
      }
      if (_0x256214 === "RSAES-PKCS1-V1_5") {
        _0x256214 = {
          encode: function (_0x2fa187, _0x79ff14, _0x3b940d) {
            return _0x33b812(_0x2fa187, _0x79ff14, 2).getBytes();
          }
        };
      } else if (_0x256214 === "RSA-OAEP" || _0x256214 === "RSAES-OAEP") {
        _0x256214 = {
          encode: function (_0x493190, _0x1f4b67) {
            return _0x4647a3.pkcs1.encode_rsa_oaep(_0x1f4b67, _0x493190, _0xf884e3);
          }
        };
      } else if (["RAW", "NONE", "NULL", null].indexOf(_0x256214) !== -1) {
        _0x256214 = {
          encode: function (_0x1cd237) {
            return _0x1cd237;
          }
        };
      } else if (typeof _0x256214 == "string") {
        throw new Error("Unsupported encryption scheme: \"" + _0x256214 + "\".");
      }
      var _0x322c03 = _0x256214.encode(_0x2bd63c, _0x4f476f, true);
      return _0x15ae5b.rsa.encrypt(_0x322c03, _0x4f476f, true);
    },
    verify: function (_0x399dac, _0xbc6f77, _0x2140d5, _0x5e3b98) {
      if (typeof _0x2140d5 == "string") {
        _0x2140d5 = _0x2140d5.toUpperCase();
      } else if (_0x2140d5 === undefined) {
        _0x2140d5 = "RSASSA-PKCS1-V1_5";
      }
      if (_0x5e3b98 === undefined) {
        _0x5e3b98 = {
          _parseAllDigestBytes: true
        };
      }
      if (!("_parseAllDigestBytes" in _0x5e3b98)) {
        _0x5e3b98._parseAllDigestBytes = true;
      }
      if (_0x2140d5 === "RSASSA-PKCS1-V1_5") {
        _0x2140d5 = {
          verify: function (_0x1a0311, _0x49ab49) {
            _0x49ab49 = _0x5ad1a2(_0x49ab49, _0x4f476f, true);
            var _0x273b27 = _0x2c4f51.fromDer(_0x49ab49, {
              parseAllBytes: _0x5e3b98._parseAllDigestBytes
            });
            var _0x3366ce = {};
            var _0x5d818d = [];
            if (!_0x2c4f51.validate(_0x273b27, _0x1a1a4c, _0x3366ce, _0x5d818d)) {
              (_0x35bff1 = new Error("ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value.")).errors = _0x5d818d;
              throw _0x35bff1;
            }
            var _0x35bff1;
            var _0x41838c = _0x2c4f51.derToOid(_0x3366ce.algorithmIdentifier);
            if (_0x41838c !== _0x4647a3.oids.md2 && _0x41838c !== _0x4647a3.oids.md5 && _0x41838c !== _0x4647a3.oids.sha1 && _0x41838c !== _0x4647a3.oids.sha224 && _0x41838c !== _0x4647a3.oids.sha256 && _0x41838c !== _0x4647a3.oids.sha384 && _0x41838c !== _0x4647a3.oids.sha512 && _0x41838c !== _0x4647a3.oids["sha512-224"] && _0x41838c !== _0x4647a3.oids["sha512-256"]) {
              (_0x35bff1 = new Error("Unknown RSASSA-PKCS1-v1_5 DigestAlgorithm identifier.")).oid = _0x41838c;
              throw _0x35bff1;
            }
            if ((_0x41838c === _0x4647a3.oids.md2 || _0x41838c === _0x4647a3.oids.md5) && !("parameters" in _0x3366ce)) {
              throw new Error("ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value. Missing algorithm identifer NULL parameters.");
            }
            return _0x1a0311 === _0x3366ce.digest;
          }
        };
      } else if (_0x2140d5 === "NONE" || _0x2140d5 === "NULL" || _0x2140d5 === null) {
        _0x2140d5 = {
          verify: function (_0x3aabbd, _0x50e62e) {
            return _0x3aabbd === (_0x50e62e = _0x5ad1a2(_0x50e62e, _0x4f476f, true));
          }
        };
      }
      var _0x4a7c33 = _0x15ae5b.rsa.decrypt(_0xbc6f77, _0x4f476f, true, false);
      return _0x2140d5.verify(_0x399dac, _0x4a7c33, _0x4f476f.n.bitLength());
    }
  };
  return _0x4f476f;
};
_0x15ae5b.setRsaPrivateKey = _0x15ae5b.rsa.setPrivateKey = function (_0x3ceed9, _0x2c21e2, _0xbc0ae0, _0x9479ee, _0x3f106d, _0x467fbc, _0x25a101, _0x4420cc) {
  var _0x20fdd1 = {
    n: _0x3ceed9,
    e: _0x2c21e2,
    d: _0xbc0ae0,
    p: _0x9479ee,
    q: _0x3f106d,
    dP: _0x467fbc,
    dQ: _0x25a101,
    qInv: _0x4420cc,
    decrypt: function (_0x540835, _0x546187, _0x2af190) {
      if (typeof _0x546187 == "string") {
        _0x546187 = _0x546187.toUpperCase();
      } else if (_0x546187 === undefined) {
        _0x546187 = "RSAES-PKCS1-V1_5";
      }
      var _0x76c5c2 = _0x15ae5b.rsa.decrypt(_0x540835, _0x20fdd1, false, false);
      if (_0x546187 === "RSAES-PKCS1-V1_5") {
        _0x546187 = {
          decode: _0x5ad1a2
        };
      } else if (_0x546187 === "RSA-OAEP" || _0x546187 === "RSAES-OAEP") {
        _0x546187 = {
          decode: function (_0x2892d8, _0xd5a138) {
            return _0x4647a3.pkcs1.decode_rsa_oaep(_0xd5a138, _0x2892d8, _0x2af190);
          }
        };
      } else {
        if (["RAW", "NONE", "NULL", null].indexOf(_0x546187) === -1) {
          throw new Error("Unsupported encryption scheme: \"" + _0x546187 + "\".");
        }
        _0x546187 = {
          decode: function (_0x3ae543) {
            return _0x3ae543;
          }
        };
      }
      return _0x546187.decode(_0x76c5c2, _0x20fdd1, false);
    },
    sign: function (_0x5bfa68, _0x571123) {
      var _0x817c08 = false;
      if (typeof _0x571123 == "string") {
        _0x571123 = _0x571123.toUpperCase();
      }
      if (_0x571123 === undefined || _0x571123 === "RSASSA-PKCS1-V1_5") {
        _0x571123 = {
          encode: _0xda14b2
        };
        _0x817c08 = 1;
      } else if (_0x571123 === "NONE" || _0x571123 === "NULL" || _0x571123 === null) {
        _0x571123 = {
          encode: function () {
            return _0x5bfa68;
          }
        };
        _0x817c08 = 1;
      }
      var _0x5a2c5a = _0x571123.encode(_0x5bfa68, _0x20fdd1.n.bitLength());
      return _0x15ae5b.rsa.encrypt(_0x5a2c5a, _0x20fdd1, _0x817c08);
    }
  };
  return _0x20fdd1;
};
_0x15ae5b.wrapRsaPrivateKey = function (_0x10573e) {
  return _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.SEQUENCE, true, [_0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.INTEGER, false, _0x2c4f51.integerToDer(0).getBytes()), _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.SEQUENCE, true, [_0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.OID, false, _0x2c4f51.oidToDer(_0x15ae5b.oids.rsaEncryption).getBytes()), _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.NULL, false, "")]), _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.OCTETSTRING, false, _0x2c4f51.toDer(_0x10573e).getBytes())]);
};
_0x15ae5b.privateKeyFromAsn1 = function (_0x20d5c5) {
  var _0x276d5c;
  var _0x107d1c;
  var _0x1d470b;
  var _0x19d12f;
  var _0x5972ce;
  var _0x1ea0fc;
  var _0xb6b2c2;
  var _0x43f8da;
  var _0x583579 = {};
  var _0x3c77ed = [];
  if (_0x2c4f51.validate(_0x20d5c5, _0x575b92, _0x583579, _0x3c77ed)) {
    _0x20d5c5 = _0x2c4f51.fromDer(_0x4647a3.util.createBuffer(_0x583579.privateKey));
  }
  _0x583579 = {};
  _0x3c77ed = [];
  if (!_0x2c4f51.validate(_0x20d5c5, _0xe8c343, _0x583579, _0x3c77ed)) {
    var _0xcd48cd = new Error("Cannot read private key. ASN.1 object does not contain an RSAPrivateKey.");
    _0xcd48cd.errors = _0x3c77ed;
    throw _0xcd48cd;
  }
  _0x276d5c = _0x4647a3.util.createBuffer(_0x583579.privateKeyModulus).toHex();
  _0x107d1c = _0x4647a3.util.createBuffer(_0x583579.privateKeyPublicExponent).toHex();
  _0x1d470b = _0x4647a3.util.createBuffer(_0x583579.privateKeyPrivateExponent).toHex();
  _0x19d12f = _0x4647a3.util.createBuffer(_0x583579.privateKeyPrime1).toHex();
  _0x5972ce = _0x4647a3.util.createBuffer(_0x583579.privateKeyPrime2).toHex();
  _0x1ea0fc = _0x4647a3.util.createBuffer(_0x583579.privateKeyExponent1).toHex();
  _0xb6b2c2 = _0x4647a3.util.createBuffer(_0x583579.privateKeyExponent2).toHex();
  _0x43f8da = _0x4647a3.util.createBuffer(_0x583579.privateKeyCoefficient).toHex();
  return _0x15ae5b.setRsaPrivateKey(new _0x413dfe(_0x276d5c, 16), new _0x413dfe(_0x107d1c, 16), new _0x413dfe(_0x1d470b, 16), new _0x413dfe(_0x19d12f, 16), new _0x413dfe(_0x5972ce, 16), new _0x413dfe(_0x1ea0fc, 16), new _0x413dfe(_0xb6b2c2, 16), new _0x413dfe(_0x43f8da, 16));
};
_0x15ae5b.privateKeyToAsn1 = _0x15ae5b.privateKeyToRSAPrivateKey = function (_0x46824f) {
  return _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.SEQUENCE, true, [_0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.INTEGER, false, _0x2c4f51.integerToDer(0).getBytes()), _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.INTEGER, false, _0x2f1ac6(_0x46824f.n)), _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.INTEGER, false, _0x2f1ac6(_0x46824f.e)), _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.INTEGER, false, _0x2f1ac6(_0x46824f.d)), _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.INTEGER, false, _0x2f1ac6(_0x46824f.p)), _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.INTEGER, false, _0x2f1ac6(_0x46824f.q)), _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.INTEGER, false, _0x2f1ac6(_0x46824f.dP)), _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.INTEGER, false, _0x2f1ac6(_0x46824f.dQ)), _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.INTEGER, false, _0x2f1ac6(_0x46824f.qInv))]);
};
_0x15ae5b.publicKeyFromAsn1 = function (_0x3333e4) {
  var _0x5eb2a1 = {};
  var _0x54e18e = [];
  if (_0x2c4f51.validate(_0x3333e4, _0x510dd4, _0x5eb2a1, _0x54e18e)) {
    var _0xa57d3b;
    var _0x4818e7 = _0x2c4f51.derToOid(_0x5eb2a1.publicKeyOid);
    if (_0x4818e7 !== _0x15ae5b.oids.rsaEncryption) {
      (_0xa57d3b = new Error("Cannot read public key. Unknown OID.")).oid = _0x4818e7;
      throw _0xa57d3b;
    }
    _0x3333e4 = _0x5eb2a1.rsaPublicKey;
  }
  _0x54e18e = [];
  if (!_0x2c4f51.validate(_0x3333e4, _0x5c3c06, _0x5eb2a1, _0x54e18e)) {
    (_0xa57d3b = new Error("Cannot read public key. ASN.1 object does not contain an RSAPublicKey.")).errors = _0x54e18e;
    throw _0xa57d3b;
  }
  var _0x214660 = _0x4647a3.util.createBuffer(_0x5eb2a1.publicKeyModulus).toHex();
  var _0xe72952 = _0x4647a3.util.createBuffer(_0x5eb2a1.publicKeyExponent).toHex();
  return _0x15ae5b.setRsaPublicKey(new _0x413dfe(_0x214660, 16), new _0x413dfe(_0xe72952, 16));
};
_0x15ae5b.publicKeyToAsn1 = _0x15ae5b.publicKeyToSubjectPublicKeyInfo = function (_0x4f1636) {
  return _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.SEQUENCE, true, [_0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.SEQUENCE, true, [_0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.OID, false, _0x2c4f51.oidToDer(_0x15ae5b.oids.rsaEncryption).getBytes()), _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.NULL, false, "")]), _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.BITSTRING, false, [_0x15ae5b.publicKeyToRSAPublicKey(_0x4f1636)])]);
};
_0x15ae5b.publicKeyToRSAPublicKey = function (_0x3023cc) {
  return _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.SEQUENCE, true, [_0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.INTEGER, false, _0x2f1ac6(_0x3023cc.n)), _0x2c4f51.create(_0x2c4f51.Class.UNIVERSAL, _0x2c4f51.Type.INTEGER, false, _0x2f1ac6(_0x3023cc.e))]);
};