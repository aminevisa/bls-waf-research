var _0x18ea76 = require("./832.js");
require("./925.js");
require("./68.js");
require("./480.js");
require("./991.js");
require("./270.js");
require("./960.js");
require("./953.js");
require("./563.js");
require("./372.js");
require("./95.js");
require("./116.js");
if (_0x54827f === undefined) {
  var _0x54827f = _0x18ea76.jsbn.BigInteger;
}
var _0x20c805 = _0x18ea76.asn1;
var _0x7114a0 = _0x18ea76.pki = _0x18ea76.pki || {};
module.exports = _0x7114a0.pbe = _0x18ea76.pbe = _0x18ea76.pbe || {};
var _0x3444eb = _0x7114a0.oids;
var _0x403093 = {
  name: "EncryptedPrivateKeyInfo",
  tagClass: _0x20c805.Class.UNIVERSAL,
  type: _0x20c805.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "EncryptedPrivateKeyInfo.encryptionAlgorithm",
    tagClass: _0x20c805.Class.UNIVERSAL,
    type: _0x20c805.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "AlgorithmIdentifier.algorithm",
      tagClass: _0x20c805.Class.UNIVERSAL,
      type: _0x20c805.Type.OID,
      constructed: false,
      capture: "encryptionOid"
    }, {
      name: "AlgorithmIdentifier.parameters",
      tagClass: _0x20c805.Class.UNIVERSAL,
      type: _0x20c805.Type.SEQUENCE,
      constructed: true,
      captureAsn1: "encryptionParams"
    }]
  }, {
    name: "EncryptedPrivateKeyInfo.encryptedData",
    tagClass: _0x20c805.Class.UNIVERSAL,
    type: _0x20c805.Type.OCTETSTRING,
    constructed: false,
    capture: "encryptedData"
  }]
};
var _0x3eb853 = {
  name: "PBES2Algorithms",
  tagClass: _0x20c805.Class.UNIVERSAL,
  type: _0x20c805.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "PBES2Algorithms.keyDerivationFunc",
    tagClass: _0x20c805.Class.UNIVERSAL,
    type: _0x20c805.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "PBES2Algorithms.keyDerivationFunc.oid",
      tagClass: _0x20c805.Class.UNIVERSAL,
      type: _0x20c805.Type.OID,
      constructed: false,
      capture: "kdfOid"
    }, {
      name: "PBES2Algorithms.params",
      tagClass: _0x20c805.Class.UNIVERSAL,
      type: _0x20c805.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "PBES2Algorithms.params.salt",
        tagClass: _0x20c805.Class.UNIVERSAL,
        type: _0x20c805.Type.OCTETSTRING,
        constructed: false,
        capture: "kdfSalt"
      }, {
        name: "PBES2Algorithms.params.iterationCount",
        tagClass: _0x20c805.Class.UNIVERSAL,
        type: _0x20c805.Type.INTEGER,
        constructed: false,
        capture: "kdfIterationCount"
      }, {
        name: "PBES2Algorithms.params.keyLength",
        tagClass: _0x20c805.Class.UNIVERSAL,
        type: _0x20c805.Type.INTEGER,
        constructed: false,
        optional: true,
        capture: "keyLength"
      }, {
        name: "PBES2Algorithms.params.prf",
        tagClass: _0x20c805.Class.UNIVERSAL,
        type: _0x20c805.Type.SEQUENCE,
        constructed: true,
        optional: true,
        value: [{
          name: "PBES2Algorithms.params.prf.algorithm",
          tagClass: _0x20c805.Class.UNIVERSAL,
          type: _0x20c805.Type.OID,
          constructed: false,
          capture: "prfOid"
        }]
      }]
    }]
  }, {
    name: "PBES2Algorithms.encryptionScheme",
    tagClass: _0x20c805.Class.UNIVERSAL,
    type: _0x20c805.Type.SEQUENCE,
    constructed: true,
    value: [{
      name: "PBES2Algorithms.encryptionScheme.oid",
      tagClass: _0x20c805.Class.UNIVERSAL,
      type: _0x20c805.Type.OID,
      constructed: false,
      capture: "encOid"
    }, {
      name: "PBES2Algorithms.encryptionScheme.iv",
      tagClass: _0x20c805.Class.UNIVERSAL,
      type: _0x20c805.Type.OCTETSTRING,
      constructed: false,
      capture: "encIv"
    }]
  }]
};
var _0x3df518 = {
  name: "pkcs-12PbeParams",
  tagClass: _0x20c805.Class.UNIVERSAL,
  type: _0x20c805.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "pkcs-12PbeParams.salt",
    tagClass: _0x20c805.Class.UNIVERSAL,
    type: _0x20c805.Type.OCTETSTRING,
    constructed: false,
    capture: "salt"
  }, {
    name: "pkcs-12PbeParams.iterations",
    tagClass: _0x20c805.Class.UNIVERSAL,
    type: _0x20c805.Type.INTEGER,
    constructed: false,
    capture: "iterations"
  }]
};
function _0x56d473(_0x169121, _0x37748e) {
  return _0x169121.start().update(_0x37748e).digest().getBytes();
}
function _0x9de66d(_0x4922d4) {
  var _0x151fa4;
  if (_0x4922d4) {
    if (!(_0x151fa4 = _0x7114a0.oids[_0x20c805.derToOid(_0x4922d4)])) {
      var _0x118995 = new Error("Unsupported PRF OID.");
      _0x118995.oid = _0x4922d4;
      _0x118995.supported = ["hmacWithSHA1", "hmacWithSHA224", "hmacWithSHA256", "hmacWithSHA384", "hmacWithSHA512"];
      throw _0x118995;
    }
  } else {
    _0x151fa4 = "hmacWithSHA1";
  }
  return _0x4644e1(_0x151fa4);
}
function _0x4644e1(_0x3d9048) {
  var _0x33ffcc = _0x18ea76.md;
  switch (_0x3d9048) {
    case "hmacWithSHA224":
      _0x33ffcc = _0x18ea76.md.sha512;
    case "hmacWithSHA1":
    case "hmacWithSHA256":
    case "hmacWithSHA384":
    case "hmacWithSHA512":
      _0x3d9048 = _0x3d9048.substr(8).toLowerCase();
      break;
    default:
      var _0x245ca6 = new Error("Unsupported PRF algorithm.");
      _0x245ca6.algorithm = _0x3d9048;
      _0x245ca6.supported = ["hmacWithSHA1", "hmacWithSHA224", "hmacWithSHA256", "hmacWithSHA384", "hmacWithSHA512"];
      throw _0x245ca6;
  }
  if (!_0x33ffcc || !(_0x3d9048 in _0x33ffcc)) {
    throw new Error("Unknown hash algorithm: " + _0x3d9048);
  }
  return _0x33ffcc[_0x3d9048].create();
}
_0x7114a0.encryptPrivateKeyInfo = function (_0x58d666, _0x588737, _0x48fc26) {
  (_0x48fc26 = _0x48fc26 || {}).saltSize = _0x48fc26.saltSize || 8;
  _0x48fc26.count = _0x48fc26.count || 2048;
  _0x48fc26.algorithm = _0x48fc26.algorithm || "aes128";
  _0x48fc26.prfAlgorithm = _0x48fc26.prfAlgorithm || "sha1";
  var _0x2568e4;
  var _0x3fdf0d;
  var _0x4569e1;
  var _0x2d68e4 = _0x18ea76.random.getBytesSync(_0x48fc26.saltSize);
  var _0x5ec810 = _0x48fc26.count;
  var _0x323189 = _0x20c805.integerToDer(_0x5ec810);
  if (_0x48fc26.algorithm.indexOf("aes") === 0 || _0x48fc26.algorithm === "des") {
    var _0x272d76;
    var _0x519eb2;
    var _0x3f4d20;
    switch (_0x48fc26.algorithm) {
      case "aes128":
        _0x2568e4 = 16;
        _0x272d76 = 16;
        _0x519eb2 = _0x3444eb["aes128-CBC"];
        _0x3f4d20 = _0x18ea76.aes.createEncryptionCipher;
        break;
      case "aes192":
        _0x2568e4 = 24;
        _0x272d76 = 16;
        _0x519eb2 = _0x3444eb["aes192-CBC"];
        _0x3f4d20 = _0x18ea76.aes.createEncryptionCipher;
        break;
      case "aes256":
        _0x2568e4 = 32;
        _0x272d76 = 16;
        _0x519eb2 = _0x3444eb["aes256-CBC"];
        _0x3f4d20 = _0x18ea76.aes.createEncryptionCipher;
        break;
      case "des":
        _0x2568e4 = 8;
        _0x272d76 = 8;
        _0x519eb2 = _0x3444eb.desCBC;
        _0x3f4d20 = _0x18ea76.des.createEncryptionCipher;
        break;
      default:
        (_0xd4989 = new Error("Cannot encrypt private key. Unknown encryption algorithm.")).algorithm = _0x48fc26.algorithm;
        throw _0xd4989;
    }
    var _0x33e316 = "hmacWith" + _0x48fc26.prfAlgorithm.toUpperCase();
    var _0x3b95d8 = _0x4644e1(_0x33e316);
    var _0x1dd7d4 = _0x18ea76.pkcs5.pbkdf2(_0x588737, _0x2d68e4, _0x5ec810, _0x2568e4, _0x3b95d8);
    var _0x1c5c80 = _0x18ea76.random.getBytesSync(_0x272d76);
    (_0x31fcbf = _0x3f4d20(_0x1dd7d4)).start(_0x1c5c80);
    _0x31fcbf.update(_0x20c805.toDer(_0x58d666));
    _0x31fcbf.finish();
    _0x4569e1 = _0x31fcbf.output.getBytes();
    var _0x1fc1c8 = function (_0x513e37, _0xc614e8, _0x6f0918, _0x1ae4f4) {
      var _0x5de1b1 = _0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.SEQUENCE, true, [_0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.OCTETSTRING, false, _0x513e37), _0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.INTEGER, false, _0xc614e8.getBytes())]);
      if (_0x1ae4f4 !== "hmacWithSHA1") {
        _0x5de1b1.value.push(_0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.INTEGER, false, _0x18ea76.util.hexToBytes(_0x6f0918.toString(16))), _0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.SEQUENCE, true, [_0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.OID, false, _0x20c805.oidToDer(_0x7114a0.oids[_0x1ae4f4]).getBytes()), _0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.NULL, false, "")]));
      }
      return _0x5de1b1;
    }(_0x2d68e4, _0x323189, _0x2568e4, _0x33e316);
    _0x3fdf0d = _0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.SEQUENCE, true, [_0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.OID, false, _0x20c805.oidToDer(_0x3444eb.pkcs5PBES2).getBytes()), _0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.SEQUENCE, true, [_0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.SEQUENCE, true, [_0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.OID, false, _0x20c805.oidToDer(_0x3444eb.pkcs5PBKDF2).getBytes()), _0x1fc1c8]), _0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.SEQUENCE, true, [_0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.OID, false, _0x20c805.oidToDer(_0x519eb2).getBytes()), _0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.OCTETSTRING, false, _0x1c5c80)])])]);
  } else {
    var _0xd4989;
    if (_0x48fc26.algorithm !== "3des") {
      (_0xd4989 = new Error("Cannot encrypt private key. Unknown encryption algorithm.")).algorithm = _0x48fc26.algorithm;
      throw _0xd4989;
    }
    _0x2568e4 = 24;
    var _0x31fcbf;
    var _0x33d715 = new _0x18ea76.util.ByteBuffer(_0x2d68e4);
    _0x1dd7d4 = _0x7114a0.pbe.generatePkcs12Key(_0x588737, _0x33d715, 1, _0x5ec810, _0x2568e4);
    _0x1c5c80 = _0x7114a0.pbe.generatePkcs12Key(_0x588737, _0x33d715, 2, _0x5ec810, _0x2568e4);
    (_0x31fcbf = _0x18ea76.des.createEncryptionCipher(_0x1dd7d4)).start(_0x1c5c80);
    _0x31fcbf.update(_0x20c805.toDer(_0x58d666));
    _0x31fcbf.finish();
    _0x4569e1 = _0x31fcbf.output.getBytes();
    _0x3fdf0d = _0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.SEQUENCE, true, [_0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.OID, false, _0x20c805.oidToDer(_0x3444eb["pbeWithSHAAnd3-KeyTripleDES-CBC"]).getBytes()), _0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.SEQUENCE, true, [_0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.OCTETSTRING, false, _0x2d68e4), _0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.INTEGER, false, _0x323189.getBytes())])]);
  }
  return _0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.SEQUENCE, true, [_0x3fdf0d, _0x20c805.create(_0x20c805.Class.UNIVERSAL, _0x20c805.Type.OCTETSTRING, false, _0x4569e1)]);
};
_0x7114a0.decryptPrivateKeyInfo = function (_0x4d98e7, _0x5f4094) {
  var _0x298c95 = null;
  var _0x128458 = {};
  var _0x1f87cd = [];
  if (!_0x20c805.validate(_0x4d98e7, _0x403093, _0x128458, _0x1f87cd)) {
    var _0x1ff01e = new Error("Cannot read encrypted private key. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");
    _0x1ff01e.errors = _0x1f87cd;
    throw _0x1ff01e;
  }
  var _0x48dfe9 = _0x20c805.derToOid(_0x128458.encryptionOid);
  var _0x23f304 = _0x7114a0.pbe.getCipher(_0x48dfe9, _0x128458.encryptionParams, _0x5f4094);
  var _0x4cc082 = _0x18ea76.util.createBuffer(_0x128458.encryptedData);
  _0x23f304.update(_0x4cc082);
  if (_0x23f304.finish()) {
    _0x298c95 = _0x20c805.fromDer(_0x23f304.output);
  }
  return _0x298c95;
};
_0x7114a0.encryptedPrivateKeyToPem = function (_0x41b474, _0x5c1428) {
  var _0xfafab = {
    type: "ENCRYPTED PRIVATE KEY",
    body: _0x20c805.toDer(_0x41b474).getBytes()
  };
  return _0x18ea76.pem.encode(_0xfafab, {
    maxline: _0x5c1428
  });
};
_0x7114a0.encryptedPrivateKeyFromPem = function (_0x54c1dc) {
  var _0x368f88 = _0x18ea76.pem.decode(_0x54c1dc)[0];
  if (_0x368f88.type !== "ENCRYPTED PRIVATE KEY") {
    var _0x165b0e = new Error("Could not convert encrypted private key from PEM; PEM header type is \"ENCRYPTED PRIVATE KEY\".");
    _0x165b0e.headerType = _0x368f88.type;
    throw _0x165b0e;
  }
  if (_0x368f88.procType && _0x368f88.procType.type === "ENCRYPTED") {
    throw new Error("Could not convert encrypted private key from PEM; PEM is encrypted.");
  }
  return _0x20c805.fromDer(_0x368f88.body);
};
_0x7114a0.encryptRsaPrivateKey = function (_0x50f1bb, _0x13a19d, _0x591db9) {
  if (!(_0x591db9 = _0x591db9 || {}).legacy) {
    var _0x45025d = _0x7114a0.wrapRsaPrivateKey(_0x7114a0.privateKeyToAsn1(_0x50f1bb));
    _0x45025d = _0x7114a0.encryptPrivateKeyInfo(_0x45025d, _0x13a19d, _0x591db9);
    return _0x7114a0.encryptedPrivateKeyToPem(_0x45025d);
  }
  var _0x46486b;
  var _0x9886e0;
  var _0x299fb2;
  var _0x48da6c;
  switch (_0x591db9.algorithm) {
    case "aes128":
      _0x46486b = "AES-128-CBC";
      _0x299fb2 = 16;
      _0x9886e0 = _0x18ea76.random.getBytesSync(16);
      _0x48da6c = _0x18ea76.aes.createEncryptionCipher;
      break;
    case "aes192":
      _0x46486b = "AES-192-CBC";
      _0x299fb2 = 24;
      _0x9886e0 = _0x18ea76.random.getBytesSync(16);
      _0x48da6c = _0x18ea76.aes.createEncryptionCipher;
      break;
    case "aes256":
      _0x46486b = "AES-256-CBC";
      _0x299fb2 = 32;
      _0x9886e0 = _0x18ea76.random.getBytesSync(16);
      _0x48da6c = _0x18ea76.aes.createEncryptionCipher;
      break;
    case "3des":
      _0x46486b = "DES-EDE3-CBC";
      _0x299fb2 = 24;
      _0x9886e0 = _0x18ea76.random.getBytesSync(8);
      _0x48da6c = _0x18ea76.des.createEncryptionCipher;
      break;
    case "des":
      _0x46486b = "DES-CBC";
      _0x299fb2 = 8;
      _0x9886e0 = _0x18ea76.random.getBytesSync(8);
      _0x48da6c = _0x18ea76.des.createEncryptionCipher;
      break;
    default:
      var _0x16b6be = new Error("Could not encrypt RSA private key; unsupported encryption algorithm \"" + _0x591db9.algorithm + "\".");
      _0x16b6be.algorithm = _0x591db9.algorithm;
      throw _0x16b6be;
  }
  var _0x30fd5d = _0x48da6c(_0x18ea76.pbe.opensslDeriveBytes(_0x13a19d, _0x9886e0.substr(0, 8), _0x299fb2));
  _0x30fd5d.start(_0x9886e0);
  _0x30fd5d.update(_0x20c805.toDer(_0x7114a0.privateKeyToAsn1(_0x50f1bb)));
  _0x30fd5d.finish();
  var _0x36bd48 = {
    type: "RSA PRIVATE KEY",
    procType: {
      version: "4",
      type: "ENCRYPTED"
    },
    dekInfo: {
      algorithm: _0x46486b,
      parameters: _0x18ea76.util.bytesToHex(_0x9886e0).toUpperCase()
    },
    body: _0x30fd5d.output.getBytes()
  };
  return _0x18ea76.pem.encode(_0x36bd48);
};
_0x7114a0.decryptRsaPrivateKey = function (_0x55d03c, _0x508b40) {
  var _0x4df727 = null;
  var _0x4fd784 = _0x18ea76.pem.decode(_0x55d03c)[0];
  if (_0x4fd784.type !== "ENCRYPTED PRIVATE KEY" && _0x4fd784.type !== "PRIVATE KEY" && _0x4fd784.type !== "RSA PRIVATE KEY") {
    (_0x19a3e5 = new Error("Could not convert private key from PEM; PEM header type is not \"ENCRYPTED PRIVATE KEY\", \"PRIVATE KEY\", or \"RSA PRIVATE KEY\".")).headerType = _0x19a3e5;
    throw _0x19a3e5;
  }
  if (_0x4fd784.procType && _0x4fd784.procType.type === "ENCRYPTED") {
    var _0x34f5fe;
    var _0x32ae09;
    switch (_0x4fd784.dekInfo.algorithm) {
      case "DES-CBC":
        _0x34f5fe = 8;
        _0x32ae09 = _0x18ea76.des.createDecryptionCipher;
        break;
      case "DES-EDE3-CBC":
        _0x34f5fe = 24;
        _0x32ae09 = _0x18ea76.des.createDecryptionCipher;
        break;
      case "AES-128-CBC":
        _0x34f5fe = 16;
        _0x32ae09 = _0x18ea76.aes.createDecryptionCipher;
        break;
      case "AES-192-CBC":
        _0x34f5fe = 24;
        _0x32ae09 = _0x18ea76.aes.createDecryptionCipher;
        break;
      case "AES-256-CBC":
        _0x34f5fe = 32;
        _0x32ae09 = _0x18ea76.aes.createDecryptionCipher;
        break;
      case "RC2-40-CBC":
        _0x34f5fe = 5;
        _0x32ae09 = function (_0x43fb67) {
          return _0x18ea76.rc2.createDecryptionCipher(_0x43fb67, 40);
        };
        break;
      case "RC2-64-CBC":
        _0x34f5fe = 8;
        _0x32ae09 = function (_0x27b279) {
          return _0x18ea76.rc2.createDecryptionCipher(_0x27b279, 64);
        };
        break;
      case "RC2-128-CBC":
        _0x34f5fe = 16;
        _0x32ae09 = function (_0x231742) {
          return _0x18ea76.rc2.createDecryptionCipher(_0x231742, 128);
        };
        break;
      default:
        var _0x19a3e5;
        (_0x19a3e5 = new Error("Could not decrypt private key; unsupported encryption algorithm \"" + _0x4fd784.dekInfo.algorithm + "\".")).algorithm = _0x4fd784.dekInfo.algorithm;
        throw _0x19a3e5;
    }
    var _0x2434f4 = _0x18ea76.util.hexToBytes(_0x4fd784.dekInfo.parameters);
    var _0x3d96a4 = _0x32ae09(_0x18ea76.pbe.opensslDeriveBytes(_0x508b40, _0x2434f4.substr(0, 8), _0x34f5fe));
    _0x3d96a4.start(_0x2434f4);
    _0x3d96a4.update(_0x18ea76.util.createBuffer(_0x4fd784.body));
    if (!_0x3d96a4.finish()) {
      return _0x4df727;
    }
    _0x4df727 = _0x3d96a4.output.getBytes();
  } else {
    _0x4df727 = _0x4fd784.body;
  }
  if ((_0x4df727 = _0x4fd784.type === "ENCRYPTED PRIVATE KEY" ? _0x7114a0.decryptPrivateKeyInfo(_0x20c805.fromDer(_0x4df727), _0x508b40) : _0x20c805.fromDer(_0x4df727)) !== null) {
    _0x4df727 = _0x7114a0.privateKeyFromAsn1(_0x4df727);
  }
  return _0x4df727;
};
_0x7114a0.pbe.generatePkcs12Key = function (_0x34c78e, _0x547864, _0x5bcd77, _0x3d1e32, _0x21605a, _0x13ac2a) {
  var _0x4ceaa5;
  var _0x59ce9c;
  if (_0x13ac2a == null) {
    if (!("sha1" in _0x18ea76.md)) {
      throw new Error("\"sha1\" hash algorithm unavailable.");
    }
    _0x13ac2a = _0x18ea76.md.sha1.create();
  }
  var _0x58abf8 = _0x13ac2a.digestLength;
  var _0x99ce3f = _0x13ac2a.blockLength;
  var _0x27288d = new _0x18ea76.util.ByteBuffer();
  var _0x428883 = new _0x18ea76.util.ByteBuffer();
  if (_0x34c78e != null) {
    for (_0x59ce9c = 0; _0x59ce9c < _0x34c78e.length; _0x59ce9c++) {
      _0x428883.putInt16(_0x34c78e.charCodeAt(_0x59ce9c));
    }
    _0x428883.putInt16(0);
  }
  var _0x2ad072 = _0x428883.length();
  var _0x2b163d = _0x547864.length();
  var _0x5c8633 = new _0x18ea76.util.ByteBuffer();
  _0x5c8633.fillWithByte(_0x5bcd77, _0x99ce3f);
  var _0x57aa1b = _0x99ce3f * Math.ceil(_0x2b163d / _0x99ce3f);
  var _0x3c6efb = new _0x18ea76.util.ByteBuffer();
  for (_0x59ce9c = 0; _0x59ce9c < _0x57aa1b; _0x59ce9c++) {
    _0x3c6efb.putByte(_0x547864.at(_0x59ce9c % _0x2b163d));
  }
  var _0x47e22b = _0x99ce3f * Math.ceil(_0x2ad072 / _0x99ce3f);
  var _0x4fe9c9 = new _0x18ea76.util.ByteBuffer();
  for (_0x59ce9c = 0; _0x59ce9c < _0x47e22b; _0x59ce9c++) {
    _0x4fe9c9.putByte(_0x428883.at(_0x59ce9c % _0x2ad072));
  }
  var _0x35064a = _0x3c6efb;
  _0x35064a.putBuffer(_0x4fe9c9);
  for (var _0x4901db = Math.ceil(_0x21605a / _0x58abf8), _0x2dfe6e = 1; _0x2dfe6e <= _0x4901db; _0x2dfe6e++) {
    var _0x19ea77 = new _0x18ea76.util.ByteBuffer();
    _0x19ea77.putBytes(_0x5c8633.bytes());
    _0x19ea77.putBytes(_0x35064a.bytes());
    for (var _0x1de0bf = 0; _0x1de0bf < _0x3d1e32; _0x1de0bf++) {
      _0x13ac2a.start();
      _0x13ac2a.update(_0x19ea77.getBytes());
      _0x19ea77 = _0x13ac2a.digest();
    }
    var _0x116adb = new _0x18ea76.util.ByteBuffer();
    for (_0x59ce9c = 0; _0x59ce9c < _0x99ce3f; _0x59ce9c++) {
      _0x116adb.putByte(_0x19ea77.at(_0x59ce9c % _0x58abf8));
    }
    var _0x2bb953 = Math.ceil(_0x2b163d / _0x99ce3f) + Math.ceil(_0x2ad072 / _0x99ce3f);
    var _0x4b795b = new _0x18ea76.util.ByteBuffer();
    for (_0x4ceaa5 = 0; _0x4ceaa5 < _0x2bb953; _0x4ceaa5++) {
      var _0x2ea6fb = new _0x18ea76.util.ByteBuffer(_0x35064a.getBytes(_0x99ce3f));
      var _0x1c38fd = 511;
      for (_0x59ce9c = _0x116adb.length() - 1; _0x59ce9c >= 0; _0x59ce9c--) {
        _0x1c38fd >>= 8;
        _0x1c38fd += _0x116adb.at(_0x59ce9c) + _0x2ea6fb.at(_0x59ce9c);
        _0x2ea6fb.setAt(_0x59ce9c, _0x1c38fd & 255);
      }
      _0x4b795b.putBuffer(_0x2ea6fb);
    }
    _0x35064a = _0x4b795b;
    _0x27288d.putBuffer(_0x19ea77);
  }
  _0x27288d.truncate(_0x27288d.length() - _0x21605a);
  return _0x27288d;
};
_0x7114a0.pbe.getCipher = function (_0x28d40d, _0x2e35b9, _0x2ad5bf) {
  switch (_0x28d40d) {
    case _0x7114a0.oids.pkcs5PBES2:
      return _0x7114a0.pbe.getCipherForPBES2(_0x28d40d, _0x2e35b9, _0x2ad5bf);
    case _0x7114a0.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
    case _0x7114a0.oids["pbewithSHAAnd40BitRC2-CBC"]:
      return _0x7114a0.pbe.getCipherForPKCS12PBE(_0x28d40d, _0x2e35b9, _0x2ad5bf);
    default:
      var _0x1757fa = new Error("Cannot read encrypted PBE data block. Unsupported OID.");
      _0x1757fa.oid = _0x28d40d;
      _0x1757fa.supportedOids = ["pkcs5PBES2", "pbeWithSHAAnd3-KeyTripleDES-CBC", "pbewithSHAAnd40BitRC2-CBC"];
      throw _0x1757fa;
  }
};
_0x7114a0.pbe.getCipherForPBES2 = function (_0x44c185, _0x3ef87b, _0x138054) {
  var _0x546c1b;
  var _0x3c8fa9 = {};
  var _0x3dd6b7 = [];
  if (!_0x20c805.validate(_0x3ef87b, _0x3eb853, _0x3c8fa9, _0x3dd6b7)) {
    (_0x546c1b = new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.")).errors = _0x3dd6b7;
    throw _0x546c1b;
  }
  if ((_0x44c185 = _0x20c805.derToOid(_0x3c8fa9.kdfOid)) !== _0x7114a0.oids.pkcs5PBKDF2) {
    (_0x546c1b = new Error("Cannot read encrypted private key. Unsupported key derivation function OID.")).oid = _0x44c185;
    _0x546c1b.supportedOids = ["pkcs5PBKDF2"];
    throw _0x546c1b;
  }
  if ((_0x44c185 = _0x20c805.derToOid(_0x3c8fa9.encOid)) !== _0x7114a0.oids["aes128-CBC"] && _0x44c185 !== _0x7114a0.oids["aes192-CBC"] && _0x44c185 !== _0x7114a0.oids["aes256-CBC"] && _0x44c185 !== _0x7114a0.oids["des-EDE3-CBC"] && _0x44c185 !== _0x7114a0.oids.desCBC) {
    (_0x546c1b = new Error("Cannot read encrypted private key. Unsupported encryption scheme OID.")).oid = _0x44c185;
    _0x546c1b.supportedOids = ["aes128-CBC", "aes192-CBC", "aes256-CBC", "des-EDE3-CBC", "desCBC"];
    throw _0x546c1b;
  }
  var _0xe34945;
  var _0x342340;
  var _0x2cc8a9 = _0x3c8fa9.kdfSalt;
  var _0x706c5 = _0x18ea76.util.createBuffer(_0x3c8fa9.kdfIterationCount);
  _0x706c5 = _0x706c5.getInt(_0x706c5.length() << 3);
  switch (_0x7114a0.oids[_0x44c185]) {
    case "aes128-CBC":
      _0xe34945 = 16;
      _0x342340 = _0x18ea76.aes.createDecryptionCipher;
      break;
    case "aes192-CBC":
      _0xe34945 = 24;
      _0x342340 = _0x18ea76.aes.createDecryptionCipher;
      break;
    case "aes256-CBC":
      _0xe34945 = 32;
      _0x342340 = _0x18ea76.aes.createDecryptionCipher;
      break;
    case "des-EDE3-CBC":
      _0xe34945 = 24;
      _0x342340 = _0x18ea76.des.createDecryptionCipher;
      break;
    case "desCBC":
      _0xe34945 = 8;
      _0x342340 = _0x18ea76.des.createDecryptionCipher;
  }
  var _0x4dd553 = _0x9de66d(_0x3c8fa9.prfOid);
  var _0x23b5ab = _0x18ea76.pkcs5.pbkdf2(_0x138054, _0x2cc8a9, _0x706c5, _0xe34945, _0x4dd553);
  var _0x7e06fa = _0x3c8fa9.encIv;
  var _0x4b2187 = _0x342340(_0x23b5ab);
  _0x4b2187.start(_0x7e06fa);
  return _0x4b2187;
};
_0x7114a0.pbe.getCipherForPKCS12PBE = function (_0x213ee9, _0x2a6ba6, _0x56f549) {
  var _0x49e7b1 = {};
  var _0x3c9c56 = [];
  if (!_0x20c805.validate(_0x2a6ba6, _0x3df518, _0x49e7b1, _0x3c9c56)) {
    (_0xc6bd7a = new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.")).errors = _0x3c9c56;
    throw _0xc6bd7a;
  }
  var _0x36f238;
  var _0x340d2f;
  var _0x15255e;
  var _0x1ade30 = _0x18ea76.util.createBuffer(_0x49e7b1.salt);
  var _0x3ed5c7 = _0x18ea76.util.createBuffer(_0x49e7b1.iterations);
  _0x3ed5c7 = _0x3ed5c7.getInt(_0x3ed5c7.length() << 3);
  switch (_0x213ee9) {
    case _0x7114a0.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
      _0x36f238 = 24;
      _0x340d2f = 8;
      _0x15255e = _0x18ea76.des.startDecrypting;
      break;
    case _0x7114a0.oids["pbewithSHAAnd40BitRC2-CBC"]:
      _0x36f238 = 5;
      _0x340d2f = 8;
      _0x15255e = function (_0x2d3d2f, _0x11eadf) {
        var _0xa7b50e = _0x18ea76.rc2.createDecryptionCipher(_0x2d3d2f, 40);
        _0xa7b50e.start(_0x11eadf, null);
        return _0xa7b50e;
      };
      break;
    default:
      var _0xc6bd7a;
      (_0xc6bd7a = new Error("Cannot read PKCS #12 PBE data block. Unsupported OID.")).oid = _0x213ee9;
      throw _0xc6bd7a;
  }
  var _0x23ee46 = _0x9de66d(_0x49e7b1.prfOid);
  var _0x2e7bd4 = _0x7114a0.pbe.generatePkcs12Key(_0x56f549, _0x1ade30, 1, _0x3ed5c7, _0x36f238, _0x23ee46);
  _0x23ee46.start();
  return _0x15255e(_0x2e7bd4, _0x7114a0.pbe.generatePkcs12Key(_0x56f549, _0x1ade30, 2, _0x3ed5c7, _0x340d2f, _0x23ee46));
};
_0x7114a0.pbe.opensslDeriveBytes = function (_0x3efe0b, _0x4d991d, _0x4f9475, _0x4cbeac) {
  if (_0x4cbeac == null) {
    if (!("md5" in _0x18ea76.md)) {
      throw new Error("\"md5\" hash algorithm unavailable.");
    }
    _0x4cbeac = _0x18ea76.md.md5.create();
  }
  if (_0x4d991d === null) {
    _0x4d991d = "";
  }
  var _0x4d8641 = [_0x56d473(_0x4cbeac, _0x3efe0b + _0x4d991d)];
  for (var _0x35a17a = 16, _0x51f628 = 1; _0x35a17a < _0x4f9475; ++_0x51f628, _0x35a17a += 16) {
    _0x4d8641.push(_0x56d473(_0x4cbeac, _0x4d8641[_0x51f628 - 1] + _0x3efe0b + _0x4d991d));
  }
  return _0x4d8641.join("").substr(0, _0x4f9475);
};