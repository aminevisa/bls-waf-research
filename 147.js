var _0x4e228b = require("./832.js");
require("./68.js");
require("./607.js");
require("./270.js");
require("./496.js");
require("./450.js");
require("./563.js");
require("./95.js");
require("./137.js");
require("./116.js");
require("./414.js");
var _0x33cf30 = _0x4e228b.asn1;
var _0x324930 = _0x4e228b.pki;
var _0x394cd3 = module.exports = _0x4e228b.pkcs12 = _0x4e228b.pkcs12 || {};
var _0x4248bf = {
  name: "ContentInfo",
  tagClass: _0x33cf30.Class.UNIVERSAL,
  type: _0x33cf30.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "ContentInfo.contentType",
    tagClass: _0x33cf30.Class.UNIVERSAL,
    type: _0x33cf30.Type.OID,
    constructed: false,
    capture: "contentType"
  }, {
    name: "ContentInfo.content",
    tagClass: _0x33cf30.Class.CONTEXT_SPECIFIC,
    constructed: true,
    captureAsn1: "content"
  }]
};
var _0xe0f090 = {
  name: "PFX",
  tagClass: _0x33cf30.Class.UNIVERSAL,
  type: _0x33cf30.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "PFX.version",
    tagClass: _0x33cf30.Class.UNIVERSAL,
    type: _0x33cf30.Type.INTEGER,
    constructed: false,
    capture: "version"
  }, _0x4248bf, {
    name: "PFX.macData",
    tagClass: _0x33cf30.Class.UNIVERSAL,
    type: _0x33cf30.Type.SEQUENCE,
    constructed: true,
    optional: true,
    captureAsn1: "mac",
    value: [{
      name: "PFX.macData.mac",
      tagClass: _0x33cf30.Class.UNIVERSAL,
      type: _0x33cf30.Type.SEQUENCE,
      constructed: true,
      value: [{
        name: "PFX.macData.mac.digestAlgorithm",
        tagClass: _0x33cf30.Class.UNIVERSAL,
        type: _0x33cf30.Type.SEQUENCE,
        constructed: true,
        value: [{
          name: "PFX.macData.mac.digestAlgorithm.algorithm",
          tagClass: _0x33cf30.Class.UNIVERSAL,
          type: _0x33cf30.Type.OID,
          constructed: false,
          capture: "macAlgorithm"
        }, {
          name: "PFX.macData.mac.digestAlgorithm.parameters",
          tagClass: _0x33cf30.Class.UNIVERSAL,
          captureAsn1: "macAlgorithmParameters"
        }]
      }, {
        name: "PFX.macData.mac.digest",
        tagClass: _0x33cf30.Class.UNIVERSAL,
        type: _0x33cf30.Type.OCTETSTRING,
        constructed: false,
        capture: "macDigest"
      }]
    }, {
      name: "PFX.macData.macSalt",
      tagClass: _0x33cf30.Class.UNIVERSAL,
      type: _0x33cf30.Type.OCTETSTRING,
      constructed: false,
      capture: "macSalt"
    }, {
      name: "PFX.macData.iterations",
      tagClass: _0x33cf30.Class.UNIVERSAL,
      type: _0x33cf30.Type.INTEGER,
      constructed: false,
      optional: true,
      capture: "macIterations"
    }]
  }]
};
var _0x3d20d0 = {
  name: "SafeBag",
  tagClass: _0x33cf30.Class.UNIVERSAL,
  type: _0x33cf30.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "SafeBag.bagId",
    tagClass: _0x33cf30.Class.UNIVERSAL,
    type: _0x33cf30.Type.OID,
    constructed: false,
    capture: "bagId"
  }, {
    name: "SafeBag.bagValue",
    tagClass: _0x33cf30.Class.CONTEXT_SPECIFIC,
    constructed: true,
    captureAsn1: "bagValue"
  }, {
    name: "SafeBag.bagAttributes",
    tagClass: _0x33cf30.Class.UNIVERSAL,
    type: _0x33cf30.Type.SET,
    constructed: true,
    optional: true,
    capture: "bagAttributes"
  }]
};
var _0xbb123b = {
  name: "Attribute",
  tagClass: _0x33cf30.Class.UNIVERSAL,
  type: _0x33cf30.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "Attribute.attrId",
    tagClass: _0x33cf30.Class.UNIVERSAL,
    type: _0x33cf30.Type.OID,
    constructed: false,
    capture: "oid"
  }, {
    name: "Attribute.attrValues",
    tagClass: _0x33cf30.Class.UNIVERSAL,
    type: _0x33cf30.Type.SET,
    constructed: true,
    capture: "values"
  }]
};
var _0x4bb7c0 = {
  name: "CertBag",
  tagClass: _0x33cf30.Class.UNIVERSAL,
  type: _0x33cf30.Type.SEQUENCE,
  constructed: true,
  value: [{
    name: "CertBag.certId",
    tagClass: _0x33cf30.Class.UNIVERSAL,
    type: _0x33cf30.Type.OID,
    constructed: false,
    capture: "certId"
  }, {
    name: "CertBag.certValue",
    tagClass: _0x33cf30.Class.CONTEXT_SPECIFIC,
    constructed: true,
    value: [{
      name: "CertBag.certValue[0]",
      tagClass: _0x33cf30.Class.UNIVERSAL,
      type: _0x33cf30.Class.OCTETSTRING,
      constructed: false,
      capture: "cert"
    }]
  }]
};
function _0x107b59(_0x41649d, _0x1fafb2, _0x55e2c9, _0x1dcd9b) {
  var _0x28cfaf = [];
  for (var _0x89d8e9 = 0; _0x89d8e9 < _0x41649d.length; _0x89d8e9++) {
    for (var _0x2f9071 = 0; _0x2f9071 < _0x41649d[_0x89d8e9].safeBags.length; _0x2f9071++) {
      var _0x4cbe71 = _0x41649d[_0x89d8e9].safeBags[_0x2f9071];
      if (_0x1dcd9b === undefined || _0x4cbe71.type === _0x1dcd9b) {
        if (_0x1fafb2 !== null) {
          if (_0x4cbe71.attributes[_0x1fafb2] !== undefined && _0x4cbe71.attributes[_0x1fafb2].indexOf(_0x55e2c9) >= 0) {
            _0x28cfaf.push(_0x4cbe71);
          }
        } else {
          _0x28cfaf.push(_0x4cbe71);
        }
      }
    }
  }
  return _0x28cfaf;
}
function _0x102eca(_0x12eff8) {
  if (_0x12eff8.composed || _0x12eff8.constructed) {
    var _0x483b46 = _0x4e228b.util.createBuffer();
    for (var _0x5516cf = 0; _0x5516cf < _0x12eff8.value.length; ++_0x5516cf) {
      _0x483b46.putBytes(_0x12eff8.value[_0x5516cf].value);
    }
    _0x12eff8.composed = _0x12eff8.constructed = false;
    _0x12eff8.value = _0x483b46.getBytes();
  }
  return _0x12eff8;
}
function _0x1144f4(_0x501267, _0x362e5e) {
  var _0x406217 = {};
  var _0x4c053f = [];
  if (!_0x33cf30.validate(_0x501267, _0x4e228b.pkcs7.asn1.encryptedDataValidator, _0x406217, _0x4c053f)) {
    (_0x33fcb2 = new Error("Cannot read EncryptedContentInfo.")).errors = _0x4c053f;
    throw _0x33fcb2;
  }
  var _0x33fcb2;
  var _0x3aa7d8 = _0x33cf30.derToOid(_0x406217.contentType);
  if (_0x3aa7d8 !== _0x324930.oids.data) {
    (_0x33fcb2 = new Error("PKCS#12 EncryptedContentInfo ContentType is not Data.")).oid = _0x3aa7d8;
    throw _0x33fcb2;
  }
  _0x3aa7d8 = _0x33cf30.derToOid(_0x406217.encAlgorithm);
  var _0x5e5bac = _0x324930.pbe.getCipher(_0x3aa7d8, _0x406217.encParameter, _0x362e5e);
  var _0x2fd81b = _0x102eca(_0x406217.encryptedContentAsn1);
  var _0x1f0699 = _0x4e228b.util.createBuffer(_0x2fd81b.value);
  _0x5e5bac.update(_0x1f0699);
  if (!_0x5e5bac.finish()) {
    throw new Error("Failed to decrypt PKCS#12 SafeContents.");
  }
  return _0x5e5bac.output.getBytes();
}
function _0xf90a81(_0x416824, _0xf4e0a1, _0x53e16a) {
  if (!_0xf4e0a1 && _0x416824.length === 0) {
    return [];
  }
  if ((_0x416824 = _0x33cf30.fromDer(_0x416824, _0xf4e0a1)).tagClass !== _0x33cf30.Class.UNIVERSAL || _0x416824.type !== _0x33cf30.Type.SEQUENCE || _0x416824.constructed !== true) {
    throw new Error("PKCS#12 SafeContents expected to be a SEQUENCE OF SafeBag.");
  }
  var _0x31bd66 = [];
  for (var _0x1e4575 = 0; _0x1e4575 < _0x416824.value.length; _0x1e4575++) {
    var _0x204198 = _0x416824.value[_0x1e4575];
    var _0x33c489 = {};
    var _0x2eb84c = [];
    if (!_0x33cf30.validate(_0x204198, _0x3d20d0, _0x33c489, _0x2eb84c)) {
      (_0x34d3f2 = new Error("Cannot read SafeBag.")).errors = _0x2eb84c;
      throw _0x34d3f2;
    }
    var _0x4b9db3;
    var _0xd8e681;
    var _0x577c0d = {
      type: _0x33cf30.derToOid(_0x33c489.bagId),
      attributes: _0x25efe1(_0x33c489.bagAttributes)
    };
    _0x31bd66.push(_0x577c0d);
    var _0x4608d8 = _0x33c489.bagValue.value[0];
    switch (_0x577c0d.type) {
      case _0x324930.oids.pkcs8ShroudedKeyBag:
        if ((_0x4608d8 = _0x324930.decryptPrivateKeyInfo(_0x4608d8, _0x53e16a)) === null) {
          throw new Error("Unable to decrypt PKCS#8 ShroudedKeyBag, wrong password?");
        }
      case _0x324930.oids.keyBag:
        try {
          _0x577c0d.key = _0x324930.privateKeyFromAsn1(_0x4608d8);
        } catch (_0x3c4b12) {
          _0x577c0d.key = null;
          _0x577c0d.asn1 = _0x4608d8;
        }
        continue;
      case _0x324930.oids.certBag:
        _0x4b9db3 = _0x4bb7c0;
        _0xd8e681 = function () {
          if (_0x33cf30.derToOid(_0x33c489.certId) !== _0x324930.oids.x509Certificate) {
            var _0x4b9544 = new Error("Unsupported certificate type, only X.509 supported.");
            _0x4b9544.oid = _0x33cf30.derToOid(_0x33c489.certId);
            throw _0x4b9544;
          }
          var _0x1333a0 = _0x33cf30.fromDer(_0x33c489.cert, _0xf4e0a1);
          try {
            _0x577c0d.cert = _0x324930.certificateFromAsn1(_0x1333a0, true);
          } catch (_0x279397) {
            _0x577c0d.cert = null;
            _0x577c0d.asn1 = _0x1333a0;
          }
        };
        break;
      default:
        var _0x34d3f2;
        (_0x34d3f2 = new Error("Unsupported PKCS#12 SafeBag type.")).oid = _0x577c0d.type;
        throw _0x34d3f2;
    }
    if (_0x4b9db3 !== undefined && !_0x33cf30.validate(_0x4608d8, _0x4b9db3, _0x33c489, _0x2eb84c)) {
      (_0x34d3f2 = new Error("Cannot read PKCS#12 " + _0x4b9db3.name)).errors = _0x2eb84c;
      throw _0x34d3f2;
    }
    _0xd8e681();
  }
  return _0x31bd66;
}
function _0x25efe1(_0x464d71) {
  var _0x4e4848 = {};
  if (_0x464d71 !== undefined) {
    for (var _0x3e5667 = 0; _0x3e5667 < _0x464d71.length; ++_0x3e5667) {
      var _0x48578f = {};
      var _0x4dc6d6 = [];
      if (!_0x33cf30.validate(_0x464d71[_0x3e5667], _0xbb123b, _0x48578f, _0x4dc6d6)) {
        var _0xbafc24 = new Error("Cannot read PKCS#12 BagAttribute.");
        _0xbafc24.errors = _0x4dc6d6;
        throw _0xbafc24;
      }
      var _0x4f33bd = _0x33cf30.derToOid(_0x48578f.oid);
      if (_0x324930.oids[_0x4f33bd] !== undefined) {
        _0x4e4848[_0x324930.oids[_0x4f33bd]] = [];
        for (var _0x1751be = 0; _0x1751be < _0x48578f.values.length; ++_0x1751be) {
          _0x4e4848[_0x324930.oids[_0x4f33bd]].push(_0x48578f.values[_0x1751be].value);
        }
      }
    }
  }
  return _0x4e4848;
}
_0x394cd3.pkcs12FromAsn1 = function (_0x801185, _0x264412, _0xeb48f2) {
  if (typeof _0x264412 == "string") {
    _0xeb48f2 = _0x264412;
    _0x264412 = true;
  } else if (_0x264412 === undefined) {
    _0x264412 = true;
  }
  var _0x1b99fe = {};
  if (!_0x33cf30.validate(_0x801185, _0xe0f090, _0x1b99fe, [])) {
    (_0x5e270f = new Error("Cannot read PKCS#12 PFX. ASN.1 object is not an PKCS#12 PFX.")).errors = _0x5e270f;
    throw _0x5e270f;
  }
  var _0x5e270f;
  var _0x435025 = {
    version: _0x1b99fe.version.charCodeAt(0),
    safeContents: [],
    getBags: function (_0x102c96) {
      var _0x400e14;
      var _0x25c243 = {};
      if ("localKeyId" in _0x102c96) {
        _0x400e14 = _0x102c96.localKeyId;
      } else if ("localKeyIdHex" in _0x102c96) {
        _0x400e14 = _0x4e228b.util.hexToBytes(_0x102c96.localKeyIdHex);
      }
      if (_0x400e14 === undefined && !("friendlyName" in _0x102c96) && "bagType" in _0x102c96) {
        _0x25c243[_0x102c96.bagType] = _0x107b59(_0x435025.safeContents, null, null, _0x102c96.bagType);
      }
      if (_0x400e14 !== undefined) {
        _0x25c243.localKeyId = _0x107b59(_0x435025.safeContents, "localKeyId", _0x400e14, _0x102c96.bagType);
      }
      if ("friendlyName" in _0x102c96) {
        _0x25c243.friendlyName = _0x107b59(_0x435025.safeContents, "friendlyName", _0x102c96.friendlyName, _0x102c96.bagType);
      }
      return _0x25c243;
    },
    getBagsByFriendlyName: function (_0x141a6c, _0x551e42) {
      return _0x107b59(_0x435025.safeContents, "friendlyName", _0x141a6c, _0x551e42);
    },
    getBagsByLocalKeyId: function (_0x57e8f8, _0x456ef1) {
      return _0x107b59(_0x435025.safeContents, "localKeyId", _0x57e8f8, _0x456ef1);
    }
  };
  if (_0x1b99fe.version.charCodeAt(0) !== 3) {
    (_0x5e270f = new Error("PKCS#12 PFX of version other than 3 not supported.")).version = _0x1b99fe.version.charCodeAt(0);
    throw _0x5e270f;
  }
  if (_0x33cf30.derToOid(_0x1b99fe.contentType) !== _0x324930.oids.data) {
    (_0x5e270f = new Error("Only PKCS#12 PFX in password integrity mode supported.")).oid = _0x33cf30.derToOid(_0x1b99fe.contentType);
    throw _0x5e270f;
  }
  var _0x228d2b = _0x1b99fe.content.value[0];
  if (_0x228d2b.tagClass !== _0x33cf30.Class.UNIVERSAL || _0x228d2b.type !== _0x33cf30.Type.OCTETSTRING) {
    throw new Error("PKCS#12 authSafe content data is not an OCTET STRING.");
  }
  _0x228d2b = _0x102eca(_0x228d2b);
  if (_0x1b99fe.mac) {
    var _0xabb3da = null;
    var _0x49cb95 = 0;
    var _0x8473c9 = _0x33cf30.derToOid(_0x1b99fe.macAlgorithm);
    switch (_0x8473c9) {
      case _0x324930.oids.sha1:
        _0xabb3da = _0x4e228b.md.sha1.create();
        _0x49cb95 = 20;
        break;
      case _0x324930.oids.sha256:
        _0xabb3da = _0x4e228b.md.sha256.create();
        _0x49cb95 = 32;
        break;
      case _0x324930.oids.sha384:
        _0xabb3da = _0x4e228b.md.sha384.create();
        _0x49cb95 = 48;
        break;
      case _0x324930.oids.sha512:
        _0xabb3da = _0x4e228b.md.sha512.create();
        _0x49cb95 = 64;
        break;
      case _0x324930.oids.md5:
        _0xabb3da = _0x4e228b.md.md5.create();
        _0x49cb95 = 16;
    }
    if (_0xabb3da === null) {
      throw new Error("PKCS#12 uses unsupported MAC algorithm: " + _0x8473c9);
    }
    var _0x3f216e = new _0x4e228b.util.ByteBuffer(_0x1b99fe.macSalt);
    var _0x2f1543 = "macIterations" in _0x1b99fe ? parseInt(_0x4e228b.util.bytesToHex(_0x1b99fe.macIterations), 16) : 1;
    var _0x1ac991 = _0x394cd3.generateKey(_0xeb48f2, _0x3f216e, 3, _0x2f1543, _0x49cb95, _0xabb3da);
    var _0x22c610 = _0x4e228b.hmac.create();
    _0x22c610.start(_0xabb3da, _0x1ac991);
    _0x22c610.update(_0x228d2b.value);
    if (_0x22c610.getMac().getBytes() !== _0x1b99fe.macDigest) {
      throw new Error("PKCS#12 MAC could not be verified. Invalid password?");
    }
  }
  (function (_0x21503c, _0x2211d7, _0x44ab12, _0x275770) {
    _0x2211d7 = _0x33cf30.fromDer(_0x2211d7, _0x44ab12);
    if (_0x2211d7.tagClass !== _0x33cf30.Class.UNIVERSAL || _0x2211d7.type !== _0x33cf30.Type.SEQUENCE || _0x2211d7.constructed !== true) {
      throw new Error("PKCS#12 AuthenticatedSafe expected to be a SEQUENCE OF ContentInfo");
    }
    for (var _0x740431 = 0; _0x740431 < _0x2211d7.value.length; _0x740431++) {
      var _0x373678 = _0x2211d7.value[_0x740431];
      var _0xe2541b = {};
      var _0x694012 = [];
      if (!_0x33cf30.validate(_0x373678, _0x4248bf, _0xe2541b, _0x694012)) {
        (_0x706f2d = new Error("Cannot read ContentInfo.")).errors = _0x694012;
        throw _0x706f2d;
      }
      var _0x2d666f = {
        encrypted: false
      };
      var _0x567afd = null;
      var _0x53bc57 = _0xe2541b.content.value[0];
      switch (_0x33cf30.derToOid(_0xe2541b.contentType)) {
        case _0x324930.oids.data:
          if (_0x53bc57.tagClass !== _0x33cf30.Class.UNIVERSAL || _0x53bc57.type !== _0x33cf30.Type.OCTETSTRING) {
            throw new Error("PKCS#12 SafeContents Data is not an OCTET STRING.");
          }
          _0x567afd = _0x102eca(_0x53bc57).value;
          break;
        case _0x324930.oids.encryptedData:
          _0x567afd = _0x1144f4(_0x53bc57, _0x275770);
          _0x2d666f.encrypted = true;
          break;
        default:
          var _0x706f2d;
          (_0x706f2d = new Error("Unsupported PKCS#12 contentType.")).contentType = _0x33cf30.derToOid(_0xe2541b.contentType);
          throw _0x706f2d;
      }
      _0x2d666f.safeBags = _0xf90a81(_0x567afd, _0x44ab12, _0x275770);
      _0x21503c.safeContents.push(_0x2d666f);
    }
  })(_0x435025, _0x228d2b.value, _0x264412, _0xeb48f2);
  return _0x435025;
};
_0x394cd3.toPkcs12Asn1 = function (_0x17aa5a, _0x1ab2f6, _0x3b4a26, _0x3a156c) {
  (_0x3a156c = _0x3a156c || {}).saltSize = _0x3a156c.saltSize || 8;
  _0x3a156c.count = _0x3a156c.count || 2048;
  _0x3a156c.algorithm = _0x3a156c.algorithm || _0x3a156c.encAlgorithm || "aes128";
  if (!("useMac" in _0x3a156c)) {
    _0x3a156c.useMac = true;
  }
  if (!("localKeyId" in _0x3a156c)) {
    _0x3a156c.localKeyId = null;
  }
  if (!("generateLocalKeyId" in _0x3a156c)) {
    _0x3a156c.generateLocalKeyId = true;
  }
  var _0x327182;
  var _0x5666de = _0x3a156c.localKeyId;
  if (_0x5666de !== null) {
    _0x5666de = _0x4e228b.util.hexToBytes(_0x5666de);
  } else if (_0x3a156c.generateLocalKeyId) {
    if (_0x1ab2f6) {
      var _0x345029 = _0x4e228b.util.isArray(_0x1ab2f6) ? _0x1ab2f6[0] : _0x1ab2f6;
      if (typeof _0x345029 == "string") {
        _0x345029 = _0x324930.certificateFromPem(_0x345029);
      }
      (_0x41e067 = _0x4e228b.md.sha1.create()).update(_0x33cf30.toDer(_0x324930.certificateToAsn1(_0x345029)).getBytes());
      _0x5666de = _0x41e067.digest().getBytes();
    } else {
      _0x5666de = _0x4e228b.random.getBytes(20);
    }
  }
  var _0x5514b4 = [];
  if (_0x5666de !== null) {
    _0x5514b4.push(_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.SEQUENCE, true, [_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.OID, false, _0x33cf30.oidToDer(_0x324930.oids.localKeyId).getBytes()), _0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.SET, true, [_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.OCTETSTRING, false, _0x5666de)])]));
  }
  if ("friendlyName" in _0x3a156c) {
    _0x5514b4.push(_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.SEQUENCE, true, [_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.OID, false, _0x33cf30.oidToDer(_0x324930.oids.friendlyName).getBytes()), _0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.SET, true, [_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.BMPSTRING, false, _0x3a156c.friendlyName)])]));
  }
  if (_0x5514b4.length > 0) {
    _0x327182 = _0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.SET, true, _0x5514b4);
  }
  var _0x4f5e6f = [];
  var _0x19ee3d = [];
  if (_0x1ab2f6 !== null) {
    _0x19ee3d = _0x4e228b.util.isArray(_0x1ab2f6) ? _0x1ab2f6 : [_0x1ab2f6];
  }
  var _0x455e94 = [];
  for (var _0x3e2b01 = 0; _0x3e2b01 < _0x19ee3d.length; ++_0x3e2b01) {
    if (typeof (_0x1ab2f6 = _0x19ee3d[_0x3e2b01]) == "string") {
      _0x1ab2f6 = _0x324930.certificateFromPem(_0x1ab2f6);
    }
    var _0x568a0a = _0x3e2b01 === 0 ? _0x327182 : undefined;
    var _0x1e0bb5 = _0x324930.certificateToAsn1(_0x1ab2f6);
    var _0x3c5c14 = _0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.SEQUENCE, true, [_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.OID, false, _0x33cf30.oidToDer(_0x324930.oids.certBag).getBytes()), _0x33cf30.create(_0x33cf30.Class.CONTEXT_SPECIFIC, 0, true, [_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.SEQUENCE, true, [_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.OID, false, _0x33cf30.oidToDer(_0x324930.oids.x509Certificate).getBytes()), _0x33cf30.create(_0x33cf30.Class.CONTEXT_SPECIFIC, 0, true, [_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.OCTETSTRING, false, _0x33cf30.toDer(_0x1e0bb5).getBytes())])])]), _0x568a0a]);
    _0x455e94.push(_0x3c5c14);
  }
  if (_0x455e94.length > 0) {
    var _0x52710a = _0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.SEQUENCE, true, _0x455e94);
    var _0x5a6248 = _0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.SEQUENCE, true, [_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.OID, false, _0x33cf30.oidToDer(_0x324930.oids.data).getBytes()), _0x33cf30.create(_0x33cf30.Class.CONTEXT_SPECIFIC, 0, true, [_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.OCTETSTRING, false, _0x33cf30.toDer(_0x52710a).getBytes())])]);
    _0x4f5e6f.push(_0x5a6248);
  }
  var _0x584a25 = null;
  if (_0x17aa5a !== null) {
    var _0x30db62 = _0x324930.wrapRsaPrivateKey(_0x324930.privateKeyToAsn1(_0x17aa5a));
    _0x584a25 = _0x3b4a26 === null ? _0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.SEQUENCE, true, [_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.OID, false, _0x33cf30.oidToDer(_0x324930.oids.keyBag).getBytes()), _0x33cf30.create(_0x33cf30.Class.CONTEXT_SPECIFIC, 0, true, [_0x30db62]), _0x327182]) : _0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.SEQUENCE, true, [_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.OID, false, _0x33cf30.oidToDer(_0x324930.oids.pkcs8ShroudedKeyBag).getBytes()), _0x33cf30.create(_0x33cf30.Class.CONTEXT_SPECIFIC, 0, true, [_0x324930.encryptPrivateKeyInfo(_0x30db62, _0x3b4a26, _0x3a156c)]), _0x327182]);
    var _0x44db31 = _0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.SEQUENCE, true, [_0x584a25]);
    var _0x4a9523 = _0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.SEQUENCE, true, [_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.OID, false, _0x33cf30.oidToDer(_0x324930.oids.data).getBytes()), _0x33cf30.create(_0x33cf30.Class.CONTEXT_SPECIFIC, 0, true, [_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.OCTETSTRING, false, _0x33cf30.toDer(_0x44db31).getBytes())])]);
    _0x4f5e6f.push(_0x4a9523);
  }
  var _0x2a21fc;
  var _0x136dc6 = _0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.SEQUENCE, true, _0x4f5e6f);
  if (_0x3a156c.useMac) {
    var _0x41e067 = _0x4e228b.md.sha1.create();
    var _0xaf06d6 = new _0x4e228b.util.ByteBuffer(_0x4e228b.random.getBytes(_0x3a156c.saltSize));
    var _0x5eb358 = _0x3a156c.count;
    _0x17aa5a = _0x394cd3.generateKey(_0x3b4a26, _0xaf06d6, 3, _0x5eb358, 20);
    var _0x4b761a = _0x4e228b.hmac.create();
    _0x4b761a.start(_0x41e067, _0x17aa5a);
    _0x4b761a.update(_0x33cf30.toDer(_0x136dc6).getBytes());
    var _0x55750d = _0x4b761a.getMac();
    _0x2a21fc = _0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.SEQUENCE, true, [_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.SEQUENCE, true, [_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.SEQUENCE, true, [_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.OID, false, _0x33cf30.oidToDer(_0x324930.oids.sha1).getBytes()), _0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.NULL, false, "")]), _0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.OCTETSTRING, false, _0x55750d.getBytes())]), _0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.OCTETSTRING, false, _0xaf06d6.getBytes()), _0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.INTEGER, false, _0x33cf30.integerToDer(_0x5eb358).getBytes())]);
  }
  return _0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.SEQUENCE, true, [_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.INTEGER, false, _0x33cf30.integerToDer(3).getBytes()), _0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.SEQUENCE, true, [_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.OID, false, _0x33cf30.oidToDer(_0x324930.oids.data).getBytes()), _0x33cf30.create(_0x33cf30.Class.CONTEXT_SPECIFIC, 0, true, [_0x33cf30.create(_0x33cf30.Class.UNIVERSAL, _0x33cf30.Type.OCTETSTRING, false, _0x33cf30.toDer(_0x136dc6).getBytes())])]), _0x2a21fc]);
};
_0x394cd3.generateKey = _0x4e228b.pbe.generatePkcs12Key;